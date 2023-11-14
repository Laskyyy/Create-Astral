[![Mod Loader](https://img.shields.io/badge/Mod%20Loader-Fabric-blue?style=for-the-badge "Fabric")](https://fabricmc.net/use/installer/)
[![CurseForge Page](https://img.shields.io/badge/Curseforge-Page-orange?style=for-the-badge&logo=curseforge "Curseforge")](https://www.curseforge.com/minecraft/modpacks/create-astral)
[![](https://dcbadge.vercel.app/api/server/mNeHyuZdqm)](https://discord.gg/mNeHyuZdqm)

# Create-Astral

Dev GitHub repository for the Create: Astral modpack

Suggestions and Bugs should go in [Issues](https://github.com/Laskyyy/Create-Astral/issues), be as detailed as possible, so things can be easy to add or fix!

Does not include mods, or most configs, only pack specific files which are used when compiling the pack for CurseForge.

## Contributing

This repository uses [packwiz](https://github.com/packwiz/packwiz), which allows a lightweight repository such as this to be built into a full modpack by downloading mods from Modrinth or CurseForge.

The following instructions are a simplified version of the [packwiz installer tutorial](https://packwiz.infra.link/tutorials/installing/packwiz-installer/), so if you run into any issues, you should check there.
First, clone this repository to wherever you want and use your code editor of choice. We recommend you use Visual Studio Code or the open source version VSCodium.

To start, make sure you have [MultiMC](https://multimc.org/) or a launcher similar to it such as [Prism](https://prismlauncher.org/)

Create an instance in the launcher with just the Minecraft version (1.18.2), and fabric version (0.14.24). Increase memory allocation to about 6-8G for the instance if you haven't already set it as a global value in your Launcher.

Download the packwiz installer jar from [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases), and put it into the `.minecraft/` folder in the instance. If it isn't there already, you can just create a folder with that name or start the instance once.

Go to Edit Instance ⇒ Settings ⇒ Custom commands, then check the Custom Commands box and paste the following command into the pre-launch command field:

```shell
"$INST_JAVA" -jar packwiz-installer-bootstrap.jar http://localhost:8080/pack.toml
```

![image](https://user-images.githubusercontent.com/55003876/228606395-9cbdf5ac-c095-4f71-a639-3765dc906ad5.png)

Now that all of that is ready, navigate to the repository in your terminal, and run `./packwiz.exe serve`

This will host a copy of pack.toml that is updated every time it is queried, meaning that every time you start the Minecraft instance, it will be able to get the most updated version of all your changes, and update the instance to match, meaning that all you need to do to reload all of your changes is to restart your Minecraft instance.

If you want, you could also write a batch script that runs the jar file similarly to how it is run at the startup of the instance, that you could run to reload the modpack without restarting the game.

## Files you may want to edit

```md
📦
┣ 📂config //Various configs for all sorts of mods
┃ ┣ 📂ftbquests //Configs for quests
┣ 📂global_packs // Included required datapacks
┣ 📂kubejs
┃ ┣ 📂assets // No longer used
┃ ┣ 📂client_scripts // Scripts that load for the client
┃ ┣ 📂server_scripts // All recipe changes
┃ ┣ 📂startup_scripts // Things that run on startup
┣ 📂mods // Mods
┣ 📂resourcepacks // Toggleable Textures
┣ 📂resources // All custom textures and translations
┃ ┣ 📂createastral // Primary folder for original Astral textures
┗ 📜README.md // This file! Feel free to contribute
and fix any errors that you see.
```
