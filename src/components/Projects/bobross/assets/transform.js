import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Necessary for path resolution in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transformYoutubeUrl = (url) => {
  if (url && url.includes('embed/')) {
    return url.replace('embed/', 'watch?v=');
  }
  return url;
};

// Use path.join to ensure the script finds the file in the same directory
const inputPath = join(__dirname, 'bob-ross.json');
const outputPath = join(__dirname, 'bob-ross-transformed.json');

try {
  const rawData = fs.readFileSync(inputPath, 'utf8');
  const data = JSON.parse(rawData);

  const transformedPaintings = data.paintings.map((painting) => ({
    ...painting,
    youtube_src: transformYoutubeUrl(painting.youtube_src)
  }));

  const updatedData = {
    ...data,
    paintings: transformedPaintings
  };

  fs.writeFileSync(outputPath, JSON.stringify(updatedData, null, 2), 'utf8');
  console.log('Success! Transformed data saved to bob-ross-transformed.json');
} catch (error) {
  console.error('Error processing file:', error.message);
}