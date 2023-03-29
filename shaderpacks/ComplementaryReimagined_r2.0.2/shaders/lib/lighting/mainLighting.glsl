//Lighting Uniforms//
uniform float darknessLightFactor;

#if HELD_LIGHTING_MODE >= 1
	uniform int heldBlockLightValue;
	uniform int heldBlockLightValue2;
#endif

//Lighting Includes//
#include "/lib/colors/lightAndAmbientColors.glsl"
#include "/lib/lighting/ggx.glsl"

#if defined REALTIME_SHADOWS && (defined OVERWORLD || defined END)
    #include "/lib/lighting/shadowSampling.glsl"
#endif

#ifdef CLOUD_SHADOWS
    #include "/lib/atmospherics/clouds/cloudCoord.glsl"
#endif

//
vec3 highlightColor = normalize(pow(lightColor, vec3(0.37))) * (0.5 + 1.3 * sunVisibility2) * (1.0 - 0.85 * rainFactor);

//Lighting//
void DoLighting(inout vec3 color, inout vec3 shadowMult, vec3 playerPos, vec3 viewPos, float lViewPos, vec3 normalM, vec2 lightmap,
                bool noSmoothLighting, bool noDirectionalShading, bool noVanillaAO, bool centerShadowBias, int subsurfaceMode,
                float smoothnessG, float highlightMult, float emission) {
    float lightmapY2 = pow2(lightmap.y);
    float lightmapYM = smoothstep1(lightmap.y);
    float subsurfaceHighlight = 0.0;
    vec3 ambientMult = vec3(1.0);
    vec3 shadowLighting = lightColor;
    vec3 nViewPos = normalize(viewPos);
    float NdotUmax0 = max0(NdotU);

    #ifdef OVERWORLD
        float skyLightShadowMult = pow2(pow2(lightmapY2));
    #else
        float skyLightShadowMult = 1.0;
    #endif

    #if defined SIDE_SHADOWING || defined DIRECTIONAL_SHADING
        float NdotN = dot(normalM, northVec);
        float absNdotN = abs(NdotN);
    #endif

    // Shadows
    #if defined OVERWORLD || defined END
        float NdotL = dot(normalM, lightVec);
        #ifndef REALTIME_SHADOWS
            if (subsurfaceMode == 1) {
                NdotU = 1.0;
                NdotUmax0 = 1.0;
                NdotL = dot(upVec, lightVec);
            } else if (subsurfaceMode == 2) {
                highlightMult *= NdotL;
                NdotL = mix(NdotL, 1.0, 0.35);
            }

            subsurfaceMode = 0;
        #endif
        float NdotLmax0 = max0(NdotL);
        float NdotLM = NdotLmax0 * 0.9999;

        #ifndef GBUFFERS_TEXTURED
                #ifdef GBUFFERS_TERRAIN
                    if (subsurfaceMode != 0) NdotLM = 1.0;
                #endif
            #ifdef SIDE_SHADOWING
                #ifdef GBUFFERS_TERRAIN
                     else
                #endif
                NdotLM = max0(NdotL + 0.4) * 0.714;

                #ifdef END
                    NdotLM = sqrt3(NdotLM);
                #endif
            #endif
        #else
            NdotLM = 1.0;
        #endif

        #if !defined ENTITY_SHADOWS && (defined GBUFFERS_ENTITIES || defined GBUFFERS_BLOCK)
            shadowLighting = mix(shadowLighting * 0.75, ambientColor, 0.5 * pow2(pow2(1.0 - NdotLM)));
            NdotLM = NdotLM * 0.75 + 0.25;
        #endif

        if (shadowMult.r > 0.00001) {
            #ifdef REALTIME_SHADOWS
                if (NdotLM > 0.0001) {
                    vec3 shadowMultBeforeLighting = shadowMult;
                    float shadowLength = shadowDistance * 0.9166667 - length(vec4(playerPos.x, playerPos.y, playerPos.y, playerPos.z));

                    if (shadowLength > 0.000001) {
                        float offset = 0.0009765;

                        vec3 playerPosM = playerPos;
                        
                        #if PIXEL_SHADOW > 0 && !defined GBUFFERS_HAND
                            playerPosM = floor((playerPosM + cameraPosition) * PIXEL_SHADOW + 0.001) / PIXEL_SHADOW - cameraPosition + 0.5 / PIXEL_SHADOW;
                        #endif

                        #ifndef GBUFFERS_TEXTURED
                            // Shadow bias without peter-panning
                            vec3 worldNormal = normalize(ViewToPlayer(normal*1000.0));
                            vec3 bias = worldNormal * min(0.12 + length(playerPos) / 200.0, 0.5) * (2.0 - NdotLmax0);

                            #ifdef GBUFFERS_TERRAIN
                                if (subsurfaceMode == 2) {
                                    bias *= vec3(0.0, 0.0, -0.75);
                                } else if (subsurfaceMode == 1) {
                                    bias *= 1.0 - lightmapYM;
                                }
                            #endif
                            // Fix light leaking in caves
                            if (lightmapYM < 0.999) {
                                #ifdef GBUFFERS_HAND
                                    playerPosM = mix(vec3(0.0), playerPosM, 0.2 + 0.8 * lightmapYM);
                                #else
                                    if (centerShadowBias) {
                                        vec3 centerPos = floor(playerPosM + cameraPosition) - cameraPosition + 0.5;
                                        playerPosM = mix(centerPos, playerPosM, 0.5 + 0.5 * lightmapYM);
                                    } else {
                                        vec3 edgeFactor = 0.2 * (0.5 - fract(playerPosM + cameraPosition + worldNormal * 0.01));

                                        #ifdef GBUFFERS_WATER
                                            bias *= 0.7;
                                            playerPosM += (1.0 - lightmapYM) * edgeFactor;
                                        #endif

                                        playerPosM += (1.0 - pow2(pow2(max(glColor.a, lightmapYM)))) * edgeFactor;
                                    }
                                #endif
                            }

                            playerPosM += bias;
                        #else
                            vec3 centerplayerPos = floor(playerPosM + cameraPosition) - cameraPosition + 0.5;
                            playerPosM = mix(centerplayerPos, playerPosM + vec3(0.0, 0.02, 0.0), lightmapYM);
                        #endif
                            
                        vec3 shadowPos = calculateShadowPos(playerPosM);

                        #ifdef TAA
                            float gradientNoise = InterleavedGradientNoise();
                        #else
                            float gradientNoise = 0.5;
                        #endif

                        bool leaves = false;
                        #ifdef GBUFFERS_TERRAIN
                            if (subsurfaceMode == 0) {
                                #if defined PERPENDICULAR_TWEAKS && defined SIDE_SHADOWING
                                    offset *= 1.0 + pow2(absNdotN);
                                #endif
                            } else {
                                float VdotL = dot(nViewPos, lightVec);
                                float lightFactor = pow(max(VdotL, 0.0), 10.0) * float(isEyeInWater == 0);
                                if (subsurfaceMode == 1) {
                                    offset = 0.0010235 * lightmapYM + 0.0009765;
                                    shadowPos.z -= max(NdotL * 0.0001, 0.0) * lightmapYM;
                                    subsurfaceHighlight = lightFactor * 0.8;
                                    #ifndef SHADOW_FILTERING
                                        shadowPos.z -= 0.0002;
                                    #endif
                                } else {
                                    leaves = true;
                                    offset = 0.0005235 * lightmapYM + 0.0009765;
                                    shadowPos.z -= 0.000175 * lightmapYM;
                                    subsurfaceHighlight = lightFactor * 0.6;
                                    #ifndef SHADOW_FILTERING
                                        NdotLM = mix(NdotL, NdotLM, 0.5);
                                    #endif
                                }
                            }
                        #endif

                        shadowMult *= GetShadow(shadowPos, offset, gradientNoise, leaves);
                    }

                    float shadowSmooth = 16.0;
                    if (shadowLength < shadowSmooth) {
                        float shadowMixer = max0(shadowLength / shadowSmooth);
                        
                        #ifdef GBUFFERS_TERRAIN
                            if (subsurfaceMode != 0) {
                                float shadowMixerM = pow2(shadowMixer);

                                if (subsurfaceMode == 1) skyLightShadowMult *= mix(0.6 + 0.3 * pow2(noonFactor), 1.0, shadowMixerM);
                                else skyLightShadowMult *= mix(NdotL * 0.4999 + 0.5, 1.0, shadowMixerM);

                                subsurfaceHighlight *= shadowMixer;
                            }
                        #endif

                        shadowMult = mix(vec3(skyLightShadowMult * shadowMultBeforeLighting), shadowMult, shadowMixer);
                    }

                    #ifdef CLOUD_SHADOWS
                        if (shadowMult.r > 0.0001) {
                            vec3 worldPos = playerPos + cameraPosition;

                            float EdotL = dot(eastVec, lightVec);
                            float EdotLM = tan(acos(EdotL));

                            #if SUN_ANGLE != 0
                                float NVdotLM = tan(acos(dot(northVec, lightVec)));
                            #endif

                            float distToCloudLayer1 = CLOUD_ALT1 - worldPos.y;
                            vec3 cloudOffset1 = vec3(distToCloudLayer1 / EdotLM, 0.0, 0.0);
                            #if SUN_ANGLE != 0
                                cloudOffset1.z += distToCloudLayer1 / NVdotLM;
                            #endif
                            vec2 cloudPos1 = GetRoundedCloudCoord(ModifyTracePos(worldPos + cloudOffset1, CLOUD_ALT1).xz);
                            float cloudSample = texture2D(gaux3, cloudPos1).r;
                            cloudSample *= clamp(distToCloudLayer1 * 0.1, 0.0, 1.0);

                            #if CLOUD_STYLE == 2
                                float distToCloudLayer2 = CLOUD_ALT2 - worldPos.y;
                                vec3 cloudOffset2 = vec3(distToCloudLayer2 / EdotLM, 0.0, 0.0);
                                #if SUN_ANGLE != 0
                                    cloudOffset2.z += distToCloudLayer2 / NVdotLM;
                                #endif
                                vec2 cloudPos2 = GetRoundedCloudCoord(ModifyTracePos(worldPos + cloudOffset2, CLOUD_ALT2).xz);
                                float cloudSample2 = texture2D(gaux3, cloudPos2).r;
                                cloudSample2 *= clamp(distToCloudLayer2 * 0.1, 0.0, 1.0);

                                cloudSample = max(cloudSample, cloudSample2);
                            #endif
                            
                            shadowMult *= 1.0 - 0.85 * cloudSample * sqrt3(1.0 - abs(EdotL));
                        }
                    #endif
                }
            #else
                shadowMult *= skyLightShadowMult;
            #endif

            shadowMult *= max(NdotLM * shadowTime, 0.0);
        }
        #ifdef GBUFFERS_WATER
            else { // Low Quality Water
                shadowMult = vec3(pow2(lightmapY2) * max(NdotLM * shadowTime, 0.0));
            }
        #endif
    #endif

    // Blocklight
    #if HELD_LIGHTING_MODE >= 1
        float heldLight = max(heldBlockLightValue, heldBlockLightValue2);
        float lViewPosL = lViewPos;
        #if HELD_LIGHTING_MODE == 1
            heldLight *= 0.75;
            lViewPosL *= 1.5;
        #elif HELD_LIGHTING_MODE == 2
            heldLight *= 0.97;
        #endif
        lightmap.x = max(lightmap.x, (heldLight - lViewPosL) * 0.066666);
    #endif
    float lightmapXM;
    if (!noSmoothLighting) {
        float lightmapXMSteep = pow2(pow2(lightmap.x * lightmap.x))  * (2.30 - 0.25 * vsBrightness);
        float lightmapXMCalm = max((lightmap.x - 0.05) * 0.925, 0.0) * (2.00 + 0.25 * vsBrightness);
        lightmapXM = pow(lightmapXMSteep + lightmapXMCalm, 1.5);
    } else lightmapXM = lightmap.x * lightmap.x * 3.0;

    // Minimum Light
    #if !defined END && MINIMUM_LIGHT_MODE > 0
        #if MINIMUM_LIGHT_MODE == 1
            vec3 minLighting = vec3(0.06);
        #elif MINIMUM_LIGHT_MODE == 2
            vec3 minLighting = vec3(0.075 + vsBrightness * 0.145);
        #elif MINIMUM_LIGHT_MODE == 3
            vec3 minLighting = vec3(0.25);
        #elif MINIMUM_LIGHT_MODE == 4
            vec3 minLighting = vec3(0.5);
        #endif

        minLighting *= 1.0 - lightmapYM;
    #else
        vec3 minLighting = vec3(0.0);
    #endif

    // Lighting Tweaks
    #ifdef OVERWORLD
        ambientMult = vec3(mix(lightmapYM, pow2(lightmapYM) * lightmapYM, rainFactor));

        #ifndef REALTIME_SHADOWS
            float tweakFactor = 1.0 + 0.6 * (1.0 - pow2(pow2(pow2(noonFactor))));
            shadowLighting /= tweakFactor;
            ambientMult *= mix(tweakFactor, 1.0, 0.5 * NdotUmax0);
            float bothTweak = 0.9;
            shadowLighting *= bothTweak;
            ambientMult *= bothTweak;
        #endif

        if (isEyeInWater != 1) {
            float lxFactor = (sunVisibility2 * 0.4 + (0.6 - 0.6 * pow2(invNoonFactor))) * (6.0 - 5.0 * rainFactor);
            lxFactor *= lightmapY2 + 2.0 * shadowMult.r;
            lxFactor = max0(lxFactor - emission * 1000000.0);
            lightmapXM *= pow(max(lightmap.x, 0.001), lxFactor);

            // Less light in the distance / more light closer to the camera during rain or night to simulate thicker fog
            float rainLF = 0.1 * rainFactor;
            float lightFogTweaks = 1.0 + max0(96.0 - lViewPos) * (0.002 * (1.0 - sunVisibility2) + 0.0104 * rainLF) - rainLF;
            ambientMult *= lightFogTweaks;
            shadowLighting *= lightFogTweaks;
        } else {
            lightmapXM *= 1.8;
            shadowLighting *= 0.25 + 0.75 * lightmapYM;
            minLighting *= 1.4;
        }
    #endif

    #ifdef GBUFFERS_HAND
        ambientMult *= 1.3; // To improve held map visibility
    #endif

    // Directional Shading
    float directionShade = 1.0;
    #ifdef DIRECTIONAL_SHADING
        if (!noDirectionalShading) {
            float NdotE = dot(normalM, eastVec);
            float absNdotE = abs(NdotE);
            float absNdotE2 = pow2(absNdotE);

            #if !defined NETHER || MC_VERSION < 11600
                float NdotUM = 0.75 + NdotU * 0.25;
            #else
                float NdotUM = 0.75 + abs(NdotU + 0.25) * 0.2;
            #endif
            float NdotNM = 1.0 + 0.075 * absNdotN;
            float NdotEM = 1.0 - 0.1 * absNdotE2;
            directionShade = NdotUM * NdotEM * NdotNM;

            #ifdef OVERWORLD
                shadowLighting *= 1.0 + absNdotE2 * 0.75;
            #elif defined NETHER && MC_VERSION >= 11600
                directionShade = pow(directionShade, 1.75);
            #endif

            #if defined CUSTOM_PBR && defined DIRECTIONAL_SHADING
                float NPdotU = abs(dot(normal, upVec));
                ambientColor *= 1.0 + 0.4 * NdotE * NPdotU;
            #endif

            #if defined OVERWORLD && defined PERPENDICULAR_TWEAKS && defined SIDE_SHADOWING
                // Fake bounced light
                ambientColor = mix(ambientColor, shadowLighting, (0.05 + 0.03 * subsurfaceMode) * absNdotN * lightmapY2);

                // Get a bit more natural looking lighting during noon
                shadowLighting *= 1.0 + max0(1.0 - subsurfaceMode) * pow(noonFactor, 20.0) * (pow2(absNdotN) - absNdotE2 * 0.1);
            #endif
        }
    #endif

    // Combine Lighting
    vec3 blockLighting = lightmapXM * blocklightCol;
    vec3 sceneLighting = shadowLighting * shadowMult + ambientColor * ambientMult;
    float dotSceneLighting = dot(sceneLighting, sceneLighting);
    
    // Vanilla Ambient Occlusion
    float vanillaAO = 1.0;
    if (subsurfaceMode != 0) vanillaAO = min1(glColor.a * 1.15);
    else if (!noVanillaAO) {
        #ifdef GBUFFERS_TERRAIN
            vanillaAO = min1(glColor.a + 0.08);
            #ifdef OVERWORLD
                vanillaAO = pow(
                    pow1_5(vanillaAO),
                    1.0 + dotSceneLighting * 0.02 + NdotUmax0 * (0.15 + 0.25 * pow2(noonFactor * pow2(lightmapY2)))
                );
            #elif defined NETHER
                vanillaAO = pow(
                    pow1_5(vanillaAO),
                    1.0 + NdotUmax0 * 0.5
                );
            #else
                vanillaAO = pow(
                    vanillaAO,
                    0.75 + NdotUmax0 * 0.25
                );
            #endif
        #else
            vanillaAO = glColor.a;
        #endif
        vanillaAO = vanillaAO * 0.9 + 0.1;
    }

    // Night Vision
    vec3 nightVisionLighting = nightVision * vec3(0.5, 0.5, 0.75);

    // Light Highlight
    vec3 lightHighlight = vec3(0.0);
    #ifdef LIGHT_HIGHLIGHT
        float specularHighlight = GGX(normalM, nViewPos, lightVec, NdotLmax0, smoothnessG);

        specularHighlight *= highlightMult;

        lightHighlight = isEyeInWater != 1 ? shadowMult : pow(shadowMult, vec3(0.25)) * 0.35;
        lightHighlight *= (subsurfaceHighlight + specularHighlight) * highlightColor;
    #endif

    // Final Lighting
    color.rgb *= directionShade * vanillaAO * (blockLighting + sceneLighting + minLighting + nightVisionLighting) + emission;
    color.rgb += lightHighlight;
    
    // Darkness Pulse
    color.rgb *= pow2(1.0 - darknessLightFactor);
}