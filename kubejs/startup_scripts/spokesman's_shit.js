onEvent("item.registry", event => {
    event.create("kubejs:incomplete_crimsite").type("create:sequenced_assembly"),
    event.create("kubejs:incomplete_tuff").type("create:sequenced_assembly"),
    event.create("kubejs:incomplete_quartz").type("create:sequenced_assembly"),
    event.create("kubejs:incomplete_granite").type("create:sequenced_assembly"),
    event.create("kubejs:incomplete_crimson_nylium").type("create:assembly_assembly"),
    event.create("kubejs:incomplete_warped_nylium").type("create:sequenced_assembly"),
    event.create("kubejs:incomplete_infernal_spire").type("create:sequenced_assembly")

    event.create("kubejs:ground_debris"),
    event.create("kubejs:cut_debris")
})
onEvent("fluid.registry", event => {
	event.create('gold-mercury_solution')
       .thickTexture(0xffff99)
       .bucketColor(0xffff99)
       .displayName('gold-mercury solution')
	     .stillTexture('tconstruct:block/fluid/molten/still')
	     .flowingTexture('tconstruct:block/fluid/molten/flowing')
})