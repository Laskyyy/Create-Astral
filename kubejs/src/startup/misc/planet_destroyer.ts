export function planetDestroyer() {
  const $AdAstra = java("com.github.alexnijjar.ad_astra.AdAstra");
  const $ServerLifecycleEvents = java("net.fabricmc.fabric.api.event.lifecycle.v1.ServerLifecycleEvents") as any;
  onEvent("fabric.event.register", (event) => {
    event.register("ServerLifecycleEvents.EndDataPackReload", $ServerLifecycleEvents, "END_DATA_PACK_RELOAD");
    event.register("ServerLifecycleEvents.ServerStarted", $ServerLifecycleEvents, "SERVER_STARTED");
  });

  //kill off the ad astra planets that refuse to die
  function planetDestroyer(event: Internal.ProxyEventJS) {
    const planets = $AdAstra.planets;
    //DESTROY VENUS
    const venus = planets.toArray().find((planet) => planet.world().location() == "ad_astra:venus");
    if (venus) planets.remove(venus);
    //DESTROY GLACIO CLONE
    const fakeGlacio = planets.toArray().find((planet) => planet.world().location() == "ad_astra:glacio" && planet.rocketTier() == 4);
    if (fakeGlacio) planets.remove(fakeGlacio);
  }
  onEvent("ServerLifecycleEvents.ServerStarted", planetDestroyer);
  onEvent("ServerLifecycleEvents.EndDataPackReload", planetDestroyer);
}
