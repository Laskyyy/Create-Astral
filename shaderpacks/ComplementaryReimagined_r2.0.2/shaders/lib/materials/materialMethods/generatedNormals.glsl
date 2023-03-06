const float normalThreshold = 0.05;
const float normalClamp = 0.2;
const float packSizeGN = 128.0;

float GetDif(float lOriginalAlbedo, vec2 offsetCoord) {
    #ifndef GBUFFERS_WATER
        float lNearbyAlbedo = length(texture2D(texture, offsetCoord).rgb);    
    #else
        vec4 textureSample = texture2D(texture, offsetCoord);
        float lNearbyAlbedo = length(textureSample.rgb * textureSample.a * 1.5);
    #endif
    
    #ifdef GBUFFERS_ENTITIES
        lOriginalAlbedo = abs(lOriginalAlbedo - 1.0);
        lNearbyAlbedo = abs(lNearbyAlbedo - 1.0);
    #endif

    float dif = lOriginalAlbedo - lNearbyAlbedo;

    #ifdef GBUFFERS_ENTITIES
        dif = -dif;
    #endif

    #ifndef GBUFFERS_WATER
        if (dif > 0.0) dif = max(dif - normalThreshold, 0.0);
        else           dif = min(dif + normalThreshold, 0.0);
    #endif

    return clamp(dif, -normalClamp, normalClamp);
}

void GenerateNormals(inout vec3 normalM, vec3 color) {
    vec2 absMidCoordPos2 = absMidCoordPos * 2.0;

    float lOriginalAlbedo = length(color.rgb);
    float normalMult = max0(1.0 - mipDelta) * 2.5;

    #ifndef SAFER_GENERATED_NORMALS
        vec2 offsetR = 16.0 / atlasSizeM;
    #else
        vec2 offsetR = max(absMidCoordPos2.x, absMidCoordPos2.y) * vec2(float(atlasSizeM.y) / float(atlasSizeM.x), 1.0);
    #endif
    offsetR /= packSizeGN;

    vec2 midCoord = texCoord - midCoordPos;
    vec2 maxOffsetCoord = midCoord + absMidCoordPos;
    vec2 minOffsetCoord = midCoord - absMidCoordPos;
    if (normalMult > 0.0) {
	    vec3 normalMap = vec3(0.0, 0.0, 1.0);

        vec2 offsetCoord = texCoord + vec2( 0.0, offsetR.y);
        if (offsetCoord.y < maxOffsetCoord.y) 
            normalMap.y += GetDif(lOriginalAlbedo, offsetCoord);

        offsetCoord = texCoord + vec2( offsetR.x, 0.0);
        if (offsetCoord.x < maxOffsetCoord.x) 
            normalMap.x += GetDif(lOriginalAlbedo, offsetCoord);

        offsetCoord = texCoord + vec2( 0.0,-offsetR.y);
        if (offsetCoord.y > minOffsetCoord.y) 
            normalMap.y -= GetDif(lOriginalAlbedo, offsetCoord);
            
        offsetCoord = texCoord + vec2(-offsetR.x, 0.0);
        if (offsetCoord.x > minOffsetCoord.x) 
            normalMap.x -= GetDif(lOriginalAlbedo, offsetCoord);
        
        normalMap.xy *= normalMult;

        if (normalMap.xy != vec2(0.0, 0.0))
            normalM = clamp(normalize(normalMap * tbnMatrix), vec3(-1.0), vec3(1.0));
    }
}