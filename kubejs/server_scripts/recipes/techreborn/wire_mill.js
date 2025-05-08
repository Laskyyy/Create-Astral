(function techRebornWireMillRecipes() {
  onEvent("recipes", (event) => {
    wireMillWires(event);
  });
  function wireMillWires(event) {
    // Wire Mill
    // Let's making the rolling mill more relevant by making cables require create addition rods
    // Originally I was going to have the wire mill be an upgraded rolling mill but the above code
    //  changes the input to rods instead of ingots. I kind of like this a bit more. Downsides is that it may be annoying
    //  to use both machines for an item they may not craft often, outside of circuit automation.
    // Still, I'll let the wire mill produce wires.
    //
    const WIRE_MATERIALS = ["iron", "gold", "copper"];
    for (let material of WIRE_MATERIALS) {
      event.custom({
        type: "techreborn:wire_mill",
        power: 2,
        time: 300,
        ingredients: [
          {
            // create calls it golden sheet, otherwise material + _sheet
            item: material === "gold" ? "create:golden_sheet" : `create:${material}_sheet`,
            count: 2,
          },
        ],
        results: [
          {
            item: `createaddition:${material}_wire`,
            count: 6,
          },
        ],
      });
    }
  }
})();
