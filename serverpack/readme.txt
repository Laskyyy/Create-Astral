After you've extracted the serverpack, follow these steps to fully set up the server:

1. Download download the fabric server .jar version 0.16.3 at https://meta.fabricmc.net/v2/versions/loader/1.18.2/0.16.3/0.11.1/server/jar
2. Drag into main folder of server (with mods folder, config folder etc.), rename to exactly "server.jar"
   (ensure it isn't named server.jar.jar when file extensions are hidden)
3. Download the client pack through a modded Minecraft launcher of your choice (i.e. PrismLauncher or the CurseForge app)
   and copy the .jar files for Vinery (**NOT** AstralVinery) and Hephaestus from its mod folder to the server's mod folder
   (See the note at the bottom of this README for more information)
4a. If hosting from a windows machine run the ".bat" script and the server should begin initialising.
4b. If hosting from a linux machine run the ".sh" script (e.g. command "sh startmc.sh" in console).
5. Once server runs, an "eula.txt" will appear. Open it and set it to 'true'.
6. Re-run the server and it should now boot.

Ensure you have properly port-forwarded your ip! This varies wildly based on your internet provider, server host or country so find an online resource to help with this.
To change the allocated RAM, open your relevant startup script in notepad and change the -XMX and -XMS flags from 4G or 6G to whatever amount of gigabytes of ram you prefer.
Don't forget to op yourself through console to perform admin commands ingame 'op YOURNAME'.

If the included scripts don't launch, try booting with your own, especially if using a server host who usually like to use their own start scripts and fabric .jars

If server instantly crashes when booting = Java version mismatch (Use Java 17)

If server does a lot of setup (30 seconds+) before crashing = Mod issue, if you added any extra mods try removing them first and see if it works.

If fluids like water don't behave like fluids when you try swimming in them, check that you followed step 3.

---

Note on CurseForge, Vinery and Hephaestus:

CurseForge doesn't allow mod authors to delete their files. They can however archive them, which will hide them from the website.
A modpack author that knows the file IDs of the archived files can still use them in the client pack, as archived mods are still
available via the CurseForge API. However, CurseForge's policies dictate that a server pack can only contain mods a user could
download from their website manually. This means that archived mods cannot be included in server packs, as they are by definition
hidden from the website.

When this modpack was initally developed, neither Vinery's nor Hephaestus' 1.18.2 versions were archived on CurseForge. They have been
in the modpack from the very beginning and are a part of it. Especially Hephaestus. We cannot just remove them to make the serverpack
installation more bearable. We are sorry about this, but can't do anything.

If you want a more hassle free setup experience, there's a container image available that does the previously mentioned steps
automatically: https://github.com/maxi0604/create-astral-container
