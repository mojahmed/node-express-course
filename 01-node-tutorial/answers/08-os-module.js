const os = require("os");

// Display some information from the os module //https://nodejs.org/api/os.html
console.log('OS platform:', os.platform());
console.log('OS architecture:', os.arch());
console.log('CPU cores:', os.cpus().length);
console.log('Total memory (bytes):', os.totalmem());
console.log('Free memory (bytes):', os.freemem());