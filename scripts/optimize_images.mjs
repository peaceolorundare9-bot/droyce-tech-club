import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dir = '/home/z/my-project/public/images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

for (const file of files) {
  const inputPath = path.join(dir, file);
  const tempPath = path.join(dir, `opt_${file}`);
  const inputSize = fs.statSync(inputPath).size;
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  // Resize large images and compress
  await image
    .resize({
      width: Math.min(metadata.width || 1600, 1600),
      withoutEnlargement: true
    })
    .jpeg({ quality: 80, progressive: true, mozjpeg: true })
    .toFile(tempPath);
  
  const outputSize = fs.statSync(tempPath).size;
  
  if (outputSize < inputSize) {
    fs.renameSync(tempPath, inputPath);
    console.log(`${file}: ${metadata.width}x${metadata.height} ${(inputSize/1024).toFixed(0)}KB -> ${(outputSize/1024).toFixed(0)}KB`);
  } else {
    fs.unlinkSync(tempPath);
    console.log(`${file}: kept original ${(inputSize/1024).toFixed(0)}KB (${metadata.width}x${metadata.height})`);
  }
}
