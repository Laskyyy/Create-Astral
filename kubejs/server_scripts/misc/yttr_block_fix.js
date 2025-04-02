//Block Drop Fixes
onEvent("block.loot_tables", (event) => {
    [
        ["yttr:centrifuge"],
        ["yttr:yttrium_block"],
        ["yttr:power_meter"],
        ["yttr:chute"],
        ["yttr:bedrock_smasher"],
        ["yttr:glassy_void"],
        ["yttr:glassy_void_pane"],
        ["yttr:squeeze_log"],
        ["yttr:stripped_squeeze_log"],
        ["yttr:squeeze_sapling"],
        ["yttr:yttrium_plating"],
        ["yttr:light_yttrium_plate"],
        ["yttr:heavy_yttrium_plate"],
        ["yttr:dopper"],
        ["yttr:flopper"],
        ["yttr:suit_station"],
        ["yttr:table"],
        ["yttr:ultrapure_carbon_block"],
        ["yttr:compressed_ultrapure_carbon_block"],
        ["yttr:yttrium_button"],
        ["yttr:brookite_block"],
        ["yttr:nethertuff"],
        ["yttr:high_note_block"],
        ["yttr:low_note_block"],
        ["yttr:bogged_note_block"],
        ["yttr:bogged_high_note_block"],
        ["yttr:bogged_low_note_block"],
        ["yttr:clamber_block"],
        ["yttr:soul_clamber_block"],
        ["yttr:soul_planks"],
        ["yttr:cuprosteel_block"],
        ["yttr:cuprosteel_plate"],
        ["yttr:can_filler"],
        ["yttr:dust"],
        ["yttr:project_table"],
        ["yttr:raw_gadolinite_block"],
        ["yttr:ash"],
        ["yttr:delrene"],
        ["yttr:scorched_obsidian"],
        ["yttr:polished_scorched_obsidian"],
        ["yttr:polished_scorched_obsidian_capstone"],
        ["yttr:polished_obsidian"],
        ["yttr:polished_obsidian_capstone"],
        ["yttr:scorched_crying_obsidian"],
        ["yttr:screeper_nest"],
        ["yttr:ssd"],
        ["yttr:velresin"],
        ["yttr:transfungus"],
        ["yttr:black_void_glass"],
        ["yttr:gray_void_glass"],
        ["yttr:silver_void_glass"],
        ["yttr:white_void_glass"],
        ["yttr:clear_void_glass"],
        ["yttr:black_void_glass_pane"],
        ["yttr:gray_void_glass_pane"],
        ["yttr:silver_void_glass_pane"],
        ["yttr:white_void_glass_pane"],
        ["yttr:clear_void_glass_pane"],
        ["yttr:white_project_table"],
        ["yttr:orange_project_table"],
        ["yttr:magenta_project_table"],
        ["yttr:light_blue_project_table"],
        ["yttr:yellow_project_table"],
        ["yttr:lime_project_table"],
        ["yttr:pink_project_table"],
        ["yttr:gray_project_table"],
        ["yttr:light_gray_project_table"],
        ["yttr:cyan_project_table"],
        ["yttr:purple_project_table"],
        ["yttr:blue_project_table"],
        ["yttr:brown_project_table"],
        ["yttr:green_project_table"],
        ["yttr:red_project_table"],
        ["yttr:black_project_table"],
        ["yttr:neodymium_slab"],
        ["yttr:neodymium_block"],
        ["yttr:aware_hopper"],
        ["yttr:levitation_chamber"],
        ["yttr:magtank"],
        ["yttr:dsu"],
    ].forEach((loot) => {
        event.addSimpleBlock(loot[0], loot[0]);
    });
    //Lamp Blocks
    const lampColors = [ //don't include colorless
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black",
        "teal"
    ];
    [
        "yttr:lamp",
        "yttr:fixture",
        "yttr:cage_lamp",
        "yttr:panel"
    ].forEach((lamp) => {
        event.addJson(lamp, {
            type: "minecraft:block",
            pools: [
              {
                rolls: 1,
                bonus_rolls: 0,
                entries: [
                  {
                    type: "minecraft:item",
                    name: lamp,
                    functions: [
                        {
                            function: "minecraft:set_nbt",
                            tag: "{Inverted: false, LampColor: \"colorless\"}"
                        },
                        {
                            function: "minecraft:set_nbt",
                            tag: "{Inverted: true}",
                            conditions: [
                                {
                                    block: lamp,
                                    condition: "minecraft:block_state_property",
                                    properties: {
                                        inverted: true
                                    }
                                }
                            ]
                        }
                    ].concat(lampColors.map(color=>{
                        return {
                            function: "minecraft:set_nbt",
                            tag: `{LampColor: \"${color}\"}`,
                            conditions: [
                                {
                                    block: lamp,
                                    condition: "minecraft:block_state_property",
                                    properties: {
                                        color: color
                                    }
                                }
                            ]
                        }
                    }))
                  }
                ],
                conditions: [
                  {
                    condition: "minecraft:survives_explosion"
                  }
                ]
              }
            ]
        })
    })
});

