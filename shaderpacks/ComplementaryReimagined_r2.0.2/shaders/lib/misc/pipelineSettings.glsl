/*
const int colortex0Format = R11F_G11F_B10F; //main color
const int colortex1Format = RGB8;			//smoothnessD & materialMask & skyLightFactor
const int colortex2Format = RGB16;		    //taa
const int colortex3Format = RGB8;		    //*cloud texture on deferred* & translucentMult & bloom & final color
const int colortex4Format = R8;				//volumetric cloud linear depth & volumetric light factor
const int colortex5Format = RGBA8_SNORM;    //normalM & scene image for water reflections
const int colortex6Format = R8;		        //*cloud texture on gbuffers*
#ifdef TEMPORAL_FILTER
const int colortex7Format = RGBA16F;		//temporal filter
#endif
*/

const bool colortex0Clear = true;
const bool colortex1Clear = true;
const bool colortex2Clear = false;
const bool colortex3Clear = true;
const bool colortex4Clear = false;
const bool colortex5Clear = false;
const bool colortex6Clear = false;
#ifdef TEMPORAL_FILTER
const bool colortex7Clear = false;
#endif

const int noiseTextureResolution = 128;

const bool shadowHardwareFiltering = true;
const float shadowDistanceRenderMul = 1.0;
const float entityShadowDistanceMul = 0.125; // Iris devs may bless us with their power

const float drynessHalflife = 300.0;
const float wetnessHalflife = 300.0;

const float ambientOcclusionLevel = 1.0;