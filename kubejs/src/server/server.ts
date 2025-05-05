import { yttrLootFix } from "./data/loot_tables/block";
import { wanderingWinemakerLoot } from "./data/loot_tables/entity";
import { villagerTrades } from "./data/villager_trades";
import { dragon } from "./misc/dragon";
import { interaction } from "./misc/interaction";
import { spawnPointFix } from "./misc/spawnpointfix";
import { hephaestusFluidSyncFix } from "./misc/tconstruct_fluidsyncfix";
import { adAstraCryoFuelConversionRecipes } from "./recipes/ad_astra/cryo_fuel_conversion";
import { adAstraOxygenConversionRecipes } from "./recipes/ad_astra/oxygen_conversion";
import { adAstraSpaceStationRecipe } from "./recipes/ad_astra/space_station";
import { astralGeneratorsAmalgationMatrixRecipes } from "./recipes/astral_generators/machines/amalgamation_matrix";
import { astralGeneratorsAssemblerRecipes } from "./recipes/astral_generators/machines/assembler";
import { astralGeneratorsBoilerRecipes } from "./recipes/astral_generators/machines/boiler";
import { astralGeneratorsFusionReactorRecipes } from "./recipes/astral_generators/machines/fusion_reactor";
import { astralGeneratorsParticleAcceleratorRecipes } from "./recipes/astral_generators/machines/particle_accelerator";
import { astralGeneratorsSteamTurbineRecipes } from "./recipes/astral_generators/machines/steam_turbine";
import { astralGeneratorsMixingRecipes } from "./recipes/astral_generators/mixing";
import { astralGeneratorsShapedRecipes } from "./recipes/astral_generators/shaped";
import { astralGeneratorsShapelessRecipes } from "./recipes/astral_generators/shapeless";
import { astralSignalsAnalogDecryptorRecipes } from "./recipes/astral_signals/machines/analog_decryptor";
import { astralSignalsDriveEraserRecipes } from "./recipes/astral_signals/machines/drive_eraser";
import { astralSignalsMPDecryptorRecipes } from "./recipes/astral_signals/machines/mp_decryptor";
import { astralSignalsPPDecryptorRecipes } from "./recipes/astral_signals/machines/pp_decryptor";
import { astralSignalsRadioTelescopeRecipes } from "./recipes/astral_signals/machines/radio_telescope";
import { astralSignalsSequencedAssemblyRecipes } from "./recipes/astral_signals/machines/sequenced_assembly";
import { astralSignalsSignalCoordinatorRecipes } from "./recipes/astral_signals/machines/signal_coordinator";
import { astralSignalsVinylPrinterRecipes } from "./recipes/astral_signals/machines/vinyl_printer";
import { astralAdditionsChromaticVacuumRecipes } from "./recipes/astraladditions/chromatic_vacuum";
import { astralAdditionsDesizerRecipes } from "./recipes/astraladditions/desizer";
import { astralAdditionsShimmerTransmutationRecipes } from "./recipes/astraladditions/shimmer_transmute";
import { automobilityEngineRecipes } from "./recipes/automobility/auto_mechanic_table/engines";
import { createCompactingRecipes } from "./recipes/create/compacting";
import { createAdditionChargingRecipes } from "./recipes/create/createaddition/charging";
import { createAdditionLiquidBurningRecipes } from "./recipes/create/createaddition/liquid_burning";
import { createAdditionRollingRecipes } from "./recipes/create/createaddition/rolling";
import { createBigCannonsMeltingRecipes } from "./recipes/create/createbigcannons/melting";
import { createCrushingRecipes } from "./recipes/create/crushing";
import { createCuttingRecipes } from "./recipes/create/cutting";
import { createDeployingRecipes } from "./recipes/create/deploying";
import { createEmptyingRecipes } from "./recipes/create/emptying";
import { estrogenCentrifugingRecipes } from "./recipes/create/estrogen/centrifuging";
import { createFillingRecipes } from "./recipes/create/filling";
import { createHauntingRecipes } from "./recipes/create/haunting";
import { createItemApplicationRecipes } from "./recipes/create/item_application";
import { createMechanicalCraftingRecipes } from "./recipes/create/mechanical_crafting";
import { createMillingRecipes } from "./recipes/create/milling";
import { createMixingRecipes } from "./recipes/create/mixing";
import { createPressingRecipes } from "./recipes/create/pressing";
import { createSandpaperPolishingRecipes } from "./recipes/create/sandpaper_polishing";
import { createSequencedAssemblyRecipes } from "./recipes/create/sequenced_assembly";
import { createWashingRecipes } from "./recipes/create/splashing";
import { distilleryRecipes } from "./recipes/createastral/machines/distillery";
import { electrolyzerRecipes } from "./recipes/createastral/machines/electrolyzer";
import { shimmerRefineryRecipes } from "./recipes/createastral/machines/shimmer_refinery";
import { stoneGrowthChamberRecipes } from "./recipes/createastral/machines/stone_growth_chamber/copper";
import { customMachineryRecipes } from "./recipes/custommachinery/machines";
import { farmersDelightCookingRecipes } from "./recipes/farmersdelight/cooking";
import { farmersDelightCuttingRecipes } from "./recipes/farmersdelight/cutting";
import { minecraftBlastingRecipes } from "./recipes/minecraft/blasting";
import { minecraftComposterRecipes } from "./recipes/minecraft/compostables";
import { shapedRecipes } from "./recipes/minecraft/shaped";
import { shapelessRecipes } from "./recipes/minecraft/shapeless";
import { minecraftSmeltingRecipes } from "./recipes/minecraft/smelting";
import { minecraftSmithingRecipes } from "./recipes/minecraft/smithing";
import { minecraftSmokingRecipes } from "./recipes/minecraft/smoking";
import { minecraftStonecuttingRecipes } from "./recipes/minecraft/stonecutting";
import { recipeRemovals } from "./recipes/removals";
import { recipeReplacements } from "./recipes/replacements";
import { castingBasinRecipes } from "./recipes/tconstruct/smeltery/casting_basin";
import { castingTableRecipes } from "./recipes/tconstruct/smeltery/casting_table";
import { entityMeltingRecipes } from "./recipes/tconstruct/smeltery/entity_melting";
import { meltingRecipes } from "./recipes/tconstruct/smeltery/melting";
import { meltingFuelRecipes } from "./recipes/tconstruct/smeltery/melting_fuel";
import { toolMaterialsRecipes } from "./recipes/tconstruct/tools/tool_materials";
import { techRebornBlastFurnaceRecipes } from "./recipes/techreborn/blast_furnace";
import { techRebornCentrifugeRecipes } from "./recipes/techreborn/centrifuge";
import { techRebornChemicalReactorRecipes } from "./recipes/techreborn/chemical_reactor";
import { techRebornCompressorRecipes } from "./recipes/techreborn/compressor";
import { techRebornGrinderRecipes } from "./recipes/techreborn/grinder";
import { techRebornImplosionCompressorRecipes } from "./recipes/techreborn/implosion_compressor";
import { techRebornIndustrialElectrolyzerRecipes } from "./recipes/techreborn/industrial_electrolyzer";
import { techRebornIndustrialGrinderRecipes } from "./recipes/techreborn/industrial_grinder";
import { techRebornIndustrialSawmillRecipes } from "./recipes/techreborn/industrial_sawmill";
import { techRebornPackingRecipes } from "./recipes/techreborn/packing";
import { techRebornSolidCanningMachineRecipes } from "./recipes/techreborn/solid_canning_machine";
import { techRebornVacuumFreezerRecipes } from "./recipes/techreborn/vacuum_freezer";
import { techRebornWireMillRecipes } from "./recipes/techreborn/wire_mill";
import { yttrCentrifugingRecipes } from "./recipes/yttr/centrifuging";
import { yttrLamps } from "./recipes/yttr/lamps";
import { yttrSoakingRecipes } from "./recipes/yttr/soaking";

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

