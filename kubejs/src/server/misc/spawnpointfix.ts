export function spawnPointFix() {
  onEvent("fabric.allow_setting_spawn", (event) => {
    event.cancel();
  });
}
