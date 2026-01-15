This document is best read in a text editor that supports Markdown, however should still be legible in more basic text editors like Notepad.

Alternatively, you can view this document with proper Markdown support, without the need for a fancy text editor, on GitHub: https://github.com/Laskyyy/Create-Astral/blob/Astral-Experimental/serverpack/README.md

### FOREWORD

Feel free to skip over this section, it isn't necessary for the server pack setup.

Create: Astral provides two official sources to download the server pack from: GitHub Releases and CurseForge. It is recommended that you download this server pack from the GitHub Releases, as CurseForge applies limitations on what we can include in a server pack, making the setup slightly more complicated.

There is also an unofficial distribution¹ of Create: Astral for container engines (e.g. Docker or Podman) at https://github.com/maxi0604/create-astral-container, which sets up the entire server in a container. You will need knowledge of Docker or Podman to set this up though.

The CurseForge server pack _is not functionally broken²_, there's just some more setup involved to it.

Get the latest GitHub Release here:

- https://github.com/Laskyyy/Create-Astral/releases/latest
- At the bottom of the changelogs, you will find "Assets"; **download the file ending in "-server.zip"**.
- The file ending in "-curseforge.zip" is the client pack, and is almost identical to the pack you will find on CurseForge.

## SERVER SETUP

- Extract the server into a folder on your computer. Ensure you **don't** extract it into a cloud directory, such as OneDrive.

> CURSEFORGE ONLY: These steps **do not** need to be followed **if you got the server pack from GitHub**. If you downloaded the server pack from CurseForge, you need to do the following:
>
> - First, make sure you have installed Create: Astral on your client.
> - Open the Astral instance's folder and navigate to `<instance>/.minecraft/mods` and find `vinery-1.1.4.jar`.
> - Copy Vinery over from your client mods folder, to the server's mods folder.

- Start the server using the script of your choice:

  - If hosting from a Windows machine, run `startmc.bat` to start the server.
  - If hosting from a Linux or macOS machine, open the console in the server directory and execute `sh startmc.sh`.

- The server will crash the first time and a file labelled `eula.txt` will appear. Open it and set the value inside to `true`.
- Re-run the server and it should now start.

---

Ensure you have properly port-forwarded your IP! This varies wildly based on your internet provider, server host, or country so find an online resource to help with this.

To change the allocated RAM (default 4 GB):

- If you use the .bat file, right click and open it in Notepad, then change the `RAM` value to your preferred amount.
- If you use the .sh file, open it in your text editor of choice, and change the `-Xms` and `-Xmx` values to your preferred amount.

Don't forget to op yourself through console to perform admin commands in-game. While the server is running, type `op <YOUR USERNAME>` in the console.

See below for server requirements, recommendations, and troubleshooting.

## SERVER REQUIREMENTS

- At least 4 GB of RAM allocated to the server. Do not allocate all RAM on the machine to Minecraft, leave at least 2 GB for overhead processes if no other applications are running on the same computer. 4 GB is generally enough for 1 to 4 players, however if you have it, more RAM is beneficial for exploration and large bases.
- Java versions 17 or 21 are required to run the server. Any other version will result in crashes. Check your Java version by running `java --version` in your terminal.
  - If you are on Windows or macOS, you can download Java version 21 from [here](https://adoptium.net/temurin/releases/?version=21&os=any&arch=any), just select your platform, choose the JRE version, and download the `.msi` for Windows or the `.pkg` for macOS.
  - If you are on Linux, you can do the above and download the `.tar.gz`, or you can install Java using your package manager, which may be easier if you are running a headless (console-only) server. This varies depending on your distribution (e.g. Ubuntu, Fedora, Arch), so it's best to look up how to install Java 21 for the distribution your server is running on.

## SERVER RECOMMENDATIONS

These recommendations do not _need_ to be followed, but can help some server hosts choose the correct hardware. These instructions generally apply to any Minecraft modpack, not just Create: Astral.

- It is not recommended to run the server on the same machine as a client instance. If you have any other computer available to you, it is preferable to use that instead.
- Minecraft favours high single-core/thread CPU performance.
  - For best results, any AMD Ryzen 5 3000 series or Intel Core 9th Gen i5 processor or better would be more than enough to run a server with 4, maybe up to 10 players (this has not been benchmarked and is a rough estimate).
  - Weaker CPUs are still capable, however may struggle with processing multiple large bases or loading chunks at a decent pace.
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
> - This is not a problem, your issue lies elsewhere. This is only a warning as Yttr does not have full REI compatibility.

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
> - A common issue with Exaroton-hosted servers. PipeBlocker is technically no longer required in the modpack³, so feel free to remove it from the server's mods.

---

> PROBLEM: There are missing icons in my Quest Book.
>
> SOLUTION:
>
> - Ensure you followed the CurseForge-specific step in the [SERVER SETUP](#server-setup) section of this document.

---

> PROBLEM: Astral Vinery requires Vinery.
>
> SOLUTION:
>
> - Ensure you followed the CurseForge-specific step in the [SERVER SETUP](#server-setup) section of this document.

### FOOTNOTES

- ¹ Unofficial distributions of Create: Astral:
  - Maxi0604 has been given explicit permission to redistribute Create: Astral by the Create: Astral Development Team.
  - Create: Astral is All Rights Reserved and redistribution of the modpack is forbidden unless you have explicit permission from the Create: Astral Development Team.
- ² Difference between the GitHub and the CurseForge serverpacks:
  - CurseForge doesn't allow mod authors to delete their files. They can however archive them, which will hide them from the website.
    A modpack author that knows the file IDs of the archived files can still use them in the client pack, as archived mods are still
    available via the CurseForge API. However, CurseForge's policies dictate that a server pack can only contain mods a user could
    download from their website manually. This means that archived mods cannot be included in server packs, as they are by definition
    hidden from the website.
  - When this modpack was initally developed, Vinery's 1.18.2 version was not archived on CurseForge. They have been
    in the modpack from the very beginning and are a part of it. We cannot just remove them to make the serverpack
    installation more bearable. We are sorry about this, but can't do anything.
  - The GitHub serverpack includes Vinery's 1.18.2 version, meaning that the additional step of copying it from the client's pack is not required.
- ³ PipeBlocker:
  - PipeBlocker was originally added to combat the [Bleeding Pipe exploit](https://blog.mmpa.info/posts/bleeding-pipe/) from 2023. Since then, all of our mods have been patched to combat the exploit themselves, so it is not technically required anymore.
