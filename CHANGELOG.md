---
lang: en_GB
# this version of the changelog was written by a british person so the grammar will be british
---

# Create: Astral Changelog

All notable changes to this project will be documented in this file.

If you are a contributor, please update this file with the changes you have made!

The format is a slight modification of the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) style, and this project's versioning follows a similar system to [Semantic Versioning](https://semver.org/spec/v2.0.0.html), but not to the letter.

Release dates attached to version numbers are in the format `YYYY/MM/DD` as per the standards of [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html), recommended by [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

Please note that patch notes for versions 2.1.3 and lower are currently lacking in full information, or may even be entirely inaccurate, due to poor documentation of changes before implementation of the changelog. If you notice anything that is incorrect or missing, please open a Pull Request with your fixes.

## 2.1.4 [Unreleased]

**IMPORTANT:**

This update comes with a completely overhauled file structure for Astral's own code, making it much more consistent and readable, and adding type checking for the sake of ease of development. Almost every line of custom KubeJS and Datapack code has been verified, moved, or rewritten - this has potentially fixed countless bugs and missing recipes, and may have broken others. Please report any bugs you find in either our Discord server's Bug Reports channel, or on our GitHub Issue Tracker - and also please verify that the bug you are reporting isn't an intended change (please read the rest of the changelog).

### ADDITIONS

- Added this changelog! Changelogs will now be much more human-readable from here on out and logged in one file on the GitHub repository for anyone to view.

#### Mod additions

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
- Added a new structure for the Distillation Tower multiblock that moves the controller one block up to allow an additional side of the block to be accessed.

#### Quality of life

- Added four new GUIs for the Electrolyser, Distillation Tower, Stone Growth Chamber, and Shimmer Refinery multiblock structures.
- Added a dedicated transistional item for the Shimmer Amplifier sequenced assembly recipe.

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
- Molten Netherite can now be made with Molten Debris and Molten Gold in a mixer.
- Mycelium now has a new recipe using Cheese.
- Seared Tanks now use Gold Sheets in their recipes instead of Brass Sheets.
- Scorched Tanks now have a recipe similar to that of their early-game counterpart, Seared Tanks, but with Brass Sheets instead of Gold Sheets.
- Scorched Bricks now require Sap or Slime Balls, just like Seared Bricks, for parity with said counterpart.
- All three dough types have been harmonised into `create:dough` - meaning there are no longer recipes to make the other two types of dough, and all recipes now accept `create:dough`.
- Re-enabled the recipe for Rope from Campanion as it is the only rope that can be used to make rope bridges.
- Added a new recipe for Zinc Sheet Metal from Create Deco as its recipe was unintentionally removed when unifying the Zinc Sheets in a prior update.
- Added a recipe for Helium which uses Glowdamp.
- Halved the amount of time Bioethanol can fuel liquid Blaze Burners for.
- Increased the amount of time Seed Oil can fuel liquid Blaze Burners for by 2.5x.
- Tripled the amount of time Blazing Blood can fuel liquid Blaze Burners for.

#### Quality of life

- The Chapter 4 "Observe Piglin" quest now clarifies that they are found in bastions.
- Slightly adjusted the positions for some of the quests near the end of Chapter 5 to allow other quests some room to breathe.
- Added a tooltip to the Nether Engine from Immersive Aircraft to clarify that it is intended to not have a recipe.
- The recipe for Shimmery Compound now takes half the resources and time, and gives half the output - this is to prevent the mixer seizing up after completing each recipe and does not affect yield ratios.
- Gold Bars (not to be confused with Gold Ingots) can now be put into Hephaestus Cast Chests.
- The Hephaestus Encyclopedia entries now say exactly what each tool part does.
- Removed most of the remaining British English vocabulary from `/kubejs/assets/createastral/lang/en_us.json` and replaced it with the equivalent United States English spellings.
- Adjusted capitalisation in numerous quest descriptions and subtitles to be more consistent and to make capitalised words less overused.
- Added tooltips to Traveler's Backpacks that have abilities to clarify that abilities are disabled by default. Bear in mind that they can be re-enabled in the config file.
- Added a description to some of the quests in the Astral Signals questline to explain how to finish processing data drives as REI doesn't want to display the recipe.
- The Bedrock Stone generator quest now tries to clarify that it needs to specifically be a Stone generator and not a Cobblestone generator, and also attempts to explain how to make a Stone generator.
- Added more accurate information to the Brass Casing quest in Chapter 3.
- Grouped all Compressor blocks (e.g. Compressed Cobblestone) into one REI group.
- Made Rocket Casing and Desizer Casing able to be picked up with wrenches.
- Made Basic, Advanced, and Industrial Machine Frames and Machine Casings able to be picked up with wrenches.
- Re-added the in-game changelogs for 2.1.1 and 2.1.2, and preserved the changelog for 2.1.3. Also completely redesigned the in-game changelog.
- Overhauled the in-game credits menu to include more people and generally look nicer and be more organised.

#### Bug patches

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
- Fixed the Leaping modifier on Hephaestus items not being obtainable due to recipe conflicts.
- Fixed the Reach modifier on Hephaestus items not being obtainable due to an item mislabelled as a tag in its recipe.
- Fixed the Tool Belt upgrade for Hephaestus armour not being obtainable due to an incorrect item tag in its recipe.
- Fixed the Killager modifier for Hephaestus weapons not being effective against Lunarians and Corrupted Lunarians.
- Fixed Desh, Ostrum, and Calorite tools not being able to be repaired with their ingots.
- The Distillation Tower and Shimmer Refinery multiblocks will now work properly with normal, liquid, and creative Blaze Burners (for real this time). Do note that due to a technical limitation, these multiblocks do not care what heat state a **creative** Blaze Burner is in, all recipes will work with any heat-state creative burner. This will not affect survival play.
- Fixed Hepatizon and Queen's Slime Recipes using different ratios of inputs at different heat levels.
- Fixed a recipe conflict between Milk Bread and Toast in the Vinery Wood Fired Oven.
- Amended Chapter 3's Automate Gold quest to provide accurate information about washing Soul Sand and Soil.
- Fixed a recipe conflict between the Ricochet and Replenish enchanted books.
- Fixed a recipe conflict between the Steel Screw Lock and the Steel Ring.
- Amended Chapter 3's Steel quests near the end of the chapter to stop spreading residual misinformation from 2.0 about Steel.
- Fixed a recipe conflict with the Lune-Shroom-boosted Shimmer recipe and the similar non-boosted recipe by removing the heat requirement for the Lune-Shroom-boosted recipe.
- Fixed a duplication bug involving the Yttr Chute by removing its recipe and hiding it from REI.
- Removed incorrect part of the description for the Tesla Coil quest in Chapter 3 to do with charging items.
- Fixed a description error in the Lead-lined Space Suit quest in Chapter 4 calling it a Netherite suit instead of a Lead-lined suit.
- Changed the recipe for the Yttr Lazor Emitter due to Brookite being unobtainable.
- Replaced Iriduim that was being used in some recipes with Yttrium. Also removed the Iridium Ingot and Iridium Block recipes.
- Made the Netherite Knife from Farmer's Delight fireproof.
- Added a missing recipe for sawing Rubber Logs to produce Bark as a byproduct.
- Added missing Copper Oxidation recipes to the Stonecutter.
- Fixed an issue where Shadow Drawers would keep eating Molten Tin when casting due to being able to be used in their own recipe.
- Fixed incorrectly assigned Spruce Log variant names from Chipped.

#### Minor mod updates

- Updated Create: Copycats+ to 2.2.2 as the mod has been known to cause rendering issues in the older version.
- Updated REI to 8.4.788 as the mod has been known to cause crashes in the older version.
- Updated Defined's Blocks to 1.0.2.
- Updated FancyMenu to 3.5.2 to get new formatting features.
- Updated Drippy Loading Screen to 3.0.12 for compatibility with the FancyMenu update.

#### Behind-the-scenes

- `server.packwizignore` now excludes FancyMenu configs as well as the new location for textures within the KubeJS folder.
- Clarified a few terms more explicitly in `LICENSE.md`.
- Cleaned up the main `README.md` file in the repository. Now it redirects to the other CAPITALISED markdown documents for further specific information.
- Wiped index.toml clean and added a clause in CONTRIBUTING.md asking contributors not to commit changes to index.toml. This has been done to cut down on headache-inducing merge conflicts that arise as a result of changes to this file. Packwiz automatically generates index.toml when it is run, so this should only affect the load time of the first time you run packwiz (which will be significantly longer than normal as packwiz generates index.toml).
- Added packwiz binaries to `.gitignore` to prevent them from reappearing in the GitHub repository in the future.
- Made Charcoal Blocks register their furnace burn time upon block registry instead of post-registry modification.

### REMOVALS

#### Mod removals

- Removed the Quarry Reborn mod as it is completely redundant and was non-functional anyway due to missing recipes for the last few updates.
- Removed the Global Packs mod as its function can be, and has been, fulfilled by KubeJS.

#### Game-changing

- Removed Released Coolant (fluid) as it wasn't used for anything.
- Made the original Stone Growth Chamber structure from 2.1 disfunctional - please use one of the new structures instead.
- Removed the recipe for the Turtle Shell modifier for Hephaestus armour as it has a broken attribute and hence does nothing.
- Removed the ability to obtain Yttr's curse enchantments (Annihilation and Shattering) due to an XP duplication issue.
- Removed the drill boring recipe for Skeleton Skulls, given they can be much more easily obtained by stonecutting a bone block.

#### Behind-the-scenes

- Removed the packwiz binaries from the repository to decrease the size of it.

## 2.1.3 [Current Release] - 2025/01/05

### ADDITIONS

- The pack has now been localised for Chinese (zh_cn).

#### Mod additions

> _Nothing to see here yet..._

#### Gameplay-changing

- Added Marimo (moss balls), providing automations for many vanilla plant-based items like Sea Grass, Rooted Dirt and Sea Pickles.
- Added Shimmer Marimo, providing a new recipe for Shimmer.
- Added Moonset Marimo, providing difficult recipes for items like Molten Ender, Moonset Crystal and Chorus Flowers.
- Added Snowy Marimo, providing new recipes for various Chapter 4 materials and Powder Snow.
- Added Ender Marimo, providing new recipes for various Chapter 6 materials.
- Added a new structure, the Purpur Fortress, to Chapter 6's dimension, with a chance to find a Microphysical Probe.
- Added Aurorite Blocks, used to build a Glacio portal.
- Added a Horse item, generating Horse products without a Horse.
- Added a bunch of new spices, beers, and wines as food items.

#### Quality of life

> _Nothing to see here yet..._

#### Behind-the-scenes

> _Nothing to see here yet..._

### CHANGES

#### Major mod updates

- Updated Astral Additions to 1.4
  - REI support for the Desizer, Chromatic Vacuum and new Shimmer Transmutation.
  - Lune Shrooms now grow vertically rather than on the same Y level.
  - Bulba Root now regrows properly when cut.
  - Desizer Casing blocks are now unified into a single dynamic block.

#### Gameplay-changing

- Revamped Chapter 4 and Chapter 5 pain points, like the Oil/Separation Agent/Hellfire/Nitrogen/Refined Shimmer recipe line, adding new recipe options and buffing/fixing some existing ones.
- Revamped Chapter 6 pain points - Enderslime Crystal is now automatable using Create, Yttric Centrifuge no longer operates at a snail's pace.
- Added a recipe for the Milk Jar, providing an easy method of generating Milk without a Cow.
- Added alternate recipes using nuggets for all alloying recipes as AE2 autocrafting has issues with liquids.
- Added unheated mixer recipe with nuggets for Bronze, keeping the two ingots of Bronze per one ingot of Tin and Copper ratio.
- Added heated recipes with nuggets for Brass, Amethyst Brass, Electrum, Slimesteel, Queen's Slime, Manyullyn, and Hepatizon.
- Replaced the heated recipe for Pig Iron, changing it from ingots to nuggets, as there was already a superheated recipe with ingots.
- Replaced the Tech Reborn Block Placer recipe with something that makes more sense.
- Re-added recipes for the Tech Reborn Block Breaker and Player Detector.
- Added a Sawing recipe to turn Bone Blocks into Skeleton Skulls.
- Added a recipe for crafting 4 Chests with 8 Logs.
- Added a recipe for Rich Soil by washing Compost, making Rich Soil much easier to obtain and automate.
- Added a deploying recipe for deploying Blaze Heads on to Empty Blaze Burners.

#### Quality of life

- Swapped the outputs of compacting a Wet Sponge and Sand -> Clay and dry Sponge so that it's possible to filter the Basin for Clay.
- Clarified in the Chapter 3 quest for Lamps that Coal Dust can also be made using Crushing Wheels.
- Unhid mob heads from REI since they are obtainable and useful for Hephaestus modifiers.
- Hid the Yttr Project Tables from REI since they're replaced by the Project Table mod.
- Hid sequenced assembly transition items from REI.
- Hid Custom Machinery dummy machine blocks from REI.
- Hid uncraftable potion fluids from Hephaestus and Traveler's Backpacks.
- Added Create potion fluid entries to REI.
- Removed duplicate REI groups and added new groups:
  - Analogously Decrypted Data Drive
  - Parallel Decrypted Data Drive
  - Microphysically Decrypted Data Drive
  - Potion Fluid
  - Splash Potion Fluid
  - Lingering Potion Fluid
  - Package
  - Seared Anvil
  - Scorched Anvil
  - Slimeskull
  - Fluid Cell
  - Mercurial Potion
  - Mercurial Splash Potion
- Added Foundry, Smeltery, and Melter blocks to the list of wrenchable blocks.

#### Bug patches

- Fixed the infamous Hephaestus "white/missing texture bug" that occurred consistently on certain systems by overriding ModernFix's "faster_texture_loading" mixin.
- Some Estrogen recipes (Patches) that were previously non-functional now have correct recipes.
- Fixed a bug where JourneyMap user config would be overwritten when updating the modpack.
- Fixed the superheated recipe for Amethyst Bronze making the same amount as the heated recipe but taking three times longer, by doubling the output and lowering the time to mix compared to the heated recipe.
- Fixed a recipe conflict with the Rose Gold heated recipe by making it use nuggets to differentiate it from unheated or superheated.
- Melting Steel Blocks, Steel Ingots, and Bronze Ingots now gives the correct amount of fluid.
- Fixed some Molten Ostrum recipes not working due to incorrect namespaces.
- Fixed Yttr Lamps converting into colourless non-Inverted Lamps when mined.
- Fixed the Yttr Lamp inversion recipe consuming the Redstone Torch, fixed the Lamp dyeing recipes, and made both of these recipe types shapeless.
- Replaced most mentions of Pipelines in the questbook with Power Plants.
- Fixed a typo in the Chapter 4 Lead Plate quest.
- Fixed an issue where Foundries' contents would lose sync with the client.
- Fixed a bug where players were unable to set their spawnpoint
- Fixed the Certus Quartz recipe in the Industrial Centrifuge outputting a non-existent Fluid Cell as a byproduct, causing the outputted Empty Cells to be unstackable.
- Fixed the Distillation Tower not recognising Liquid Blaze Burners (again) (hindsight: was still somehow not actually fixed).
- Fixed a recipe conflict in the Mechanical Crafter between crafting a single piece of Cobblestone into either Skipping Stones or Andesite Dust by making the Andesite Dust recipe manual-only.
- Fixed a dupe where Iron Wires could be melted for a net gain of Iron.

#### Minor mod updates

- Updated StaREI to 1.0.1.
- Updated Defined's Blocks to 1.0.1

#### Behind-the-scenes

- Added `server.packwizignore` to `.packwizignore` so that it doesn't get included in client packs.
- Fixed the code that converts Potato Cannon projectiles so that projectiles aren't checked multiple times if they are actually projectiles, and they can no longer check if they are items or other entity types.
- Moved some client scripts around to be sorted in a way that makes more sense.
- Moved stuff that didn't hide things in REI out of `/kubejs/client_scripts/hide_from_rei.js`.
- Moved the step-up fix script into its own client script.

### REMOVALS

#### Mod removals

> _Nothing to see here yet..._

#### Gameplay-changing

- Removed second Bronze superheated recipe as its worse than the existing one and not 1:1.
- Removed the Experience Block -> 9 Experience Nuggets recipe as it is intended to be able to turn an Experience Block into 81 Experience Nuggets.
- Removed recipes for some Tech Reborn items that were hidden in REI.

#### Behind-the-scenes

> _Nothing to see here yet..._

## 2.1.2 - 2024/10/31

### ADDITIONS

With this patch, the questbook now has been fully internationalised, adding localisation keys for translators.

> **Update from 2.1.4:**
>
> If you want to translate the modpack, please read CONTRIBUTING.md on the GitHub repository for a guide on how to do so. We'd greatly appreciate you putting the time and effort into making the modpack more accessible!

#### Mod additions

- Added a suite of REI addons:
  - Roughly enough Resources
  - Roughly Enough Loot Tables
  - Roughly Enough Professions
  - Roughly Enough Trades
- Added StarEI - an REI addon for Astral's Custom Machinery recipes.
- Added Defined's Blocks.

#### Gameplay-changing

- Added a portal to the Moon Debris.
- Added ore geodes to the Moon Debris dimension.
- Added a Cobblestone variant of the Stone Growth Chamber that uses Stone Bricks in the structure.
- Added new food items in Astral Foods including Bulba's Tea and Dipped Potato.

#### Quality of life

> _Nothing to see here yet..._

#### Behind-the-scenes

> _Nothing to see here yet..._

### CHANGES

#### Major mod updates

- Updated Create: Copycats+ to 2.1.4, which includes copycats for components such as cogwheels and fluid pipes.

#### Gameplay-changing

- Tweaked the generation in the Chapter 6 dimension to do with Monazite spawning.
- Added a new automation path for Blazing Blood using a Blaze Burner loop, removing reliance on having a player stand next to a Blaze Spawner inside a Foundry.
- Quantum tanks have been re-buffed to Tier 6 upgrade equivalent amounts (virtually infinite capacity).
- Adjusted recipes for Shimmered Apple and Seared Potato.
- Rebalanced some Astral Foods food statistics and effects.
- Added a recipe to craft Vinery Grape Seeds from their respective Grapes.
- Added new Kelp recipes.
- Buffed some recipes introduced in 2.1.1 to make them more appealing.
- Nerfed the Steam Turbine from Astral Generators (168 000 E/t -> 15 000 E/t).

#### Quality of life

- Tweaked the Stone Growth Chamber to use block tags in its structure to allow for more customisability.

#### Bug patches

- Patched out the existence of bottomless fluid deposits as they weren't intended to be in the pack. Newly generated worlds will reflect this. If enabling bottomless fluids in create config yourself, new fluids can be bottomless such as chocolate, blood, milk and honey to reflect them being useful in many automation recipes.
- Fixed some default example multiblock schematics showing the wrong multiblocks.
- Removed conflicting recipes for crushing Netherrack.
- Added a missing recipe for the Calorite Tank.
- Fixed a bunch of item names that displayed as internal localisation keys.
- Fixed some discrepancies in various quest descriptions.
- Fixed the Copper Shovel not being able to be used in recipes that look for shovel tags (mainly Farmer's Delight recipes).
- Fixed the Distillation Tower not functioning with Liquid Blaze Burners (hindsight: this was in fact not fixed).
- Fixed metal alloying recipes that didn't work, as Create allows heated recipes to be done while superheated, by distinguishing heated and superheated recipes with molten metals and solid metals respectively.
- Fixed a Gold duplication bug.
- Fixed Eggs without Chickens (???).

#### Minor mod updates

- Updated XPCrystals to 1.0.5, with fixes for XP Lake spawning.

#### Behind-the-scenes

> _Nothing to see here yet..._

### REMOVALS

#### Mod removals

> _Nothing to see here yet..._

#### Gameplay-changing

- Removed Venus and the "fake" Glacio (the one in Proxima Centauri, not the one in orbit of Mars, that one is still there) from the planet menu. Venus has been removed as it has very little content, is not at all required for progression, and is not within our scope to build upon any time soon.

#### Behind-the-scenes

> _Nothing to see here yet..._

## 2.1.1 - 2024/10/16

### ADDITIONS

#### Mod additions

- Added Astral Generators:
  - Recipes exist, but there is not yet documentation in the questbook.

#### Gameplay-changing

> _Nothing to see here yet..._

#### Quality of life

> _Nothing to see here yet..._

#### Behind-the-scenes

> _Nothing to see here yet..._

### CHANGES

#### Major mod updates

> _Nothing to see here yet..._

#### Gameplay-changing

- Changed the location of the machine controller in the Stone Growth Chamber to be one block lower to allow for hopper/chute access. Old structure is retained so as to not immediately break existing factories, however it only generates Andesite regardless of where it's placed.
- Stone Growth Chambers no longer generate output based on dimension, instead they now generate based on what blocks they're made from. Please refer to the original Chapter 2 quest for more information.
- Buffed the recipe for Blaze Cakes so they now use less Hellfire.
- Reverted nerf for Tech Reborn fuels.
- Unified the Andesite Alloy blocks from Create and Create: Astral (KubeJS).
- Added a recipe to melt Slime Logs.
- Added some new recipe options for Calcite and Dripstone - also made them mill into higher yields of Bonemeal.
- Added more automation routes for dyes.
- Screw Breeches are now wrenchable to pick them up without breaking them - they could not previously be obtained in survival without using Silk Touch.
- Buffed recipe for Ink Sacs.
- Tweaked some Tech Reborn fluids to not use ingot amounts (111)

#### Quality of life

- Structure NBT (???)
- Fragile Sheet Blocks are now wrenchable to pick up.

#### Bug patches

- Fixed Stone Growth Chambers not generating outputs on servers.
- Fixed an issue where falling out of Earth Orbit would put you in the End.
- Fixed Space Stations voiding nearby terrain when created.
- Fixed the recipe for Seitan.
- Fixed missing names for Tech Reborn fluids.
- Fixed a recipe conflict for crushing Andesite - the recipe now produces Cobblestone instead of Tin Nuggets.
- Fixed milling recipes incorrectly displaying outputs as "200%" chance instead of the intended 100% chance for 2 items.
- Restored methods of getting resources from Soul Sand and Soul Soil.
- Fixed the recipe for the Shimmer Amplifier using impossible fluid amounts in the spouting step of the sequenced assembly.

#### Minor mod updates

> _Nothing to see here yet..._

#### Behind-the-scenes

> _Nothing to see here yet..._

### REMOVALS

#### Mod removals

> _Nothing to see here yet..._

#### Gameplay-changing

- Deprecated the original structure for the Stone Growth Chamber in favour of the new one. Expect the old structure to be removed in an upcoming patch.
- Removed all recipes for the Zinc Sheets from Create: Deco, as they have no uses that can't be replaced with the Zinc Sheets from Create: Crafts And Additions.

#### Behind-the-scenes

> _Nothing to see here yet..._

## 2.1 - 2024/10/08

> **Note**:
>
> Along with the issues of a non-standard documentation, the changelog for 2.1 may differ in language style from the rest of the changelog due to being originally written much more informally, as well as due to just how large of an update 2.1 was to Create: Astral. Due to its size, I have decided to just copy and paste the original changelog while organising each comment into their respective categories and fixing basic grammatical mistakes that I immediately noticed.
>
> If you wish to take on the responsibility of cleaning this up, please make a Pull Request on the GitHub repository - it'd be much appreciated.

### ADDITIONS

#### Mod additions

- Added XPCrystals
- Added Traveler's Backpacks
- Added Yttr
- Added Create Big Cannons
- Added Create: Copycats+
- Added Create Additions
- Added Project Table
- Added Create: Ender Transmission
- Added Create: Estrogen
- Added Storage Drawers
- Added Discord Rich Presence
- Added TrashCans
- Added Buildings Gadgets and Trowels

#### Gameplay-changing

- Introduced a new Chapter 6 and an actual tangible End of the modpack.
- Added many new structures placed around the world to strengthen Create: Astral’s 'unique' atmosphere (especially thanks to structure contest submitters). Structures are now vastly more varied, and even inhabit orbit dimensions.
- Introduced an entirely new create-related enchantmant chain, for automation of enchantments (in the late game, this extends above maximum level caps for certain enchantments).
- Added methods of obtaining meats and mob drops without directly harming an animal at all.
- Multiple new multiblocks spread across all tiers of progression have been created. (REI support for some may be limited or non-existent, but recipes will be explained within the questbook!)
- Added a Create: Astral multiblock to lessen the reliance on normal cobblestone gens to ease the strain item entities sometimes have on the game.
- Portals for Mars & Mercury now exist, but are less simple to obtain than the Shimmer Portal, and will be obtained later in chapters where you have already explored that planet. (Reducing reliance on rockets for when the 'gimmick' of them has faded)
- Added Immersive Aircraft "Blueprints", which can be found in generated structure loot tables. These can be duplicated infinitely once the first of each is obtained.
- Added storage drawers to provide a smarter solution to storage than packages and CSU’s. These come with custom-implemented storage drawer upgrades for smoother progression.
- Added two more dimensions that are relevant in Ch4 (one being entirely new), and another dimension is introduced in Ch6.
- Added train support for custom Astral Portals.
- Added secret plushies :3
- Added new Potato cannon projectiles, some useful, some less than useful, some… explosive…

#### Quality of life

- Added an optional community paintings resource pack, made from content posted to our Discord server's #fan-art channel.
- Added Ponder support for some custom multiblocks, including the electrolyzer.
- Re-added trinket slots to allow as many trinkets as you can fit…
- Added prompt to rEaD tHe QuEsTbOoK

#### Behind-the-scenes

> _Nothing to see here yet..._

### CHANGES

#### Major mod updates

- Updated Create to 0.5.1 - Rise and Shine
- Updated Astral Additions to 1.3.1
  - Including new mobs, items with unique gameplay mechanics, a varietiy of fixes, and more.

#### Gameplay-changing

- Gave some love the entire quest book to include clearer descriptions, new automation explanations, and an almost entirely remade mid-endgame.
- Reworked the resource generation in its totality (goodbye, deepslate gen). Cobblestone generators still kick off many production chains, and all lunar cobble varieties can be generated in the Stone Growth Chamber multiblock in different planet orbits. All metals can be obtained in much greater varieties AND quantities from alternative sources, and those sources (e.g. create orestones) can be automated more easily.
- Reworked and added a plethora of new Create-ified food recipes for all food mods. (Inc. Liquid Food processing PR).
- Reworked Villagers to work in Create: Astral by changing the trades to not break progression, and changed some trader varieties to be more thematic to a create-pack.
- Adjusted the power generation curve by adding new options and reworking/buffing the lesser used ones.
- Reworked Tinker tool balance. (Buffed sledgehammer back to it's true strength. Additionally, adjusted lesser used tools to be more relevant).
- Changed inventory management, by making shulker boxes and the newly added Travelers Backpack (Compatible with spacesuits!) be accessible more conveniently.
- Reworked AE2 Recipes to work with Create instead of the Vanilla AE2 methods, adjusted the questline for it.
- Adjusted Ad Astra planet generation (Mercury is now flatter, but retains patches of extreme spikes and mars terrain is now more rough). Ore should now generate more commonly / evenly to incentivise exploring on your first visit.
- Superheating through blaze cakes are back, liquid superheating still exists and is even smoother, accepting the actual fluids rather than buckets when using a straw.
- Easier access to Brass Create components early-on, including the regular suite of funnels/tunnels, alongside stockpile switches and content observers.
- Added log stripping support for all wood types.
- Reworked a large amount of stonecutting & mechanical saw recipes so they integrate with Create sawing smoothly.

#### Quality of life

- Reworked the primary UI, and re-made almost all of the existing textures for Create: Astral that weren't directly created by us to be in-house.
- Create-Style sheet textures replace all types of metal plates, and transitional textures for a number of create sequenced assemblies should further differentiate items in active assembly lines.
- Completely overhauled the main menu, with new custom icons for the buttons with short animations to make it feel more alive, as well as a collection of screenshots from the community creating a slideshow in the background.
- Introduced many extra tooltips for more informational content regarding less-clear item usages.
- Added too many splash texts, to hopefully make you smile, because we love you. <3
- Easy access home from the end by shift clicking any bedrock at y=0

#### Bug patches

- Fixed the default settings configuration setup (Will now keep your settings every time you update the pack).
- Fixed fluid player behaviour for custom fluids (collision/floating/lava burning).
- Fixed common duplication bugs through updating to Create 0.5.1
- Fixed loot table behaviour (Example: Loot tables were sometimes not generating properly, when a player visits another structure of the same type)

#### Minor mod updates

> _Nothing to see here yet..._

#### Behind-the-scenes

> _Nothing to see here yet..._

### REMOVALS

#### Mod removals

- Removed Create: Sifter - its recipes have been distributed between different standard Create processes.

#### Gameplay-changing

- Removed the reliance on 10k infinite pools of fluids, added tiered automation recipes for Shimmer and Lava, and further recipes for most other fluid types (10k pools are now disabled by default, but can be re-enabled in the Create settings widget on the pause menu).

#### Behind-the-scenes

> _Nothing to see here yet..._