//Lamp Recipe Fixes
onEvent("recipes", (event) => {
    
    const lampTypes = [
        "lamp",
        "fixture",
        "cage_lamp",
        "panel"
    ];
    const lampColors = [ //don't include colorless
        ["white", "$minecraft:white_dye"],
        ["orange", "minecraft:orange_dye"],
        ["magenta", "minecraft:white_dye"],
        ["light_blue", "minecraft:light_blue_dye"],
        ["yellow", "minecraft:yellow_dye"],
        ["lime", "minecraft:lime_dye"],
        ["pink", "minecraft:pink_dye"],
        ["gray", "minecraft:gray_dye"],
        ["light_gray", "minecraft:light_gray_dye"],
        ["cyan", "minecraft:cyan_dye"],
        ["purple", "minecraft:purple_dye"],
        ["blue", "minecraft:blue_dye"],
        ["brown", "minecraft:brown_dye"],
        ["green", "minecraft:green_dye"],
        ["red", "minecraft:red_dye"],
        ["black", "minecraft:black_dye"],
        ["teal", "yttr:yttrium_dust"]
    ];
    

    //Lamp recipe fixes
    lampTypes.forEach(lamp=>{
        //this recipe is shaped for some reason
        event.remove({id:`yttr:crafting/lamp/${lamp}_invert`});
        //this recipe doesn't even work
        event.remove({id:`yttr:crafting/lamp/${lamp}_dye`});

        //recreate lamp inversion recipe as a shapeless one. Also make it not consume the redstone torch
        event.shapeless(
            Item.of(`yttr:${lamp}`).withNBT('{Inverted:true, LampColor:\"colorless\"}'),
            [
                `yttr:${lamp}`,
                'minecraft:redstone_torch'
            ]
        )
        .modifyResult((grid, result)=>{
            let item = grid.find(Ingredient.of(`yttr:${lamp}`).ignoreNBT());
            let inputNbt = item.nbt || {};

            let outputNbt = {};
            outputNbt.Inverted = !inputNbt.Inverted;
            outputNbt.LampColor = inputNbt.LampColor || "colorless";
            return result.withNBT(outputNbt);
        })
        .keepIngredient("minecraft:redstone_torch")
        .id(`createastral:crafting/yttr/lamp/${lamp}_invert`)

        //Create lamp dyeing recipes that actually work
        event.shapeless(
            Item.of(`yttr:${lamp}`).withNBT('{Inverted:false, LampColor:\"white\"}'),
            [
                `yttr:${lamp}`,
                '#yttr:lamp_dyes'
            ]
        )
        .modifyResult((grid, result)=>{
            let item = grid.find(Ingredient.of(`yttr:${lamp}`).ignoreNBT());
            let dye = grid.find(`#yttr:lamp_dyes`);
            let inputNbt = item.nbt || {};
    
            let outputNbt = {};

            outputNbt.Inverted = !!inputNbt.Inverted;
            for (let i=0;i<lampColors.length;++i) {
                if (dye.getId()===lampColors[i][1]) {
                    outputNbt.LampColor = lampColors[i][0];
                    break;
                }
            }

            return result.withNBT(outputNbt);
        })
        .id(`createastral:crafting/yttr/lamp/${lamp}_dye`)
    })
})