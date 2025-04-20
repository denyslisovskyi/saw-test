import imagemin from "imagemin";
import webp from "imagemin-webp";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const targetFolder = "src/assets/images";

async function compressImages() {
  const files = await imagemin([`${targetFolder}/*.{jpg,jpeg,png}`], {
    destination: targetFolder,
    plugins: [
      webp({
        quality: 75,
      }),
    ],
  });

  console.log(chalk.green("✔ Images compressed"));

  files.forEach((file) => {
    const originalExt = path.extname(file.sourcePath);
    const originalPath = file.sourcePath;
    const webpPath =
      path.join(
        path.dirname(originalPath),
        path.basename(originalPath, originalExt),
      ) + ".webp";

    if (fs.existsSync(webpPath)) {
      fs.unlinkSync(originalPath);
      console.log(chalk.gray(`Deleted: ${originalPath}`));
    }
  });
}

compressImages();
