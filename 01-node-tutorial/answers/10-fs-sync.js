// 10-fs-sync.js

const fs = require('fs');
const path = require('path');

// Directory and file path
const tempDir = './temporary';
const filePath = path.join(tempDir, 'fileA.txt');

// Content to write to the file
const contentLines = [
  'Line 1: This is the first line.',
  'Line 2: This is the second line.',
  'Line 3: This is the third line.'
];

// Ensure the temporary directory exists, if not create it
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Write lines to the file using append flag for lines 2 and 3
fs.writeFileSync(filePath, contentLines[0] + '\n');
fs.writeFileSync(filePath, contentLines[1] + '\n', { flag: 'a' });
fs.writeFileSync(filePath, contentLines[2] + '\n', { flag: 'a' });

// Read the file synchronously
const fileContent = fs.readFileSync(filePath, 'utf8');

// Log the contents of the file to the console
console.log('File Contents:');
console.log(fileContent);
