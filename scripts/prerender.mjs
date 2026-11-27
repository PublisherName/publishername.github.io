import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

const root = process.cwd();
const ssrOutDir = resolve(root, ".prerender");
const indexPath = resolve(root, "dist/index.html");
const marker = '<div id="root"></div>';

await rm(ssrOutDir, { recursive: true, force: true });
await mkdir(ssrOutDir, { recursive: true });

await build({
  root,
  configFile: resolve(root, "vite.config.js"),
  logLevel: "warn",
  build: {
    ssr: resolve(root, "src/entry-server.tsx"),
    outDir: ssrOutDir,
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: "entry-server.mjs",
      },
    },
  },
});

const { render } = await import(pathToFileURL(resolve(ssrOutDir, "entry-server.mjs")).href);
const appHtml = render();
const html = await readFile(indexPath, "utf8");

if (!html.includes(marker)) {
  throw new Error(`Prerender marker not found in ${indexPath}`);
}

await writeFile(indexPath, html.replace(marker, `<div id="root">${appHtml}</div>`));
await rm(ssrOutDir, { recursive: true, force: true });
