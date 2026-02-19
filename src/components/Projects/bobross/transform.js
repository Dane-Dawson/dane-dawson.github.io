import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Standard way to get __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define file paths
const inputPath = path.join(__dirname, 'bob-ross.json');
const outputPath = path.join(__dirname, 'bob-ross-cleaned.json');

/**
 * Transforms a string formatted like "['val1', 'val2']" into a real array.
 */
const stringToArray = (str) => {
  if (!str || typeof str !== 'string') return [];
  
  try {
    // 1. Replace single quotes with double quotes for JSON parsing
    // 2. Remove escaped carriage returns and newlines (\r\n)
    const jsonFriendly = str
      .replace(/'/g, '"')
      .replace(/\\r\\n/g, '')
      .trim();
      
    return JSON.parse(jsonFriendly);
  } catch (e) {
    console.error(`Failed to parse string: ${str}`);
    return [];
  }
};

try {
  // Load the original data
  const rawData = fs.readFileSync(inputPath, 'utf8');
  const data = JSON.parse(rawData);

  // Map through the paintings and transform the attributes
  const cleanedPaintings = data.paintings.map((painting) => ({
    ...painting,
    colors: stringToArray(painting.colors),
    color_hex: stringToArray(painting.color_hex)
  }));

  // Create the final object
  const cleanedData = {
    ...data,
    paintings: cleanedPaintings
  };

  // Save the cleaned data to a new file
  fs.writeFileSync(outputPath, JSON.stringify(cleanedData, null, 2));

  console.log('Successfully created bob-ross-cleaned.json');
} catch (err) {
  console.error('Error processing the file:', err.message);
}