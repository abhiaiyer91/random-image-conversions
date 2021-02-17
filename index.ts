import * as glob from "glob";
import * as sharp from "sharp";

import * as path from "path";

async function main() {
  // Read files

  const files = glob.sync("./webp/**/*.webp");

  files.forEach((pth) => {
    const filePath = pth.split(path.sep);

    const outputPath = `./jpg/${
      filePath[2]
        ? `${filePath[2].replace(`webp`, `jpg`)}${filePath[3] ? `/` : ``}`
        : ``
    }${filePath[3] ? `${filePath[3].replace(`webp`, `jpg`)}` : ``}`;

    sharp(pth).toFile(outputPath);
  });
}

main().catch((e) => console.error(e));
