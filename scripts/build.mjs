import { mkdir, copyFile, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url);
const dist = new URL("dist/", root);

await mkdir(dist, { recursive: true });
await mkdir(new URL("src/", dist), { recursive: true });

const files = ["index.html", "src/main.js", "src/styles.css"];

for (const file of files) {
  await copyFile(new URL(file, root), new URL(file, dist));
}

let index = await readFile(new URL("index.html", dist), "utf8");
index = index.replace('href="/src/styles.css"', 'href="./src/styles.css"');
index = index.replace('src="/src/main.js"', 'src="./src/main.js"');
await writeFile(new URL("index.html", dist), index);

console.log(`Built static app at ${join(root.pathname, "dist")}`);
