import StyleDictionary from "style-dictionary";
import fs from "node:fs";
import path from "node:path";

const cssDir = path.resolve("dist/css");
const jsonDir = path.resolve("dist/json");
const tsDir = path.resolve("dist/ts");

function flattenTokens(tokens, currentPath = [], result = {}) {
  for (const [key, value] of Object.entries(tokens)) {
    const nextPath = [...currentPath, key];

    if (
      value === null ||
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      result[nextPath.join(".")] = value;
    } else if (value && typeof value === "object") {
      flattenTokens(value, nextPath, result);
    }
  }

  return result;
}

async function buildRoot() {
  const sd = new StyleDictionary({
    source: [
      "src/tokens/base/**/*.json",
      "src/tokens/semantic/**/*.json"
    ],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: "dist/css/",
        files: [
          {
            destination: "root.css",
            format: "css/variables",
            options: {
              selector: ":root"
            }
          }
        ]
      },
      json: {
        transformGroup: "js",
        buildPath: "dist/json/",
        files: [
          {
            destination: "tokens.json",
            format: "json/nested"
          }
        ]
      }
    }
  });

  await sd.buildAllPlatforms();
}

async function buildTheme(themeFile, outputFile, selector) {
  const sd = new StyleDictionary({
    include: [
      "src/tokens/base/**/*.json",
      "src/tokens/semantic/**/*.json"
    ],
    source: [themeFile],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: "dist/css/",
        files: [
          {
            destination: outputFile,
            format: "css/variables",
            options: {
              selector
            }
          }
        ]
      }
    }
  });

  await sd.buildAllPlatforms();
}

function buildTs() {
  const jsonInputPath = path.resolve(jsonDir, "tokens.json");
  const tsOutputPath = path.resolve(tsDir, "tokens.ts");

  const raw = fs.readFileSync(jsonInputPath, "utf8");
  const json = JSON.parse(raw);
  const flattened = flattenTokens(json);

  fs.mkdirSync(tsDir, { recursive: true });
  fs.writeFileSync(
    tsOutputPath,
    `export const tokens = ${JSON.stringify(flattened, null, 2)} as const;\n`,
    "utf8"
  );

  console.log(`Generated ${tsOutputPath}`);
}

function buildCssBundle() {
  const outputPath = path.resolve(cssDir, "variables.css");
  const parts = [
    "root.css",
    "theme-light.css",
    "theme-dark.css",
    "theme-hc-light.css",
    "theme-hc-dark.css"
  ];

  const content = parts
    .filter((fileName) => fs.existsSync(path.join(cssDir, fileName)))
    .map((fileName) => fs.readFileSync(path.join(cssDir, fileName), "utf8").trim())
    .join("\n\n");

  fs.writeFileSync(outputPath, `${content}\n`, "utf8");
  console.log(`Generated ${outputPath}`);
}

await buildRoot();
await buildTheme("src/tokens/themes/light.json", "theme-light.css", '[data-theme="light"]');
await buildTheme("src/tokens/themes/dark.json", "theme-dark.css", '[data-theme="dark"]');
await buildTheme("src/tokens/themes/hc-light.json", "theme-hc-light.css", '[data-theme="hc-light"]');
await buildTheme("src/tokens/themes/hc-dark.json", "theme-hc-dark.css", '[data-theme="hc-dark"]');

buildTs();
buildCssBundle();