// 1-fs-async.js

const { writeFile } = require('fs');
const path = require('path');

// Directory and file path
const tempDir = './temporary';
const filePath = path.join(tempDir, 'fileB.txt');

// Content to write to the file
const contentLines = [
  'Line 1: This is the first line.',
  'Line 2: This is the second line.',
  'Line 3: This is the third line.'
];

console.log("Start writing file...");

// Write line 1 to the file
writeFile(filePath, contentLines[0] + '\n', (err) => {
  if (err) {
    console.error('Error writing line 1:', err);
  } else {
    console.log('Line 1 written successfully.');

    // Write line 2 to the file
    writeFile(filePath, contentLines[1] + '\n', { flag: 'a' }, (err) => {
      if (err) {
        console.error('Error writing line 2:', err);
      } else {
        console.log('Line 2 written successfully.');

        // Write line 3 to the file
        writeFile(filePath, contentLines[2] + '\n', { flag: 'a' }, (err) => {
          if (err) {
            console.error('Error writing line 3:', err);
          } else {
            console.log('Line 3 written successfully.');
            console.log('All lines have been written to the file.');
          }
        });
      }
    });
  }
});

console.log("End of script.");
