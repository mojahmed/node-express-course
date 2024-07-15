const { writeFile, readFile } = require("fs").promises;

// Async function to write three lines to temp.txt
async function writer() {
  try {
    await writeFile("temp.txt", "Line 1\nLine 2\nLine 3\n");
    console.log("File 'temp.txt' written successfully.");
  } catch (error) {
    console.error("Error writing file:", error);
  }
}

// Async function to read temp.txt and log its content
async function reader() {
  try {
    const data = await readFile("temp.txt", "utf8");
    console.log("File content:");
    console.log(data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
}

// Async function to call writer and reader in order
async function readWrite() {
  await writer();
  await reader();
}

readWrite();
