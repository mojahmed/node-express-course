// const mongoose = require('mongoose')

// const connectDB = (url) => {
//   return mongoose.connect(url, {
    
//     useNewUrlParser: true,
//     //  useCreateIndex: true,
//     //  useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
  
// }

// module.exports = connectDB



const mongoose = require('mongoose');

const connectDB = (url) => {
  // console.log('Connecting to MongoDB with URL:', url);
  return mongoose.connect(url)
  
    .then(() => {
      // console.log('Connected to MongoDB');
    })
    .catch(err => {
      console.error('Error connecting to MongoDB:', err.message);
      throw err; 
    });
};

module.exports = connectDB;
