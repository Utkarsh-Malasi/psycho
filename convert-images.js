// Script to convert images to WebP format
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { promises as fs } from 'fs';
import path from 'path';

// Define source and destination directories
const sourceDir = 'src/images';
const destDir = 'src/images';

// Function to convert images
async function convertToWebP() {
  try {
    console.log('Converting images to WebP format...');
    
    // Get all jpg files in the source directory
    const files = await fs.readdir(sourceDir);
    const jpgFiles = files.filter(file => file.endsWith('.jpg'));
    
    if (jpgFiles.length === 0) {
      console.log('No JPG files found in the source directory.');
      return;
    }
    
    // Process each file
    for (const file of jpgFiles) {
      const filePath = path.join(sourceDir, file);
      const fileStats = await fs.stat(filePath);
      const fileSizeInKB = fileStats.size / 1024;
      
      console.log(`Processing ${file} (${fileSizeInKB.toFixed(2)} KB)...`);
      
      // Convert to WebP
      const webpFileName = file.replace('.jpg', '.webp');
      const webpFilePath = path.join(destDir, webpFileName);
      
      await imagemin([filePath], {
        destination: destDir,
        plugins: [
          imageminWebp({
            quality: 80, // Adjust quality as needed (0-100)
            resize: {
              width: 1200, // Max width
              height: 1200 // Max height
            }
          })
        ]
      });
      
      // Check the size of the converted WebP file
      const webpStats = await fs.stat(webpFilePath);
      const webpSizeInKB = webpStats.size / 1024;
      
      console.log(`Created ${webpFileName} (${webpSizeInKB.toFixed(2)} KB) - ${((1 - webpSizeInKB / fileSizeInKB) * 100).toFixed(2)}% smaller`);
    }
    
    console.log('Conversion complete!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

// Run the conversion
convertToWebP();