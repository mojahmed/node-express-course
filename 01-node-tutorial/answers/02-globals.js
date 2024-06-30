console.log(__dirname); // Print the current directory name ((__dirname is a global variable in Node.js that represents the directory name of the current module))

let counter = 0; 


const intervalId = setInterval(() => {
  counter++; 
  console.log(`Hello world - ${counter}`); // Log a message with the current count
  
  // Check if counter reaches 5 and clear the interval
  if (counter === 5) {
    clearInterval(intervalId); // Stop the interval
    console.log('Interval stopped after 5 iterations.'); // Log a message when stopping
  }
}, 1000);
