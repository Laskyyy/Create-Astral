Find more info on the website: https://kubejs.com/

This project uses [Vite](https://vite.dev/) to generate bundles out of scripts written in TypeScript.

# Directory information:

```
📦 kubejs
┣ 📂 assets: Global assets - acts like a global resource pack.
┣ 📂 data: Global data - acts like a global datapack.
┣ 📂 config: Stores KubeJS configuration. KubeJS scripts may access this directory.
┃ ┣ 📜 client.properties
┃ ┗ 📜 common.properties - allows to disable the KubeJS class filter in order to access any Java class for reflection.
┣ 📂 src: Hosts script source code which is then bundled by Vite.
┣ ┣ 📂 client: Holds all client scripts, like REI events, ponders, etc. Gets bundled into `client_scripts/client.js`
┣ ┣ ┣ 📂 scripts: Holds client modules.
┣ ┣ ┗ 📜 client.ts: Client script entrypoint - calls other client modules.
┣ ┣ 📂 server: Holds all server scripts, like recipes, block loot, etc. Gets bundled into `server_scripts/server.js`
┣ ┣ ┣ 📂 scripts: Holds server modules.
┣ ┣ ┗ 📜 server.ts: Server script entrypoint - calls other server modules.
┣ ┣ 📂 startup: Holds all startup scripts, that add items, fluids, etc. Gets bundled into `startup/startup.js`
┣ ┣ ┣ 📂 scripts: Holds startup modules.
┣ ┣ ┗ 📜 startup.ts: Startup script entrypoint - calls other startup modules.
┣ ┣ 📂 types: Holds TypeScript type definitions for scripts.
┣ ┣ ┣ 📂 custom: Holds custom types - mostly used to fill gaps in ProbeJS dump.
┣ ┣ ┗ 📂 probe: The ProbeJS dump, which is manually fixed because of ProbeJS oversights.
┣ 📜 README.md: The README for the kubejs folder.
┣ 📜 package-lock.json: Package lock file. **Do not edit this directly!**.
┣ 📜 package.json: Defines npm scripts and dependencies.
┣ 📜 tsconfig.json: Contains TypeScript configuration.
┗ 📜 vite.config.ts: Contains Vite configuration.
```

# Building

To build the project, run the commands below.
Make sure you are in the `kubejs` folder!

```sh
npm install # Installs all dependencies
npm run build # Builds the project
```

Building may take a while due to a large amount of TypeScript typings used.
After a while, if no errors are detected by TypeScript compliler, these files should appear in the `kubejs` directory:

```
  📂 client_scripts
  ┗ 📜 client.js - A bundle of all client scripts.
  📂 server_scripts
  ┗ 📜 server.js - A bundle of all server scripts.
  📂 startup_scripts
  ┗ 📜 startup.js - A bundle of all startup scripts. 
```

