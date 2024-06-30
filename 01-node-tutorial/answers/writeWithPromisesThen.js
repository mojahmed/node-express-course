const { writeFile, readFile } = require("fs").promises;

writeFile("temp.txt", "Line 1")
  .then(() => {
    console.log("Line 1 written successfully.");
    return writeFile("temp.txt", "Line 2");
  })
  .then(() => {
    console.log("Line 2 written successfully.");
    return writeFile("temp.txt", "Line 3");
  })
  .then(() => {
    console.log("Line 3 written successfully.");
    return readFile("temp.txt", "utf8");
  })
  .then((data) => {
    console.log("File content:");
    console.log(data);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
