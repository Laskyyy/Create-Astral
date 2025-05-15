// @ts-check
(function astralGeneratorsAssemblerRecipes() {
  onEvent("recipes", (event) => {
    assemblerConvergenceCore(event);
    assemblerFluidBoiler(event);
    assemblerFusionReactor(event);
    assemblerParticleAccelerator(event);
    assemblerSolidBoiler(event);
    assemblerSteamTurbine(event);
  });
  /** @param {Internal.RecipeEventJS} event  */
  function assemblerConvergenceCore(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "createastral:astral_singularity",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "createastral:subatomic_ingot",
          mode: "input",
          amount: 8,
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:convergence_core",
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000,
        },
      ],
    });
  }
  /** @param {Internal.RecipeEventJS} event  */
  function assemblerFluidBoiler(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "techreborn:basic_machine_frame",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "create:propeller",
          mode: "input",
          amount: 16,
        },
        {
          type: "custommachinery:item",
          item: "create:fluid_tank",
          mode: "input",
          amount: 4,
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:pipe_casing",
          mode: "input",
          amount: 4,
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:fluid_boiler" },
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000,
        },
      ],
    });
  }
  /** @param {Internal.RecipeEventJS} event  */
  function assemblerFusionReactor(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "astralgenerators:fusion_coil",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "createastral:living_mechanism",
          mode: "input",
          amount: 4,
        },
        {
          type: "custommachinery:item",
          item: "createastral:ender_plating",
          mode: "input",
          amount: 8,
        },
        {
          type: "custommachinery:item",
          item: "createastral:astral_singularity",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "createastral:subatomic_ingot",
          mode: "input",
          amount: 2,
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64,
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64,
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64,
        },
        {
          type: "custommachinery:item",
          item: "createastral:promethium_atomic_battery",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:fusion_reactor" },
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000,
        },
      ],
    });
  }
  /** @param {Internal.RecipeEventJS} event  */
  function assemblerParticleAccelerator(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "createastral:pure_star_shard",
          mode: "input",
          amount: 2,
        },
        {
          type: "custommachinery:item",
          item: "ae2:singularity",
          mode: "input",
          amount: 8,
        },
        {
          type: "custommachinery:item",
          item: "createastral:ender_plating",
          mode: "input",
          amount: 32,
        },
        {
          type: "custommachinery:item",
          item: "createastral:astral_singularity",
          mode: "input",
          amount: 8,
        },
        {
          type: "custommachinery:item",
          item: "createastral:subatomic_ingot",
          mode: "input",
          amount: 8,
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64,
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64,
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64,
        },
        {
          type: "custommachinery:item",
          item: "createastral:promethium_atomic_battery",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:particle_accelerator" },
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000,
        },
      ],
    });
  }
  /** @param {Internal.RecipeEventJS} event  */
  function assemblerSolidBoiler(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "techreborn:basic_machine_frame",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "create:propeller",
          mode: "input",
          amount: 16,
        },
        {
          type: "custommachinery:item",
          item: "minecraft:furnace",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:pipe_casing",
          mode: "input",
          amount: 4,
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:solid_boiler" },
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000,
        },
      ],
    });
  }
  /** @param {Internal.RecipeEventJS} event  */
  function assemblerSteamTurbine(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "techreborn:basic_machine_frame",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "create:propeller",
          mode: "input",
          amount: 16,
        },
        {
          type: "custommachinery:item",
          item: "createaddition:electric_motor",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:pipe_casing",
          mode: "input",
          amount: 4,
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:steam_turbine" },
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000,
        },
      ],
    });
  }
})();
