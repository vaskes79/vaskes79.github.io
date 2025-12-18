import sharp from "sharp";
import fs from "fs";
import path from "path";

const rawImagesDir = path.join(process.cwd(), "public", "images-raw");
const optimizedImagesDir = path.join(process.cwd(), "public", "images");

// Создаем папку для оптимизированных изображений
if (!fs.existsSync(optimizedImagesDir)) {
  fs.mkdirSync(optimizedImagesDir, { recursive: true });
}

async function optimizeImage(inputPath: string, outputPath: string) {
  const ext = path.extname(inputPath).toLowerCase();

  try {
    if ([".jpg", ".jpeg", ".png", ".webp"].includes(ext)) {
      await sharp(inputPath)
        .webp({ quality: 80 }) // Конвертируем в WebP с качеством 80%
        .resize(1920, 1080, {
          fit: "inside",
          withoutEnlargement: true,
        }) // Максимальный размер
        .toFile(outputPath.replace(ext, ".webp"));

      console.log(
        `✓ Optimized: ${path.basename(inputPath)} → ${path.basename(
          outputPath
        )}.webp`
      );
    }

    // Также создаем оригинальный формат с оптимизацией
    await sharp(inputPath)
      .jpeg({ quality: 85, mozjpeg: true })
      .resize(1920, 1080, { fit: "inside", withoutEnlargement: true })
      .toFile(outputPath);

    console.log(
      `✓ Optimized: ${path.basename(inputPath)} → ${path.basename(outputPath)}`
    );
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeAllImages() {
  if (!fs.existsSync(rawImagesDir)) {
    console.log("No images-raw directory found, skipping optimization");
    return;
  }

  const files = fs.readdirSync(rawImagesDir);
  const imageFiles = files.filter((file) =>
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to optimize...`);

  for (const file of imageFiles) {
    const inputPath = path.join(rawImagesDir, file);
    const outputPath = path.join(optimizedImagesDir, file);
    await optimizeImage(inputPath, outputPath);
  }

  console.log("✓ Image optimization complete!");
}

// Запуск при вызове скрипта
if (require.main === module) {
  optimizeAllImages().catch(console.error);
}

export { optimizeAllImages };

