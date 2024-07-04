


const fs = require('fs');

// Path to the big file
const filePath = '../content/big.txt';

// Define different highWaterMark values to test
const highWaterMarks = [200, 500, 1000];


async function handleStream(highWaterMark) {
  // initialize a counter to 0.
  let counter = 0;

 
  const readStream = fs.createReadStream(filePath, {
    encoding: 'utf8',
    highWaterMark: highWaterMark
  });

  //handling stream events by using async 
  for await (const chunk of readStream) {
    counter++;
    console.log(`Received chunk ${counter}`);
  }

  console.log(`Finished reading the file. Total chunks: ${counter}`);
}


(async () => {
  for (const highWaterMark of highWaterMarks) {
    console.log(`Testing with highWaterMark: ${highWaterMark}`);
    try {
      await handleStream(highWaterMark);
    } catch (err) {
      console.error('Error occurred:', err);
    }
    console.log('----------------------');
  }
})();
