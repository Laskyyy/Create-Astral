import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, UserConfig} from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

function generateConfig(inputFile: string, outputDir: string): UserConfig {
  let config: UserConfig = {
    build: {
      outDir: outputDir,
      minify: false,
      rollupOptions: {
        input: inputFile,
        output: {
          entryFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`
        }
      },
    },
  };
  if (outputDir == "server_scripts") {
    config.resolve = {
      alias: {
        "constants": "src/server/constants.ts",
        "fluid-constants": "src/server/fluid-constants.ts"
      }
    }
  }
  return config
}

export default defineConfig(({ mode }) => {
  switch (mode) {
    case "client":
      return generateConfig("src/client/client.ts", "client_scripts");
    case "server":
      return generateConfig("src/server/server.ts", "server_scripts");
    case "startup":
      return generateConfig("src/startup/startup.ts", "startup_scripts");
    default:
      return {};
  }
});