recipeRemovals();
recipeReplacements();
villagerTrades();
yttrLootFix();
wanderingWinemakerLoot();
dragon();
interaction();
spawnPointFix();
hephaestusFluidSyncFix();
adAstraCryoFuelConversionRecipes()
adAstraOxygenConversionRecipes()
adAstraSpaceStationRecipe()
astralGeneratorsShapedRecipes()
astralGeneratorsShapelessRecipes();
astralGeneratorsMixingRecipes();
astralGeneratorsAmalgationMatrixRecipes();
astralGeneratorsAssemblerRecipes();
astralGeneratorsBoilerRecipes();
astralGeneratorsFusionReactorRecipes();
astralGeneratorsParticleAcceleratorRecipes();
astralGeneratorsSteamTurbineRecipes();
astralSignalsAnalogDecryptorRecipes();
astralSignalsDriveEraserRecipes();
astralSignalsMPDecryptorRecipes();
astralSignalsPPDecryptorRecipes();
astralSignalsRadioTelescopeRecipes();
astralSignalsSequencedAssemblyRecipes();
astralSignalsSignalCoordinatorRecipes();
astralSignalsVinylPrinterRecipes();
astralAdditionsChromaticVacuumRecipes();
astralAdditionsDesizerRecipes();
astralAdditionsShimmerTransmutationRecipes();
automobilityEngineRecipes();
createAdditionChargingRecipes();
createAdditionLiquidBurningRecipes();
createAdditionRollingRecipes();
createBigCannonsMeltingRecipes();
estrogenCentrifugingRecipes();
createCompactingRecipes();
createCrushingRecipes();
createCuttingRecipes();
createDeployingRecipes();
createEmptyingRecipes();
createFillingRecipes();
createHauntingRecipes();
createItemApplicationRecipes();
createMechanicalCraftingRecipes();
createMillingRecipes();
createMixingRecipes()
createPressingRecipes();
createSandpaperPolishingRecipes();
createSequencedAssemblyRecipes();
createWashingRecipes();
distilleryRecipes();
electrolyzerRecipes();
shimmerRefineryRecipes();
stoneGrowthChamberRecipes();
customMachineryRecipes();
farmersDelightCookingRecipes();
farmersDelightCuttingRecipes();
minecraftBlastingRecipes();
minecraftComposterRecipes();
shapedRecipes();
shapelessRecipes();
minecraftSmeltingRecipes();
minecraftSmithingRecipes();
minecraftSmokingRecipes();
minecraftStonecuttingRecipes();
castingBasinRecipes()
castingTableRecipes();
entityMeltingRecipes()
meltingFuelRecipes()
meltingRecipes()
toolMaterialsRecipes()
techRebornBlastFurnaceRecipes()
techRebornCentrifugeRecipes()
techRebornChemicalReactorRecipes()
techRebornCompressorRecipes()
techRebornGrinderRecipes()
techRebornImplosionCompressorRecipes()
techRebornIndustrialElectrolyzerRecipes()
techRebornIndustrialGrinderRecipes()
techRebornIndustrialSawmillRecipes()
techRebornPackingRecipes()
techRebornSolidCanningMachineRecipes()
techRebornVacuumFreezerRecipes()
techRebornWireMillRecipes()
yttrCentrifugingRecipes()
yttrLamps()
yttrSoakingRecipes()
