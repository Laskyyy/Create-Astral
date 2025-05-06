# Create: Astral Repository Contribution Guidelines

Please refer to the [License](/LICENSE.md) before making any pull requests or personal modifications.

## Contents of this document:

-   [General Overview **(Please read this before anything else!)**](#general-overview)
    -   [Locations that may be of interest](#locations-that-may-be-of-interest)
    -   [Setting up your game instance](#setting-up-your-game-instance)
    -   [Setting up your code environment](#setting-up-your-code-environment)
        -   [Running the packwiz server within your locally cloned repository](#running-the-packwiz-server-within-your-locally-cloned-repository)
        -   [Running the packwiz server using your PATH](#running-the-packwiz-server-using-your-path-windows-only)
-   [KubeJS, Resources, and Datapack contributions](#kubejs-resources-and-datapack-contributions)
    -   [Housekeeping](#housekeeping)
        -   [Recipe contributions](#recipe-contributions)
        -   [Adding or modifying tags](#adding-or-modifying-tags)
        -   [All other contributions of this category](#all-other-contributions-of-this-category)
    -   [Internationalization support](#internationalization-and-localization-support)
-   [Quest contributions](#quest-contributions)
    -   [Language keys](#language-keys)
-   [Translating](#translating)

## General Overview

Welcome to the Create: Astral Contribution Guidelines!

There's a few things about this repository that you may not expect - primarily, there are no .jar files in the [mods](/mods/) folder. That's because this repository uses [packwiz](https://github.com/packwiz/packwiz), which allows a lightweight repository such as this to be built into a full modpack by downloading mods from Modrinth or CurseForge directly, automatically.

In order to take full advantage of this repository, you will need to set up packwiz both in a game instance, and in your code environment.

After you've done that, please take a look at the documentation for specific types of contribution, depending on what your goal is.

### Locations that may be of interest

```json
📦
┣ 📂config // Various configs for all sorts of mods
┃ ┣ 📂ftbquests // Configs for quests including the questbook data
┃ ┗ 📂fancymenu // Configs for all the custom menus
┣ 📂mods // Mods (refer to packwiz documentation)
┣ 📂kubejs
┃ ┣ 📂 assets: Global assets - acts like a global resource pack.
┃ ┣ 📂 data: Global data - acts like a global datapack.
┃ ┣ 📂 config: Stores KubeJS configuration. KubeJS scripts may access this directory.
┃ ┃ ┣ 📜 client.properties
┃ ┃ ┗ 📜 common.properties - allows to disable the KubeJS class filter in order to access any Java class for reflection.
┃ ┣ 📂 src: Hosts script source code which is then bundled by Vite.
┃ ┣ ┣ 📂 client: Holds all client scripts, like REI events, ponders, etc. Gets bundled into `client_scripts/client.js`
┃ ┣ ┣ ┣ 📂 scripts: Holds client modules.
┃ ┣ ┣ ┗ 📜 client.ts: Client script entrypoint - calls other client modules.
┃ ┣ ┣ 📂 server: Holds all server scripts, like recipes, block loot, etc. Gets bundled into `server_scripts/server.js`
┃ ┣ ┣ ┣ 📂 scripts: Holds server modules.
┃ ┣ ┣ ┗ 📜 server.ts: Server script entrypoint - calls other server modules.
┃ ┣ ┣ 📂 startup: Holds all startup scripts, that add items, fluids, etc. Gets bundled into `startup_scripts/startup.js`
┃ ┣ ┣ ┣ 📂 scripts: Holds startup modules.
┃ ┣ ┣ ┗ 📜 startup.ts: Startup script entrypoint - calls other startup modules.
┃ ┣ ┣ 📂 types: Holds TypeScript type definitions for scripts.
┃ ┣ ┣ ┣ 📂 custom: Holds custom types - mostly used to fill gaps in ProbeJS dump.
┃ ┣ ┣ ┗ 📂 probe: The ProbeJS dump, which is manually fixed because of ProbeJS oversights.
┃ ┣ 📜 package-lock.json: Package lock file. **Do not edit this directly!**.
┃ ┣ 📜 package.json: Defines npm scripts and dependencies.
┃ ┣ 📜 tsconfig.json: Contains TypeScript configuration.
┃ ┗ 📜 vite.config.ts: Contains Vite configuration.
┣ 📂resourcepacks // Toggleable textures
┣ 📜README.md // The README for the GitHub repository
┗ 📜CONTRIBUTING.md // This file! Feel free to contribute your own documentation and fix any errors that you see.
```

### Setting up your game instance

This is a simplified version of the tutorial found on the [packwiz website](https://packwiz.infra.link/tutorials/installing/packwiz-installer/) - it's recommended you look at that tutorial if you get stuck.

-   To start, make sure you have [Prism Launcher](https://prismlauncher.org/) or a launcher similar to it that can execute **pre-launch commands** _(if you are unsure as to what this means, download Prism anyway)_, such as [MultiMC](https://multimc.org/).
-   Create an instance in the launcher with just the Minecraft version (1.18.2), and Fabric version (0.16.3). Increase memory allocation to about 6-8 GB for the instance if you haven't already set it as a global value in your launcher.
-   Download the packwiz installer jar from [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases), and put it into the `.minecraft/` folder in the instance, **not the `.minecraft/mods/` folder**. If there isn't already a `.minecraft/` folder, you can just create a folder with that name, or ideally you can start the instance once and close out of it once the folders have been generated.
-   Now, set up your launcher to execute the pre-launch command. If you're using Prism, go to Edit Instance ⇒ Settings ⇒ Custom commands, then check the Custom Commands checkbox, and paste the following command into the pre-launch command field:

```shell
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar http://localhost:8080/pack.toml
```

![image](https://user-images.githubusercontent.com/55003876/228606395-9cbdf5ac-c095-4f71-a639-3765dc906ad5.png)

### Setting up your code environment

That's the game installation sorted, now we'll address the developer environment.

-   Make your own GitHub fork of this repository, then clone it locally using Git, and open it with a code editor of your choice. We recommend a proper IDE (Integrated Developer Environment), such as [Visual Studio Code](https://code.visualstudio.com/), or the open source version, [VSCodium](https://vscodium.com/) - **basic text editors such as Notepad++ are discouraged**.
    > If you are unsure as to how to clone a repository, look up "how to clone a git repository locally" - as there are loads of tutorials online, and there are so many ways to do this (such as through the command line or through your IDE directly) that we won't cover it here.

There are multiple ways to go about the next step. We'll cover the following two:

-   Running the packwiz server within the locally cloned repository (all operating systems)
-   Running the packwiz server using your PATH (Windows)

> For both methods, you will have to download the latest packwiz binary from the [GitHub workflows](https://github.com/packwiz/packwiz/actions). Click on the most recent "Workflow run" (ignore the names of them, just click the most recent one) and scroll down to "Artifacts". Download the correct file for your operating system.

There are, of course, many ways to do this depending on your operating system. For a special case example, when using **Nix or NixOS**, this repository **automatically adds packwiz to your shell** when you open your shell inside the modpack's source code (as long as you allow [direnv](https://github.com/direnv/direnv) to be loaded). _If you don't know what any of that means, don't worry about it!_

#### Bundling scripts

The repository does not contain JavaScript files that are understandable by KubeJS.
These files are generated by Vite - the script bundler, that combines all client, server and startup scripts into one file for each type of script.

In order to generate the JavaScript scripts, perform these steps:
1. If you don't have NodeJS installed, install it first: https://nodejs.org/en/download
2. Open the terminal in the `kubejs` folder, or if you are using VS Code or its fork, open the terminal from the bottom panel and type:
```sh
cd kubejs
```
3. If that's the first time you generate scripts, run the following command:

```sh
npm install # Installs all dependencies
```
4. Then, you can build the scripts:
```sh
npm run build # Builds the project
```

Building may take a while due to a large amount of TypeScript typings used.
After a while, if no errors are detected by TypeScript compiler, these files should appear in the `kubejs` directory:

```
📂 client_scripts
┗ 📜 client.js - A bundle of all client scripts.
📂 server_scripts
┗ 📜 server.js - A bundle of all server scripts.
📂 startup_scripts
┗ 📜 startup.js - A bundle of all startup scripts. 
```

#### Running the packwiz server within your locally cloned repository

This is the easiest and most universal method to install, however other methods may be worth it for ease of use, or if you plan on using packwiz in other modpacks' repositories in the future.

-   Unzip the archive you downloaded and extract the packwiz file.
-   Navigate to the folder where your cloned repository is.
-   Move the packwiz file into that folder.

Simple as that! On macOS and Linux-based operating systems, you can execute the file by running `packwiz serve` in the terminal while targeting the cloned repository's directory. Do note that on Windows, PowerShell will block running the file. To bypass this, put `./packwiz.exe serve` in your terminal instead.

Now your Prism instance will automatically update when you start the game as long as the packwiz server is running (and you've saved your files). Note that this does not update the game as you edit the files in the repository, you have to restart the game every time you wish to update the files.

If you want, you could also write a batch script (here's an [example](/reload-example.bat)) that runs the packwiz jar file similarly to how it is run at the startup of the instance, that you could run to reload the modpack without restarting the game.

#### Running the packwiz server using your PATH (Windows only)

If you're tired of downloading the packwiz binary every time you start developing a new modpack, or you're tired of typing `./packwiz.exe serve` every time you start your terminal, you may wish to add the packwiz executable to your PATH variable. This allows you to run `packwiz serve` from any folder that contains the correct `pack.toml` and `index.toml` files for packwiz to reference, without needing another packwiz binary installed in the same folder.

This process is the same on Windows 10 and Windows 11.

-   Unzip the archive you downloaded and extract the packwiz executable to a safe permanent location, ideally outside the cloned repository, such as in your Documents folder.
-   Open the start menu (press the Windows key) and search for "View advanced system settings".
-   Click on "Environment Variables".
-   Under the "System variables" list, find "Path" and select it, then click "Edit".
-   In the dialog window that just opened, click "New" then add the full directory to the packwiz.exe file as a new item in the list.
-   Click "OK" on every window until the system settings have closed entirely.

You will now be able to execute `packwiz serve` from any directory on your computer. Bearing in mind, of course, that it will only work in a folder where packwiz has been initialized (the Create: Astral repository already has it initialized).

If you're interested in the other features of packwiz, take a look at their wiki: https://packwiz.infra.link/tutorials/creating/getting-started/

## KubeJS, Resources, and Datapack contributions

As of May 2025, Create: Astral's code structure has been entirely [moved around and reorganized](https://github.com/Laskyyy/Create-Astral/pull/526), so it may look a bit different if you've contributed code or textures before.

Here's the run-down:

-   The project now uses [Vite](https://vite.dev/) to generate bundles out of scripts written in TypeScript.
-   All **asset and resource files** can be found in [/kubejs/assets/](/kubejs/assets/)
-   All **data-driven recipe files** are now handled by KubeJS and can be found in [/kubejs/src/server/recipes](/kubejs/src/server/recipes)
    > There is an exception to the above, being the Hephaestus (tconstruct) modifiers, which can be found in [/kubejs/data/tconstruct/recipes/tools/modifiers/](/kubejs/data/tconstruct/recipes/tools/modifiers/)
-   All other **data-driven (datapack) .json files** (NOT RECIPE FILES) can be found in [/kubejs/data/](/kubejs/data/)
-   All **KubeJS startup scripts** are now organized to be more intuitively located in [/kubejs/src/startup/](/kubejs/src/startup/) - not much has changed otherwise

For everything else, the place they're stored hasn't changed and should be rather intuitive for both first-time and long-time contributors.

You can refer to the [KubeJS README](/kubejs/README.txt) for more information on what each folder in [/kubejs/](/kubejs/) does.

If you're new to datapacks, resources, KubeJS and TypeScript, then take a look at their respective wikis for more information on how to utilize them. Astral has been organized in such a way to aid in readability and accessibility, so you may be able to pick up some skills from just reading through code.

-   [KubeJS Wiki for 1.18.2](https://wiki.latvian.dev/books/kubejs-legacy)
-   [Minecraft Wiki article on Data Packs](https://minecraft.wiki/w/Data_pack)
-   [Minecraft Wiki article on Resource Packs](https://minecraft.wiki/w/Resource_pack)
-   [TypeScript documentation](https://www.typescriptlang.org/docs/)

### Housekeeping

In order to keep Astral tidy and to avoid it looking like it did before the May 2025 cleanup, please try to keep to the standards. What that looks like:

#### Recipe contributions

For recipe contributions, please organize them in [/kubejs/src/server/recipes/](/kubejs/src/server/recipes/) by their crafting type rather than collecting all your contributions in one place. This makes it much easier to find all the added recipes.

-   For example, if I have a recipe for the Industrial Sawmill from Tech Reborn, I will add it to the already-existing file - [/kubejs/src/server/recipes/techreborn/industrial_sawmill.js](/kubejs/src/server/recipes/techreborn/industrial_sawmill.js).
-   If I have a recipe for a crafting type that does not yet exist, I will make a new file using the following directory template:
    > /kubejs/src/server/recipes/{mod namespace}/{crafting type}.js

Please also **don't** make recipes in the [/kubejs/data/](/kubejs/data/) folder as it makes it more difficult to find if recipes are spread across both KubeJS and datapacks.

If you wish to replace an existing data-driven recipe, remove the recipe in [/kubejs/src/server/recipes/removals.js](/kubejs/src/server/recipes/removals.js) using its ID. [For example](/kubejs/src/server/recipes/removals.js#L439), If I want to replace the default recipe of `tconstruct:smeltery/melting/glass/block`, I will add a line in the array of the main helper function of the removals.js file that reads like this:

```js
{id: "tconstruct:smeltery/melting/glass/block"},
```

> Always check if a recipe has been removed before removing it again. You can search in most IDEs using `ctrl + F` or `cmd + F`. For more information on using the event.remove() recipe callback, here is the KubeJS wiki article on [recipe events](https://wiki.latvian.dev/books/kubejs-legacy/page/recipeeventjs).

> To find the ID of a recipe, copy its mod file from your **launcher's modpack instance** to another folder (such as your Documents), rename the `.jar` extension to `.zip`, and extract it. Within it will be a `/data/{mod name}/recipes` folder containing all the recipes. The ID of the recipe will be the namespace of the mod, followed by the part of the file directory that comes after `/data/{mod name}/recipes/`. For example, the recipe with ID `tconstruct:smeltery/melting/glass/block` will have its file located at `/data/tconstruct/recipes/smeltery/melting/glass/block.json`

Feel completely free to use helper functions to add recipes en-masse, as long as you make sure it's sensibly organized. For reference, most existing recipe scripts already have arrays that define recipes in this way to make an easy-to-read format.

#### How to create a new script

- Create a file with a `.ts` extension.
- Write your script in a function body, named roughly like the path to the script.
```ts
// Example: kubejs/src/server/recipes/ad_astra/cryo_fuel_conversion.ts
function adAstraCryoFuelConversionRecipes() {
    // script here
}
```
- Later on, import the function in the entrypoint file.
```ts
// Example: kubejs/src/server.ts
import { adAstraCryoFuelConversionRecipes } from "./recipes/ad_astra/cryo_fuel_conversion";

adAstraCryoFuelConversionRecipes();
```

#### Keeping the code readable and type-safe

- For items used in KubeJS functions, use types:
  - `Special.Item` - accepts only strings corresponding to items,
  - `Internal.ItemStackJS_` - accepts `Item`s and other strings corresponding to items.
  - `Helper.Items` - accepts everything that `Internal.ItemStackJS_` and also can accept tags (like `#c:ingots`), mods (like `@chipped`), and the wildcard `*`.
  - `Internal.IngredientJS_` - a huge type that encompasses most things that can be ingredients.

Please note that the syntax in form of `5x minecraft:apple` is not supported! Use `Item.of("minecraft:apple", 5)` instead.

- For fluids used in KubeJS functions, use types:
  - `Special.Fluid` - accepts only strings corresponding to fluids,
  - `{fluid: Special.Fluid, amount: number}` - accepts any object that conforms to this type.
  - `Internal.IngredientJS_` - a huge type that encompasses most things that can be ingredients.
  
- Use constants to create recipe lists. The list should contain objects that conform to a given interface.<br>
For short constants, it's preferable to use `as const` on that list together with `safisfies <interface>[]` to ensure that the list conforms to the interface.

```ts
// Example: kubejs/src/server/recipes/createastral/machines/stone_growth_chamber/copper.ts
interface StoneGrowthChamberRecipe {
  material: string,
  output: Special.Item,
  time: number
}

const stoneGrowthChamberRecipes = [
    // list here...
] as const satisfies StoneGrowthChamberRecipe[]

```

For longer lists, you can set the type of the constant directly.
```ts
// Example: kubejs/src/server/recipes/create/compacting.ts
interface CompactingRecipe {
  output: Internal.IngredientJS_;
  inputs: Internal.IngredientJS_;
  heat?: "heated" | "superheated";
}

const compactingRecipes: CompactingRecipe[] = [
    // list here...
] as const;
```

- If you can't figure out the correct type for the object, you can suppress the TypeScript error using a magic comment...
```ts
// @ts-expect-error Explanation here...
```
...or cast the type to `any`.
```ts
 let inputItems = recipe.json.get("ingredients").deepCopy() as any; // Setting this to any, since I have no idea what type this really is.
```
Please provide explanation on every usage of this.

#### Adding or modifying tags

Registering or modifying tags (such as `#minecraft:logs` or `#create:wrench_pickup`) is to be done via datapack and **not KubeJS**, even if you need to use helper functions. We understand this may be inconvenient, but it allows us to have a much more easily navigable tags library for reference purposes.

#### All other contributions of this category

Generally just try your best to be tidy and organized, the folders in place exist to aid with this purpose. If you can't find a place for your contributions, please make a place for it that feels appropriate :)

### Internationalization and localization support

If you are contributing something that involves [/kubejs/src/startup/](/kubejs/src/startup/), or you're making something that displays something in-game as readable text, then this section is applicable to you.

Internationalization (also known as i18n for short) is a system that uses **language keys** to allow for translation of the game to any language without requiring an entirely new modpack for each supported language. The term for providing support for a specific language using the already-established i18n foundation is called **localization**.

As you can imagine this is very important for accessibility for players around the world, so this repository requires that as much as possible is done to support the i18n effort.

#### Enabling internationalization in your contributions

Here's an [example](https://github.com/Laskyyy/Create-Astral/pull/389) of changing the added tooltip and some other text to a language key. For adding a new item/block/fluid, the naming of the key in the language file needs to follow these rules.

To name keys in the [lang file](/kubejs/assets/createastral/lang/en_us.json) correctly, you need to use the **prefix** (`item/block/fluid`) + the **namespace** of mod (such as `kubejs`,`create_astral`) + the **ID** of item/block/fluid. For values, it's the **displayed name** instead of translation keys. Here is an example:

```json
{
    "item.createastral.crushed_raw_desh": "Crushed Raw Desh",
    "block.kubejs.fragile_sheet_block": "Fragile Sheet Block",
    "fluid.kubejs.molten_calorite": "Calorite"
}
```

For other texts in TypeScript, you should use [text components](https://wiki.latvian.dev/books/kubejs-legacy/page/components-kubejs-and-you). Here is an [example](/kubejs/src/startup/tooltip/minecraft.ts#L65).

Here are the files where language keys are assigned a translated text value:

-   [Main lang file for most assets](/kubejs/assets/createastral/lang/en_us.json)
-   [Lang file for custom Create Ponder guides](/kubejs/assets/ponderjs_generated/lang/en_us.json)
-   [Lang file for custom menu texts](/config/fancymenu/custom_locals/astralmenu/en_us.local)

You MUST assign a text value for lang keys in the en_us local file before any other language. The en_us file is used as a fallback if a translation doesn't exist for a given language.

## Quest contributions

If you've found yourself in this section, it's likely that you're making a pull request to fix a typo, update an inconsistency, or add some quality-of-life (QoL) to the in-game FTB Quests questbook. In that case, thank you for making the modpack more accessible and friendly to players who might be newer to modded Minecraft <3

When editing the quests, you may notice something very strange about the quests:

### Language keys

Language keys, or lang keys, are a way of referring to a translation present in an en_us.json file within the modpack's resources. Refer to the [Internationalization and localization support](#internationalization-and-localization-support) section of this document for more information on what this means.

If you just want to edit the text, do it in this [file](/kubejs/assets/createastral/lang/en_us.json#L515) underneath the FTB Quests section. It's recommended that you have both the game and your IDE open side-by-side to make this process easier. Do not edit the text within the questbook directly.

> You can hit `ctrl + F` or `cmd + F` in your IDE to search for text!

If you're adding text, refer to the [Enabling internationalization in your contributions](#enabling-internationalization-in-your-contributions) section of this document.

## Translating

Hey there! Thanks for taking interest in translating this modpack and allowing more users from around the world to enjoy Astral. There are a few places that you will need to address to make a translation.

First, refer to the [Minecraft Wiki's article on Language](https://minecraft.wiki/w/Language) and find your language's Locale Code for Java Edition. It will look something like "en_gb" (British English), "fr_fr" (European French), "de_de" (German), and so on. By default, the "en_us" (United States English) locale is used as a fallback language if there is no translation available for the selected language.

Next, you'll need to go to the following folder locations:

-   [Main lang file for most assets](/kubejs/assets/createastral/lang/en_us.json)
-   [Lang file for custom Create Ponder guides](/kubejs/assets/ponderjs_generated/lang/en_us.json)
-   [Lang file for custom menu texts](/config/fancymenu/custom_locals/astralmenu/en_us.local)

In each of those, make a copy of the en_us file. **DO NOT EDIT THIS FILE TO TRANSLATE IT TO A DIFFERENT LANGUAGE!** Rename the copy you just made to the locale code for your language that you found earlier on the Minecraft Wiki. Now, you can translate all the texts in your copy into your language.

Once you're done, you can test it by running `packwiz serve` in your repository and loading your packwiz instance. If you don't know what that means, please read the whole of the [General overview](#general-overview) section of this document.

Change your in-game language to the language you just translated the text to. You should see that everything is now assigned to what you put in the lang files!
