# Create: Astral Changelog

All notable changes to this project will be documented in this file.

If you are a contributor, please update this file with the changes you have made!

The format is a slight modification of the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) style, and this project's versioning follows a similar system to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), but not to the letter.

## 2.1.4 [Unreleased]

### ADDITIONS

- Added this changelog! Changelogs will now be much more human-readable from here on out and logged in one file on the GitHub repository for anyone to view.

#### Mod Additions

> _Nothing to see here yet..._

#### Gameplay-changing

- Added Piglin Towers, a new structure found on Mars.
- Added various new structures on the Moon.
- Added various new structures in the ??? dimension.
- Added cheese-related blocks for all your cheese needs.
- Added Ambrosia, Bar of Chocolate, Blaze Fries, Blaze Fries and Cod, Blaze Rods, Chocolate Ice Cream, Cod 'n' Blaze, Fried Cod, Gamer's Delight, and Ice Cream Sandwich foods via Astral Foods.
- Added a Recovery Orb edible which functions like a pre-nerf Seared Potato, intended for use to recover lost items after dying on the Moon.
- Added a new mid-game upgrade slot bonus for Hephaestus tools - Spacious, which needs a 16³ Spatial Component from Applied Energistics 2.
- Added a new late-game ability slot bonus for Hephaestus tools - Amplified, which needs a Shimmer Amplifier.

#### QOL

- Re-added the in-game changelogs for 2.1.1 and 2.1.2, and preserved the changelog for 2.1.3.

#### Behind-the-scenes

- Added `CONTRIBUTING.md` to the GitHub repository, a file detailing contribution guidelines for Astral's contributors.
- Added `CODE_STYLE.md` to the GitHub repository, a file detailing the code style of files in the KubeJS folder to aid with consistency when contributing to the modpack.
- Added a Nix flake-based development environment for the modpack.

### CHANGES

#### Major mod updates

> _Nothing to see here yet..._

#### Gameplay-changing

- Nerfed Quantum Bites, Seared Potatoes, and Dipped Potatoes.
- Halved the water requirement for making Dough in a mixer.
- Blazing Blood can now be made by mixing Blaze Powder and Blood in a heated basin.
- The Grapevine Pot from Vinery can now be crafted with any wood type.
- Cocoa Beans are now craftable with Shimmer, Brown Dye, Wheat Seeds, and Tree Fertiliser.
- Skyslime Balls are now craftable with Dough and Cyan Dye.
- Earthslime and Skyslime Saplings are now craftable with Oak Saplings and the respective type of slime fluid.
- Normal Slime Balls can now be made using Lime Dye and any other type of slimeball in a mixer.
- Old Cherry Saplings can now be made by haunting a normal Cherry Sapling.
- Old Cherry Saplings can now sometimes drop from normal Cherry trees.
- Fish slices can now be melted to give blood at 80% efficiency to give use for sawing fish to get bonemeal.
- Moon Stone can now be manufactured pre-Moon using a sequenced assembly (assuming access to Shimmer).
- Molten Netherite can now be made wit Molten Debris and Molten Gold in a mixer.
- Mycelium now has a new recipe using Cheese.
- Seared Tanks now use Gold Sheets in their recipes instead of Brass Sheets.
- Scorched Tanks now have a recipe similar to that of their early-game counterpart, Seared Tanks, but with Brass Sheets instead of Gold Sheets.
- Scorched Bricks now require Sap or Slime Balls, just like Seared Bricks, for parity with said counterpart.

#### QOL

- The Chapter 4 "Observe Piglin" quest now clarifies that they are found in bastions.
- Slightly adjusted the positions for some of the quests near the end of Chapter 5 to allow other quests some room to breathe.
- Added a tooltip to the Nether Engine from Immersive Aircraft to clarify that it is intended to not have a recipe.
- The recipe for Shimmery Compound now takes half the resources and time, and gives half the output - this is to prevent the mixer seizing up after completing each recipe.
- Gold Bars (not to be confused with Gold Ingots) can now be put into Hephaestus Cast Chests.
- The Hephaestus Encyclopedia entries now say exactly what each tool part does.

#### Bug Patches

- Fixed missing text in the in-game changelog menu.
- Patched a Copper duplication bug involving Cut Copper blocks and waxing/melting them.
- Fixed weird face culling when placing a block on top of a Fermentation Barrel from Vinery, as well as made the front and back faces smaller to stop Z-fighting in this scenario.
- Appleskin is now present on both server and client, so now all saturation and food exhaustion information is available when playing on a dedicated server.
- The Astral Conduit now takes damage from being used on any portal frame block instead of just Shimmering Stone.
- Fixed Stone Growth Chamber quest descriptions saying that its output is based on the dimension that it's in, instead they now say that it changes based on what materials the structure is built from.
- Fixed the Get Silky quest description implying that kamas cannot collect slimy vines normally, when, in fact, they can.
- The Automate Blood Or Slime quest now only requires one criteria to be completed.
- The Biomatter quest in Chapter 4 no longer requires the player to automate Netherite.
- Modified the dependencies of the Distillation Tower area of Chapter 4 to be more sensible.
- Fixed the issue with the Moonset Marimo duplication recipe not giving a net gain of anything.
- Fixed a loot table not generating on Mars.
- Fixed the Reach and Leaping modifiers on Hephaestus items not being obtainable due to recipe conflicts.
- Fixed the Tool Belt upgrade for Hephaestus armour not being obtainable due to recipe conflicts.
- Fixed the Killager modifier for Hephaestus weapons not being effective against Lunarians and Corrupted Lunarians.
- Fixed Desh, Ostrum, and Calorite tools not being able to be repaired with their ingots.
- The Distillation Tower and Shimmer Refinery multiblocks will now work properly with normal, liquid, and creative Blaze Burners.

#### Minor mod updates

- Updated Create: Copycats+ to 2.2.2 as the mod has been known to cause rendering issues in the older version.
- Updated REI to 8.4.788 as the mod has been known to cause crashes in the older version.
- Updated Defined's Blocks to 1.0.2.
- Updated FancyMenu to 3.5.2 to get new formatting features.
- Updated Drippy Loading Screen to 3.0.12 for compatibility with the FancyMenu update.

#### Behind-the-scenes

- Overhauled the in-game credits menu to include more people and generally look nicer and be more organised.
- Completely overhauled the file structure for Astral's own code, making it much more consistent and readable, and adding type checking. This has also potentially fixed countless bugs and missing recipes, and may have broken others.
- `server.packwizignore` now excludes FancyMenu configs as well as the new location for textures within the KubeJS folder.
- Clarified a few terms more explicitly in `LICENSE.md`.
- Cleaned up the main `README.md` file in the repository. Now it redirects to the other CAPITALISED markdown documents for further specific information.
- Added index.toml to .gitignore and wiped it clean to prevent merge conflicts from sometimes bricking dev environments. Packwiz automatically generates index.toml when it is run, so this should only affect the load time of the first time you run packwiz (which will be significantly longer than normal as packwiz generates index.toml).
- Added packwiz binaries to .gitignore to prevent them from reappearing in the GitHub repository in the future.

### REMOVALS

#### Mod removals

- Removed the Quarry Reborn mod as it is completely redundant.
- Removed the Global Packs mod as its function can be, and has been, fulfilled by KubeJS.

#### Game-changing

- Removed Released Coolant (fluid) as it wasn't used for anything.
- Deprecated the original Stone Growth Chamber structure from 2.1 - please use one of the new structures instead.

#### Behind-the-scenes

- Removed the packwiz binaries from the repository to decrease the size of it.
