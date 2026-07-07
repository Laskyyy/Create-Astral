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

## 2.1.5 [CURRENT RELEASE] - 2026/07/05

### SUMMARY

Most changes in 2.1.5 are surrounding many pain points in Chapter 3, when most players typically quit as the grind ramps up dramatically. Alternate recipes have been added for many of the more painful processes such as Integrated Circuits, Brass Casing, and Launchpads to try to tackle this, with the aim of having easier, yet less automatable, solutions than the existing ones, or adding alternate recipes to give players more choice depending on what their automation setup looks like.

Fabric has been updated from 0.16.3 to 0.18.4. This may introduce unforseen issues, so please keep reporting any bugs you find on GitHub or Discord!

Hephaestus has entered LTS for 1.18.2, meaning that some of the oldest bugs in the modpack have now been addressed. Huge thanks to @AlphaMode for continuing to provide support for the mod! This also means that those hosting a server will no longer have to manually install Hephaestus, although the same still can't be said for Vinery.

We have also decided to include the No Chat Restrictions mod in the pack, so that players in countries where multiplayer chat has been restricted can once again enjoy the modpack. The majority of the Create: Astral developer team is from the United Kingdom, one such country where these restrictions have been forced upon the population, so this was necessary for continuing our development of the modpack. We do not recommend any person ever hand over their identity to access online chat services, and instead encourage you to seek alternative solutions.

### ADDITIONS

#### Mod additions

