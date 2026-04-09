This is a more extensive version of the 'quickstart.txt' document also included in this server pack. It includes some more information for those that wish to

This document is best read in a text editor that supports Markdown, however should still be legible in more basic text editors like Notepad.

Alternatively, you can view this document with proper Markdown support, without the need for a fancy text editor, on GitHub: https://github.com/Laskyyy/Create-Astral/blob/Astral-Experimental/server pack/README.md

### FOREWORD

Feel free to skip over this section, it isn't necessary for the server pack setup.

Create: Astral provides one official source to download the server pack from: CurseForge. It is possible to compile a full server pack yourself from GitHub, as we use this for development purposes, however we do not provide prebuilt server packs alongside our client packs on GitHub Releases, starting from version `2.1.5`.

The CurseForge server pack _is not functionally broken²_, there's just some more unexpected setup involved to it due to limitations imposed by CurseForge.

There is also one authorised unofficial distribution¹ of Create: Astral for container engines (e.g. Docker or Podman) at https://github.com/maxi0604/create-astral-container, which sets up the entire server in a container. You will need knowledge of Docker or Podman to set this up though.

Note that unofficial distributions of Create: Astral are not supported by the Create: Astral Development team, and we kindly request that you direct issues to the maintainers of those unofficial projects.

## QUICKSTART

- Extract the server into a folder on your computer.
  - Ensure you DO NOT extract it into a cloud directory, such as OneDrive.
  - Note that Windows 11 computers are sneaky with this, and automatically sync your default Documents folder with OneDrive.
  - Servers running out of cloud 'backup' services like this are prone to issues!

> **CURSEFORGE EXTRA SETUP**
>
> If you downloaded the server pack from CurseForge, you need to do the following:
>
> - First, make sure you have installed Create: Astral on your client.
> - Open the Astral instance's folder and navigate to `<instance>/.minecraft/mods` and find `vinery-1.1.4.jar`.
> - Copy Vinery over from your client mods folder, to the server's mods folder.

- Start the server using the script of your choice:
  - If hosting from a Windows machine, run `startmc.bat` by double-clicking on it to start the server.
  - If hosting from a Linux or macOS machine, open the console in the server directory and run the command `sh startmc.sh`.

- The server will crash the first time and a file labelled `eula.txt` will appear. Open it and set the value inside to `true`.
- Re-run the server and it should now start.

---

Ensure you have properly port-forwarded your IP! This varies wildly based on your internet provider, server host, or country so find an online resource to help with this.

To change the allocated RAM (default 4 GB (bat file) or 6 GB(sh file)):

- If you use the .bat file, right click and open it in Notepad, then change the `RAM` value on line 4 to your preferred amount.
- If you use the .sh file, open it in your text editor of choice, and change the `-Xms` and `-Xmx` values on line 5 to your preferred amount.

Don't forget to op yourself through console to perform admin commands in-game. While the server is running, type `op <YOUR USERNAME>` in the console.

See below for server requirements, recommendations, and troubleshooting.

## SERVER REQUIREMENTS

These requirements are the _minimum required_ guidelines for running a Create: Astral server.

