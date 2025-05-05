export function createAstralToolTiersRegistry() {
  onEvent("item.registry.tool_tiers", (event) => {
    event.add("copper", (tier) => {
      tier.uses = 210;
      tier.speed = 5.0;
      tier.attackDamageBonus = 1.0;
      tier.level = 2;
      tier.enchantmentValue = 14;
    });

    event.add("brass", (tier) => {
      tier.uses = 640;
      tier.speed = 9.0;
      tier.attackDamageBonus = 3.0;
      tier.level = 4;
      tier.enchantmentValue = 50;
    });

    event.add("radiant", (tier) => {
      tier.uses = 3000;
      tier.speed = 15.0;
      tier.attackDamageBonus = 10.0;
      tier.level = 4;
      tier.enchantmentValue = 99;
    });
  });
}