- Added Chunk Corruption Preventor (#657) @ethanicusss
  - This mod attempts to prevent chunks from resetting to their default state when failing to save properly by removing problematic blocks from those chunks
  - If it can't prevent a corruption, it dumps info to logs to help server admins diagnose the problem
  - No guarantees that it works every time
- Added Smoke Signals (#658) @ethanicusss
  - You can now put coloured Wool underneath Campfires, and the smoke will mimic that colour
- Added Sense (#673) @tobynguyen27
  - A library used by Defined's Blocks and Astral Generators
- Added CodeBebeLib (#673) @tobynguyen27
  - A library used by Defined's Blocks and Astral Generators
- Added More Fluid Cans (#675) @MikoTheBoi
  - Adds a pair of cans that can hold 100 mB (or one Gem) and 250 mB (or one Brick, or Slimeball) of any fluid
- Added Ear Trinkets (#682) @Nik-Was
  - Wearable Cat Ears with a dedicated trinket slot
  - Cat Ears grant a 2% speed boost, with more trinkets planned for the future
- Added The Death Penalty (#696) @ethanicusss
  - An in-house mod written by @HyperRaccoon13
  - Adds death penalties to the modpack - by default, players will now respawn with less XP and 7.5 hunger shanks instead of the full 10
  - Enabling KeepInventory will now enable experimental options that removes certain items from the player's inventory, like Raw Ores, chest loot, food, and ammunition upon respawn
  - We are looking for feedback on how this mod plays when KeepInventory is enabled, and are considering enabling KeepInventory by default with these penalties applied in the future
  - There is a quest explaining this mod in the FAQ chapter
- Added Pack Order (#705) @The-Shortman
  - Another in-house mod written by @HyperRaccoon13
  - Allows modpack developers to define a default resource pack order, and adds a button in the resource pack menu that sets it to that order
  - The button shows an 'X' if the resource packs don't match the predefined order, and a checkmark if the resource packs do match the predefined order
  - Effectively prevents the "my resource packs reset, what was the original order?" conundrum, so now you just have to press one button when your packs inevitably reset, and all your problems are solved
- Added Log Begone (#692) @The-Shortman
  - Configured to redact commonly spammed log entries that are useless to the end user during diagnosis of issues with the modpack
  - Reduces the size of the log between game launch and entering world by about 80% (that's a lot of spam!)
- Added No Chat Restrictions (#717) @ethanicusss
  - The UK government has enforced chat restrictions for accounts of users residing in the UK that have not verified their age - this mod disables that feature, as it is only a client-side check
  - The restriction of chat features limits many vital functions of the game, most notably running commands, and not being able to chat with other players, even on LAN servers
  - Adding this mod will now make it possible for British players to enjoy the full modpack experience again

#### Gameplay-changing

- Added a new Cogwheel Skull item, which can be used as a projectile for the Potato Cannon, with the ability to freeze mobs for a short time in the impact radius (#610) @Nik-Was
- Implemented the Tech Reborn Alloy Furnace as an alternative to the Alloy Smelter. The Furnace uses fuel while the Smelter uses energy (#634) @ethanicusss
- Implemented functionality to the Extractinator - Silt, Slush, Sand, and Gravel can be processed using it (#643) @ethanicusss
- Added Doncrete, a Desh-Concrete hybrid block that can be used as a substitute for Blast-Resistant Concrete in the Launchpad recipe, along with a Stair and Slab variant (#636, #671) @ethanicusss
- Added a set of items for an alternate production line for Integrated Circuits that can be done manually, requiring no Deployers, intended for small batch crafts (#636) @ethanicusss
- Added an alternate production line for Biofuel (#636) @ethanicusss
- Added an alternate, less efficient, easier recipe for Brass Casing (#636) @ethanicusss
- Added an alternate production line for Precision Mechanisms once Steel is obtainable, which has a 100% output rate as opposed to the earlier recipe's 80% output rate (#636) @ethanicusss
- Added an alternate recipe for Basic Machine Frames once Steel is obtainable, the Copper Casing can now be substituted with a Steel Frame (#636) @ethanicusss
- Added an alternate recipe for Compressed Plantballs in the Compressor that guarantees their output as opposed to the Mechanical Press recipe (#636) @ethanicusss
- Added a new recipe for Warped Wart Blocks, making them automatable without a Warped Fungus farm (#648) @ethanicusss
- Added a new recipe for Mycelium, involving mixing Dirt and Cheese (#648) @ethanicusss
- Added Rock Salt, a new orestone on Mercury with decorative variants, which can be crushed into Saltpeter (#671) @ethanicusss
- Added the Blender, a custom machine that takes up to 4 shapeless inputs and outputs an item - it can currently craft Saltmeal and can do some alternative recipes (#671) @ethanicusss
- Added Saltmeal, which can be used on any Amethyst-like crystal to grow it to the next stage (#671) @ethanicusss
- Added Mashed Potato, Hashbrowns, and Protein Balls as new food items (#671, #687) @ethanicusss
- Added a new recipe for the Unbored Steel Screw Breech, allowing it to be cast using Hephaestus casting (#671) @ethanicusss
- Added a new Straw Cast for casting Straws (#671) @ethanicusss
- Added some more rewards to certain quests (#687) @ethanicusss
- Added three new Glowstone recipes (#694) @ethanicusss
- Added custom recipes for a process from the Yttr mod, previously unused in Astral, called Piston Smashing (#695) @ethanicusss
- Added a Sputum Bottle along with a set of different recipes to make Sputum (#695) @ethanicusss
- Added two recipes for the Ender Transmission Chunk Loader, effectively allowing endgame chunkloading without FTB Claim limits (#700) @ethanicusss
- Added a recipe for the Andesite Iron Trapdoor (#715) @MikoTheBoi

#### Quality of life

- The modpack has now been localised for European Spanish (es_es) - bear in mind this may already be outdated (#598) @lizondoalex
- The modpack has now been localised for British English (en_gb) (#624) @The-Shortman
- Added some decor from Beautify and Vinery to the Phonos Village House structure (#654) @ethanicusss
- Added some new quests and chapters - and modified some existing quests and chapters - to explain a multitude of previously unmentioned or poorly-explained concepts (#659, #686, #687) @MikoTheBoi @ethanicusss
- The modpack has now been localised for Russian (ru_ru) (#680, #704, #710, #712) @Godzillys @Nik-Was

#### Behind-the-scenes

- Added a Pull Request Template to the GitHub repository (#626) @The-Shortman
- Added a permanent Bug Tracker Project to the GitHub repository @The-Shortman
- Added summaries to the top of future changelogs for a quick TL;DR of important changes @The-Shortman
- Added various placeholder textures and model files to resolve errors on startup (#671, #687) @ethanicusss

### CHANGES

#### Major mod updates

- Updated Fabric to 0.18.4 (#717) @ethanicusss
  - Prior version of Fabric was 0.16.3, so we are expecting issues to arise from this update
  - As always, please report any bugs you run into
- Updated Astral Generators to v2.0.0-alpha5 (#691) @tobynguyen27
  - Updated textures for blocks
  - Redesigned multiblock structures
  - Updated machine GUI textures
  - Added Resolith as an alternative energy transfer method
  - Added a Steam Bucket
- Updated Astral Additions to 1.5.4 (#697) @ethanicusss
  - Added the Black Hole mob, which spawns in the Moon Debris and in Mercury Deltas
  - Added a set of new weapons: the Rapier, Soulsteal Dagger, Diamond Boomer, Shimmerang, Parry Shield, Spud Shotgun, and the Beta Weapons
  - Added a set of new tools: the Astral Hoe and the Shimmer Fishing Rod
  - Added the ability to fish in Shimmer (Shimmer Fishing Rod required)
  - Added Desert Flowers that spawn in the Martian Desert
  - Fixed Yttr's Void Shelving Unit to work properly
- Updated Adopt A Floppa to 1.2.2 (7e35eac) @ethanicusss
  - Added the Sloppa

#### Gameplay-changing

- Custom Potato Cannon projectiles now have some more possible effects when firing and landing, depending on the projectile (#612) @HyperRaccoon13
- Added all Mixer-based alloys to the recipes of the Tech Reborn Alloy Smelter (#634) @ethanicusss
- Changed the recipes of the Thermal Generator and Gas Turbine to use Ostrum instead of Invar (#634) @ethanicusss
- Nerfed the amount of Rubble obtainable from Ruined Containers to be in-line with other ruined blocks, which now only drop a minimum of 0 and a maximum of 2 rubble each (#635) @The-Shortman
- Changed the Sulphuric Acid Mixer recipe to use Sulphur Dust instead of liquid Sulphur (#636) @ethanicusss
- Reduced the amount of Steel required in making Blast Resistant Cement fluid by 33% (#636) @ethanicusss
- Launchpad recipes now give two launchpads instead of only one, for the same cost (#636) @ethanicusss
- Reduced power consumption of the existing Biomass recipe in the Compressor to 200E total (#636) @ethanicusss
- Buffed the recipe for Leather in the Chemical Reactor to be better than just bulk blasting Rotten Flesh (#636) @ethanicusss
- Buffed a few recipes in the Extractor and Grinder machines (#636) @ethanicusss
- Changed the drop pool of Corrupted Lunarians, so they now drop Phantom Membranes at a 33% chance (#651) @ethanicusss
- Replaced the endgame Root Of Continuity quest with a Shimmer Amplifier quest (#656) @ethanicusss
- Certain recipes that previously only accepted Buckets now also accept Tech Reborn Fluid Cells (#659) @MikoTheBoi
- Buffed the recipe for the Iron Fence to give 2x the legacy output (#659) @MikoTheBoi
- Reverted the Shimmer Apple recipe to use an Ender Crystal (#659) @MikoTheBoi
- Changed Gamer's Delight recipe to be a Sequenced Assembly (#659) @MikoTheBoi
- Nerfed Seared Potato recipe to use more Seared Stone and to have a longer cooling time after being cast (#659) @MikoTheBoi
- Blaze Fries and Fried Cod now take heating (#659) @MikoTheBoi
- Buffed the amount of hunger fulfillment Astral Sauce, Quantum Pasta, Compressed Onion, and Food Amalgamation provide (#659) @MikoTheBoi
- Buffed the amount of Fire Resistance time that Blaze Fries And Cod provides (#659) @MikoTheBoi
- Buffed the amount of Fire Resistance and Absorption time that Cod 'n' Blaze provides (#659) @MikoTheBoi
- Nerfed the Dipped Potato by increasing the amount of time you can't jump (#659) @MikoTheBoi
- Nerfed the time that Chocolate Ice Cream gives Speed for (#659) @MikoTheBoi
- Nerfed Gamer's Delight by increasing Shock time (#659) @MikoTheBoi
- Increased the amount of Molten Silver required in making Integrated Circuits, primarily to make the fluid values easier to read (#659) @MikoTheBoi
- Straws now require casting Molten Silicon instead of just Bamboo (#671) @ethanicusss
- Changed the recipe for the Copper Coil Block to require roughly the same amount of copper, but require less usage of the Rolling Mill, making the recipe more intuitive to craft and less tedious (#681) @ethanicusss
- Changed the drop pool of Sulphur Creepers to now drop Sulphur (#687) @ethanicusss

#### Quality of life

- Changed the texture of the Distillation Tower Controller to match the advanced machine casing it is made from, and added an "off" variant for its idle state (#625) @ethanicusss
- Astral Generators multiblock fluid inputs and outputs are now based around a bucket amount, but the ratio of input to output is the same as before (#622) @KonSola5
- Optimised many of the language keys throughout translation files (#683) @nageih @VM-Chinese-translate-group

#### Bug patches

- Fixed the step-up modifier not working after 2.1.4 (#608) @ConductiveFoam
- Reduced the texture size of the Hephaestus Farsighted modifier in an attempt to reduce mipmap level load times [N.B. There are more textures that need to be addressed like this] (#631, #632) @ethanicusss
- Fixed Bronze Nuggets not melting into Molten Bronze (#620) @ConductiveFoam
- Fixed a multitude of typos, grammar mistakes, and inaccuracies in the Questbook (#621, #624, #712) @ConductiveFoam @The-Shortman @Nik-Was
- Bulba Tea recipe now outputs a bottle instead of 333 mB, removing stray millibuckets (#622) @KonSola5
- Fixed duplicate recipes for the Oxygen Loader and Compressed Air Cells appearing in REI (#633) @The-Shortman
- Fixed Compressor block names not having assigned lang keys, now they show their proper names instead of internal names (#633) @The-Shortman
- Fixed the Alternator and Motor from Crafts and Additions not being able to output/input their full generation/consumption with only one connector (#633) @The-Shortman
- Fixed the recipe for the Strength modifier conflicting with Overslime on Hephaestus chestplates (#633) @The-Shortman
- Fixed the Seitan to Egg recipe turning into Protopork halfway through and outputting Pork (#633) @The-Shortman
- Fixed the Mixer recipe for Farmers' Delight Pie Crust using an incorrect fluid amount (#633) @The-Shortman
- Changed the Blackstone to Scorchia quest in the Automation Matrix chapter from Blackstone to Basalt, to properly represent that specific automation line (#638) @ConductiveFoam
- Attempted to fix trains deleting themselves when disassembled (#647) @The-Shortman
- Fixed a Nether Wart duplication glitch (#648) @ethanicusss
- Removed a bunch of recipes that had null outputs (#653) @ConductiveFoam
- Replaced naturally spawning Phonos Jukeboxes with Pianos, Note Blocks, and Vanilla Jukeboxes, as the Phonos Jukebox causes crashes when interacted with (#654) @ethanicusss
- Replaced Diamond Grit in the Trident crafting recipe with Diamond Dust, making the Trident actually craftable (#671) @ethanicusss
- Renamed Asphalt Slab and Asphalt Stair to match Andesite Pavement (#671) @ethanicusss
- Fixed Acacia Fences having a missing texture in the inventory (#671) @ethanicusss
- Fixed a scenario where the player can fall through the world in the End to get to the Nether - this is not intended functionality, in fact, I don't even know what the "Nether" is (#674) @ethanicusss
- Fixed the Industrial Blast Furnace not returning cells from recipes (#686) @MikoTheBoi
- Fixed the Sawmill not having any recipe inputs (#699) @MikoTheBoi

#### Minor mod updates

- Updated Hephaestus to version 3.5.2.312, providing LTS for 1.18.2 (#644) @The-Shortman
  - Fixed chestplates preventing certain right-click interactions like sleeping, mounting entities, and interacting with pets
  - Fixed the Luck modifer not increasing mob drop rates on weapons
  - Fixed the Pockets ability on leggings not working
- Updated Defined's Blocks to v1.0.6 (#673) @tobynguyen27
  - Added Pastel colour blocks
  - Added support for Chipped Workbenches
  - Added a 'squish' animation for the Hatsune Miku Plushie
  - Added a Teto and Neru plushie

#### Behind-the-scenes

- Placed every script that wasn't in an IIFE into an IIFE (#622) @KonSola5
- Hephaestus fluid sync fix script is explicitly not type checked (#622) @KonSola5
- Changed numbers to fluid constants where the constants weren't already being used (#622) @KonSola5
- Remade type definitions for `interaction.js`, housed in `interaction.d.ts` (#622, #646) @KonSola5 @The-Shortman
- Moved fluid constants to startup scripts in case they need fluid constants at some point, they currently don't (#622) @KonSola5
- Improved the automatic modpack build script to skip the servercore .jar when building the client pack - it now building the CurseForge zip using the servercore .pw.toml file - and added an action to create release branches (#650) @The-Shortman
- Prevented packwiz.json appearing in the serverpack, included the Fabric server jar in the serverpack, and removed the unused publish job from the build action (#672) @The-Shortman
- Rewrote the serverpack README file in markdown, with more organisation and detail (#672) @The-Shortman
- Added a default 'none' heat condition for recipes to resolve warnings on startup (#671) @ethanicusss
- Bumped action versions in workflows and fixed the issue of packwiz having expired binaries (#706) @The-Shortman
- Optimised resource packs in the repo by using pw.toml metadata files instead of complete folders (#711) @The-Shortman

### REMOVALS

#### Mod removals

> _Nothing to see here yet..._

#### Game-changing

- Removed Invar recipes as the metal is no longer used in anything (#634) @ethanicusss
- Removed the ability to turn Chromatic Compound into Shadow Steel by dropping it into the void - the custom recipe must be used instead (#655) @ethanicusss
- Removed the recipe for the Quartz Growth Accelerator as it doesn't serve a use (#675) @MikoTheBoi
- Removed recipes for Enchanted Books that exceed vanilla levels, as they didn't work properly when applying to tools (#686) @MikoTheBoi
- Removed the Project Table quest from Chapter 0.5 as it is broken (#687) @ethanicusss
- Removed Moonmen as they served no gameplay or lore purpose (#688) @ethanicusss
- Removed the Lead to Glowstone transmutation recipe as it was never intentional (#694) @ethanicusss

#### Behind-the-scenes

> _Nothing to see here yet..._

## 2.1.4c [HOTFIX] - 2025/08/18

### CHANGES

#### Gameplay-changing

- Removed the base recipe for Bioethanol from Create: Crafts and Additions.

#### Bug patches

- Fixed missing Sulphur recipe for automating Oil.
- Fixed missing recipe for melting Slime Logs into Slime.
- Fixed Venus Gold Ore appearing on Mars, retexturing and renaming it to Mars Gold Ore.
- Fixed inconsistency in the name of Diamond Grit ~~Sandpaper~~ Sand Paper to match the other Sand Papers.
- Fixed Ostrum and Calorite melting at the wrong temperatures.
- Fixed missing name for Mercury Calorite Ore.
- Fixed a lot of ores being mineable with the wrong material level.
- Fixed the quest for pressing Seeds into Seed Oil incorrectly saying that the basin needs to be heated.
- Fixed Chromatic Compound not stacking properly.
- Fixed melting yields of metals that were changed in 2.1.4a to give the correct value of 12 nuggets instead of 13.

## 2.1.4b [HOTFIX] - 2025/08/11

### CHANGES

#### Gameplay-changing

- Removed recipes for the Hephaestus Mushroom Stew fluid and replaced them with the KubeJS Mushroom Stew fluid.
- Made the Synthetic Redstone Crystal recipe shapeless.

#### Bug patches

- Fixed the Desh Rocket being uncraftable.
- Fixed the Industrial Centrifuge being uncraftable.
- Fixed the Yttr Suit Station being uncraftable.
- Fixed a conflicting recipe for Sturdy Sheets caused by the base Create recipe still existing.
- Fixed the Lead-lined Space Suit recipe requring the wrong armour set to craft (it was using Netherite instead of Sturdy).
- Fixed Cherry, Glacian, Old Growth Cherry, and Rubber stripped logs and wood not being valid in making Andesite Casing.
- Fixed the Tech Reborn Grinder not having all the recipes it should have had.
- Fixed Tech Reborn Storage Units and Tanks not being upgradeable.
- Fixed Oil not being craftable.
- Fixed a variety of broken recipes with Traveler's Backpacks.
- Fixed the Chapter 3 haunting quest requiring Blackstone to complete (Blackstone is no longer obtainable via haunting).
- Fixed a variety of incorrect Hephaestus material melting temperature values.
- Fixed a KubeJS error being thrown every time a Foundry Controller was right clicked.
- Fixed storage upgrades applied to Drawers from Extended Drawers showing a missing texture on the front face of the block.

## 2.1.4a [HOTFIX] - 2025/08/09

### CHANGES

#### Gameplay-changing

- Buffed Melter primary output of some ore blocks (obtained via silk touch) to give 2 ingots of the material instead of 13 nuggets.
- Buffed Foundry byproduct of some ore blocks (obtained via silk touch) to give 6 nuggets instead of 4⅓ nuggets.
- Nerfed Foundry byproduct of some raw ores to give 3¼ nuggets (3250 droplets), and raw ore storage blocks to give 3¼ ingots, to get rid of the horrible 4⅓ nugget value (rounds to 4333 droplets).

#### Bug patches

- Fixed several raw ores melting into a lower yield than a Furnace when placed in a Melter.
- Fixed a crash caused when looking at certain Cutting Board recipes.
- Fixed a conflicting Dripstone Block recipe in the Millstone producing Gold Nuggets when it should produce Clay.
- Fixed missing recipe for haunting charcoal dust into charcoal.
- Fixed haunting recipe for coal from charcoal requiring two charcoal instead of one.
- Fixed a missing recipe for coal dust in the Grinder.

## 2.1.4 - 2025/08/08

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
- Added Ambrosia, Blaze Fries, Blaze Fries and Cod, Blaze Rods, Chocolate Ice Cream, Cod 'n' Blaze, Fried Cod, Gamer's Delight, and Ice Cream Sandwich foods via Astral Foods.
- Added a Recovery Orb edible which functions like a pre-nerf Seared Potato, intended for use to recover lost items after dying on the Moon.
- Added a new mid-game upgrade slot bonus for Hephaestus tools - Spacious, which needs a 16³ Spatial Component from Applied Energistics 2.
- Added a new late-game ability slot bonus for Hephaestus tools - Amplified, which needs a Shimmer Amplifier.
- Added a new structure for the Distillation Tower multiblock that moves the controller one block up to allow an additional side of the block to be accessed.

#### Quality of life

- Added four new GUIs for the Electrolyser, Distillation Tower, Stone Growth Chamber, and Shimmer Refinery multiblock structures.
- Added a dedicated transistional item for the Shimmer Amplifier sequenced assembly recipe.
- Added a live version tracker on the main menu that pulls the most recent version of Astral from the GitHub repository releases.

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
- Blazing Blood can now be made by mixing Blaze Powder and Blood in a superheated basin.
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
- Changed Launch Gel's transitional item to be Slimesteel Nugget.
- Diamond tools now need 1 Diamond worth of Molten Diamond per loop instead of 2.5 Diamonds.
- Buffed marimo dupe recipes to now output 3 marimo instead of 2. This helps with recycling using brass funnels to extract precisely 2 marimo from the basin, leaving one in the basin to be reprocessed.

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
- Baked main menu screenshot credits onto the images themselves. Best viewed in a 16:9 monitor aspect ratio.

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
- Fixed incorrectly assigned Log variant textures from Chipped that contradicted their names.
- Fixed Plasma Fluid (previously Metabolic Broth) having the same name as a progression-vital fluid also named Metabolic Broth.
- Fixed some enchantment recipes having 4 loops and Precision Mechanism as a transitional item because these were omitted from the recipe.
- Fixed the inability to create both Capacity and Potato Recovery enchanted books by changing Potato Recovery's assembly to use a Potato as a first item.
- Fixed most fluid cell quest tasks not respecting NBT and completing when the player is holding any type of fluid cell.
- Fixed certain blocks not being able to be picked up by wrenches.
- Fixed the Farmer's Delight Chocolate Pie filling recipe not working due to a broken fluid amount.

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
- Fixed incorrect type name in `immersive_aircraft.js`.
- Fixed incorrect output removal in `removals.js`.
- Fixed mixed up mod names in `mixing.js`.
- Updated the bug report template on GitHub to autoassign the new bug tag name.
- Removed duplicate Plantball and Biomass sequenced assemblies.

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

- Removed the packwiz binaries from the repository because now CONTRIBUTING.md tells you how to get the latest version of them.

---

## 2.1.3 - 2025/01/05

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

---

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

---

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

---

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
