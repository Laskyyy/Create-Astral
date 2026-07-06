(function astralGeneratorsShapedRecipes() {
  onEvent("recipes", (event) => {
    event.shaped(
      Item.of("custommachinery:custom_machine_item", {
        machine: "astralgenerators:assembler",
      }),
      ["aza", "ycy", "bxb"],
      {
        x: "create:belt_connector",
        y: "create:mechanical_arm",
        z: "techreborn:electronic_circuit",
        a: "techreborn:basic_machine_frame",
        b: "createaddition:gold_wire",
        c: "create:depot",
      },
    );
    event.shaped("astralgenerators:multiblock_projector", ["xxx", "xya", "xxx"], {
      x: "techreborn:basic_machine_frame",
      y: "create:integrated_circuit",
      a: "minecraft:light_blue_stained_glass_pane",
    });
    event.shaped("astralgenerators:pipe_casing", ["xxx", "xyx", "xxx"], {
      x: "ad_astra:steel_plate",
      y: "create:fluid_pipe",
    });
  });
})();
