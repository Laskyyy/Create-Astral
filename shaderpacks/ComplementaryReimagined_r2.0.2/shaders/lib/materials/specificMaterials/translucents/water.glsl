#if MC_VERSION >= 11300
    vec3 glColorM = glColor.rgb;
#else
    vec3 glColorM = texture2DLod(texture, texCoord, 100.0).rgb * vec3(1.35, 1.8, 1.0);
    colorP.rgb = min(pow2(pow2(pow2(color.rgb / normalize(color.rgb) * 0.95))), vec3(0.9));
#endif

glColorM.g = max(glColorM.g, 0.35);
glColorM = sqrt1(glColorM) * vec3(1.0, 0.85, 0.8);

#if WATER_STYLE < 3
    vec3 colorPM = pow2(colorP.rgb);
    color.rgb = colorPM * glColorM;
#else
    vec3 colorPM = vec3(0.25);
    color.rgb = colorPM * glColorM;
#endif

#define PHYSICS_OCEAN_INJECTION
#if defined GENERATED_NORMALS && WATER_STYLE >= 3 || defined PHYSICS_OCEAN
    noGeneratedNormals = true;
#endif

#ifdef GBUFFERS_WATER
    translucentMultCalculated = true;

    lmCoordM.y = min(lmCoord.y * 1.07, 1.0); // Iris/Sodium skylight inconsistency workaround

    reflectMult = 1.0;

    #if WATER_QUALITY >= 2 || WATER_STYLE >= 2
        vec2 wind = vec2(frameTimeCounter * 0.016, 0.0);
        vec3 worldPos = playerPos + cameraPosition;
        vec2 waterPos = worldPos.xz * 16.0;
        #if WATER_STYLE < 3
             waterPos = floor(waterPos);
        #endif
        waterPos = 0.002 * (waterPos + worldPos.y * 32.0);
    #endif

    #if WATER_QUALITY >= 2
        // Noise Coloring
        float noise = texture2D(noisetex, (waterPos + wind) * 0.25).g;
              noise = noise - 0.5;
              noise *= 0.25;
        color.rgb = pow(color.rgb, vec3(1.0 + noise));
        
        if (isEyeInWater != 1) {
            float depthT = texelFetch(depthtex1, texelCoord, 0).r;
            vec3 screenPosT = vec3(screenCoord, depthT);
            #ifdef TAA
                vec3 viewPosT = ScreenToView(vec3(TAAJitter(screenPosT.xy, -0.5), screenPosT.z));
            #else
                vec3 viewPosT = ScreenToView(screenPosT);
            #endif
            float lViewPosT = length(viewPosT);
            float lViewPosDif = lViewPos - lViewPosT;
            
            float waterFog = max0(1.0 - exp(lViewPosDif * 0.15));
            #if WATER_STYLE < 3
                color.a = sqrt1(color.a);
                color.a *= 0.5 + 0.5 * waterFog;
            #else
                color.a = 0.98;
                color.a *= 0.25 + 0.75 * waterFog;
            #endif
        
            // Water Foam
            if (NdotU > 0.99) {
                vec3 matrixM = vec3(
                    gbufferModelViewInverse[0].y,
                    gbufferModelViewInverse[1].y,
                    gbufferModelViewInverse[2].y
                );
                float playerPosTY = dot(matrixM, viewPosT) + gbufferModelViewInverse[3].y;
                float yPosDif = playerPosTY - playerPos.y;

                #if WATER_STYLE < 3
                    float dotColorPM = dot(colorPM, colorPM);
                    float foamThreshold = min(pow2(dotColorPM) * 1.6, 1.2);
                #else
                    float foamThreshold = pow2(texture2D(noisetex, waterPos * 4.0 + wind * 0.5).g) * 1.2;
                #endif
                float foam = pow2(clamp((foamThreshold + yPosDif) / foamThreshold, 0.0, 1.0));
                foam *= color.b * 0.6 + 0.4 * pow2(lmCoord.y);
                foam *= clamp((fract(worldPos.y) - 0.7) * 10.0, 0.0, 1.0);

                color = mix(color, vec4(0.9, 0.95, 1.05, 1.0), foam);
                reflectMult = 1.0 - foam;
            }
        } else {
            color.rgb *= 1.0 + lmCoordM.y * 0.5;
            noDirectionalShading = true;

            reflectMult = 0.5;
        }
    #else
        shadowMult = vec3(0.0); 
    #endif

    #if WATER_STYLE >= 2 || RAIN_PUDDLES >= 1 && WATER_STYLE == 1
        #if WATER_STYLE >= 2
            vec3 normalMap = vec3(0.0, 0.0, 1.0);

            #if WATER_STYLE < 3
                normalMap.xy += texture2D(noisetex, waterPos + wind * 0.5).rg - 0.5;
                waterPos *= 0.5;
                normalMap.xy -= texture2D(noisetex, waterPos - wind).rg - 0.5;
                waterPos *= 0.5;
                normalMap.xy -= texture2D(noisetex, waterPos + wind).rg - 0.5;
            #else
                waterPos *= 0.35;
                wind *= 0.8;
                vec2 parallaxMult = 0.0005 * viewVector.xy / lViewPos;
                float normalOffset = 0.002;
                float waveMult = 1.25;

                for (int i = 0; i < 4; i++) {
                    float height = 0.5 - GetWaterHeightMap(waterPos, nViewPos, wind);
                    waterPos += parallaxMult * pow2(height);
                }

                float h1 = GetWaterHeightMap(waterPos + vec2( normalOffset, 0.0), nViewPos, wind);
                float h2 = GetWaterHeightMap(waterPos + vec2(-normalOffset, 0.0), nViewPos, wind);
                float h3 = GetWaterHeightMap(waterPos + vec2(0.0,  normalOffset), nViewPos, wind);
                float h4 = GetWaterHeightMap(waterPos + vec2(0.0, -normalOffset), nViewPos, wind);

                normalMap.xy = vec2(h1 - h2, h3 - h4) * waveMult;
            #endif

            normalMap.xy *= 0.03 * lmCoordM.y + 0.01;
            vec3 minNormal = mix(normal, vec3(-1.0), pow2(1.0 - fresnel));
        #else
            float pNormalMult = 0.02 * rainFactor * isRainy * pow2(lmCoordM.y);

            if (pNormalMult > 0.0005) {       
                vec2 puddlePos = floor((playerPos.xz + cameraPosition.xz) * 16.0) * 0.00625;

                vec2 puddleWind = vec2(frameTimeCounter) * 0.015;
                vec2 pNormalCoord1 = puddlePos + vec2(puddleWind.x, puddleWind.y);
                vec2 pNormalCoord2 = puddlePos + vec2(puddleWind.x * -1.5, puddleWind.y * -1.0);
                vec3 pNormalNoise1 = texture2D(noisetex, pNormalCoord1).rgb;
                vec3 pNormalNoise2 = texture2D(noisetex, pNormalCoord2).rgb;
                
                vec3 normalMap = vec3((pNormalNoise1.xy + pNormalNoise2.xy - vec2(1.0)) * pNormalMult, 1.0);
                vec3 minNormal = vec3(-1.0);

        #endif

            normalM = clamp(normalize(normalMap * tbnMatrix), minNormal, vec3(1.0));

        #if WATER_STYLE == 1
            }
        #endif

        #if WATER_STYLE >= 3
            fresnel = clamp(1.0 + dot(normalM, nViewPos), 0.0, 1.0);
        #endif
    #endif

    float fresnel2 = pow2(fresnel);
    float fresnel4 = pow2(fresnel2);

    // Final Tweaks
    reflectMult *= 0.5 + 0.5 * max0(NdotU);

    #if WATER_STYLE >= 3
        color.rgb *= 1.0 + pow2(fresnel);
    #endif

    // Blending 
    translucentMult.rgb = normalize(sqrt2(glColor.rgb));
    translucentMult.g *= 0.88;
    translucentMult.rgb = mix(translucentMult.rgb, vec3(float(isEyeInWater == 0) * eyeBrightnessM), fresnel4);
    if (isEyeInWater == 0)
        translucentMult.rgb = mix(translucentMult.rgb, vec3(1.0), min1(lViewPos * TRANSLUCENT_BLEND_FALLOFF_MULT));
    color.a = mix(color.a, 1.0, fresnel4);

    // Highlight
    #if WATER_STYLE < 3
        smoothnessG = 0.5;
        highlightMult = min(pow2(pow2(dot(colorP.rgb, colorP.rgb) * 0.4)), 0.5) * (16.0 - 15.0 * fresnel2) * (sunVisibility > 0.5 ? 1.0 : 0.5);
    #else
        smoothnessG = 0.5;
        highlightMult = 0.4 - 0.375 * fresnel2;
    #endif
#endif