- At least 4 GB of RAM allocated to the server. Do not allocate all RAM on the machine to Minecraft, leave at least 2 GB for overhead processes if no other applications are running on the same computer. 4 GB is generally enough for 1 to 4 players, however if you have it, more RAM is beneficial for smooth exploration and loading large bases effectively.
- Java versions 17 or 21 are required to run the server. Any other version will result in crashes. Check your Java version by running `java --version` in your terminal.
  - If you are on Linux, you can download Java from [Eclipse Temurin](https://adoptium.net/temurin/releases/?version=21&os=any&arch=any), select Linux, and download the `.tar.gz`. Alternatively, you can install Java using your package manager, which may be easier if you are running a headless (console-only) server. This varies depending on your distribution (e.g. Ubuntu, Fedora, Arch), so it's best to look up how to install Java 21 for the distribution your server is running on.
    > You may want to consider containerised approaches to running a server to prevent Java version conflicts. Useful softwares for this are [Pterodactyl](https://pterodactyl.io) and [Pelican](https://pelican.dev) server managers, which are free, however require a degree of technical knowledge to run successfully.
  - If you are on Windows or macOS, you can download Java version 21 from [Eclipse Temurin](https://adoptium.net/temurin/releases/?version=21&os=any&arch=any), just select your platform, choose the JRE version, and download the `.msi` for Windows or the `.pkg` for macOS.

## SERVER RECOMMENDATIONS

These recommendations do not _need_ to be followed, but can help some server hosts in choosing the correct hardware. These instructions generally apply to any Minecraft modpack, not just Create: Astral.

- It is not recommended to run the server on the same machine as a client instance. If you have any other computer available to you, it is preferable to use that instead.
- Minecraft favours high single-core/thread CPU performance.
  - For best results, any AMD Ryzen 5 3000 series or Intel Core 9th Gen i5 processor or better would be more than enough to run a server with 4, maybe up to 10 players (this has not been benchmarked and is a rough estimate).
  - Weaker/older CPUs are still capable, however may struggle with processing multiple large bases or loading chunks at a decent pace.
  - Minecraft should run on any CPU architecture that supports the Java Runtime Environment, such as ARM-based CPUs (like those found in modern Apple computers), not just x86. This guide will not go into any detail about less-mainstream CPUs, however Astral's official servers run on ARM processors, so we can confirm that they should work.

## TROUBLESHOOTING

If none of these solutions work for you, please join the Discord server and post your issue in the #help channel alongside your server's `latest.log` file (find this in `<server>/logs/latest.log`): https://discord.gg/StW3Q5K8dJ

---

> PROBLEM: The included startup scripts on my server host don't launch the server.
>
> SOLUTION:
>
> - Try booting with your own startup script. This issue usually happens when a server host usually likes to use their own start scripts and fabric `.jar`s.

---

> PROBLEM: Yttr and Roughly Enough Items aren't compatible.
>
> SOLUTION:
>
> - This is not a problem, your issue lies elsewhere. This is only a warning, as Yttr does not have full REI compatibility. Note that we are gradually adding our own Yttr/REI compatibility.

---

> PROBLEM: The server instantly crashes when booting.
>
> SOLUTION:
>
> - Check your Java version with `java --version`. If it doesn't read 17 or 21, refer back to the [SERVER REQUIREMENTS](#server-requirements) section of this document.

---

> PROBLEM: The server does a lot of setup (30+ seconds) before crashing.
>
> SOLUTION:
>
> - Possibly an issue with mods. If you added any extra mods, remove them and try again.

---

> PROBLEM: PipeBlocker crashes on startup.
>
> SOLUTION:
>
> - A common issue with servers hosted by Exaroton. PipeBlocker is technically no longer required in the modpack³, so feel free to remove it from the server's mods.

---

> PROBLEM: There are missing icons in my Quest Book.
>
> SOLUTION:
>
> - Ensure you followed the CurseForge-specific step in the [QUICKSTART](#quickstart) section of this document.

---

> PROBLEM: Astral Vinery requires Vinery.
>
> SOLUTION:
>
> - Ensure you followed the CurseForge-specific step in the [QUICKSTART](#quickstart) section of this document.

### FOOTNOTES

- ¹ Unofficial distributions of Create: Astral:
  - Maxi0604 has been given explicit permission to redistribute Create: Astral by the Create: Astral Development Team.
  - Create: Astral is All Rights Reserved and redistribution of the modpack is forbidden unless you have explicit permission from the Create: Astral Development Team.
- ² Difference between the GitHub and the CurseForge server packs:
  - CurseForge doesn't allow mod authors to delete their files. They can however archive them, which will hide them from the website.
    A modpack author that knows the file IDs of the archived files can still use them in the client pack, as archived mods are still
    available via the CurseForge API. However, CurseForge's policies dictate that a server pack can only contain mods a user could
    download from their website manually. This means that archived mods cannot be included in server packs, as they are by definition
    hidden from the website.
  - When this modpack was initially developed, Vinery's 1.18.2 version was not archived on CurseForge. It has been
    in the modpack from the very beginning, and is a core part of it. We cannot just remove it to make the server pack
    installation more bearable. We are sorry about this, but can't do anything.
- ³ PipeBlocker:
  - PipeBlocker was originally added to combat the [Bleeding Pipe exploit](https://blog.mmpa.info/posts/bleeding-pipe/) from 2023. Since then, all of our mods have been patched to combat the exploit themselves, so it is not technically required anymore.
  - Furthermore, if you are using Exaroton, they have their own set of mods which they force into every server, including their own version of PipeBlocker. For this reason, we can't provide extensive support for Exaroton servers, and we kindly ask that you direct issues you have with Exaroton servers towards Exaroton support.
