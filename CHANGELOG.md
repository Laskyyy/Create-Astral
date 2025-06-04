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

- Added Ambrosia, Bar of Chocolate, Blaze Fries, Blaze Fries and Cod, Blaze Rods, Chocolate Ice Cream, Cod 'n' Blaze, Fried Cod, Gamer's Delight, and Ice Cream Sandwich foods via Astral Foods.
- Added a Recovery Orb edible which functions like a pre-nerf Seared Potato, intended for use to recover lost items after dying on the Moon.

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
- Fish slices can now be melted to give blood at 80% efficiency to give use for sawing fish to get bonemeal.
- Moon Stone can now be manufactured pre-Moon using a sequenced assembly (assuming access to Shimmer).
- Molten Netherite can now be made wit Molten Debris and Molten Gold in a mixer.

#### QOL

- The Chapter 4 "Observe Piglin" quest now clarifies that they are found in bastions.
- Slightly adjusted the positions for some of the quests near the end of Chapter 5 to allow other quests some room to breathe.
- Added a tooltip to the Nether Engine from Immersive Aircraft to clarify that it is intended to not have a recipe.
- The recipe for Shimmery Compound now takes half the resources and time, and gives half the output - this is to prevent the mixer seizing up after completing each recipe.
- Gold Bars can now be put into Hephaestus Cast Chests.

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

#### Minor mod updates

- Updated Create: Copycats+ to 2.2.2 as the mod has been known to cause rendering issues in the older version.
- Updated REI to 8.4.788 as the mod has been known to cause crashes in the older version.
- Updated Defined's Blocks to 1.0.2.
- Updated FancyMenu to 3.5.2 to get new formatting features.
- Updated Drippy Loading Screen to 3.0.12 for compatibility with the FancyMenu update.

#### Behind-the-scenes

- Completely overhauled the file structure for Astral's own code, making it much more consistent and readable, and adding type checking. This has also potentially fixed countless bugs and missing recipes, and may have broken others.
- `server.packwizignore` now excludes FancyMenu configs as well as the new location for textures within the KubeJS folder.
- Clarified a few terms more explicitly in `LICENSE.md`.
- Cleaned up the main `README.md` file in the repository. Now it redirects to the other CAPITALISED markdown documents for further specific information.

### REMOVALS

#### Mod removals

- Removed the Quarry Reborn mod as it is completely redundant.
- Removed the Global Packs mod as its function can be, and has been, fulfilled by KubeJS.

#### Game-changing

- Removed Released Coolant (fluid) as it wasn't used for anything.
- Deprecated the original Stone Growth Chamber structure from 2.1 - please use one of the new structures instead.

#### Behind-the-scenes

- Removed the packwiz binaries from the repository to decrease the size of it.
