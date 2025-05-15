(function shimmerRefineryPonder() {
  onEvent("ponder.registry", (event) => {
    // Ponder is registered on the void filter, which does not have a recipe
    // and is not available in REI.
    event
      .create("yttr:void_filter")
      .scene("shimmer_refinery", "How to create a Shimmer Refinery", "kubejs:shimmerrefinery", (scene, util) => {
        scene.showStructure();
      });
  });
})();
