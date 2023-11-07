onEvent("chest.loot_tables", event => {
    /*
    / when I figure out how to add custom loottables we'll use this shit
    /
    /Note that my orbit and ae2 recipes were supposed to be using the Powah mod, due to their "alien"
    /textures :/ some recipes may be patched, but I'll continue to use my intended recipes until I have found a proper replacement
    /
    */
   event.addChest("kubejs:orbit_plane", table => {
        table.addPool(pool => {
            pool.rolls = 7
            pool.addItem("powah:basic_capacitor", 3)
            pool.addItem("powah:hardened_capacitor", 1)
            pool.addItem("3x kubejs:machine_scrap", 5)
        })
   })
   event.addChest("kubejs:rare_orbit_chest", table => {
        table.addPool(pool => {
            pool.rolls = 9
            pool.addItem("4x powah:dieelectric_paste", 10)
            pool.addItem("2x powah:blazing_capacitor", 3)
            pool.addItem("ae2:molecular_assembler", 2)
            pool.addItem("powah:spirited_crystal", 3)
        })
   })
})
onEvent("recipes", event => {
    //ae2 ofc is not here, this is purely for possible fuel crafts, space stations, etc.
})