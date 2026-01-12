(function createAstralSoundRegistry(){
  onEvent("sound.registry", (event) => {
    event.create("createastral:stop_sound");
  });
})();