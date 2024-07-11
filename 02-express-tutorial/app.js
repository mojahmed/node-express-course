// Step 1: Import the express module
const express = require('express');

const { products } = require('./data'); // I use this line to Import products array from data.js
//  Create an Express application
const app = express();


app.use(express.static("./public"));


// the way to Handle GET requests to /api/v1/test
app.get('/api/v1/test', (req, res) => {
  res.json({ message: "It worked!" });
});

// Route to return products data
app.get('/api/v1/products', (req, res) => {
  res.json(products);
});

// Route to retrieve a product by ID
app.get('/api/v1/products/:productID', (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((products) => products.id === idToFind);

  if (!product) {
      return res.status(404).json({ message: 'That product was not found.' });
  }

  res.json(product);
});




app.get('/api/v1/query', (req, res) => {
  let queryProds = [...products];

  const { search, price, limit } = req.query;

  if (search) {
    const searchTerm = search.toLowerCase();
    queryProds = queryProds.filter(product => product.name.toLowerCase().startsWith(searchTerm));
  }

  if (price) {
    const maxPrice = Number(price);
    queryProds = queryProds.filter(product => product.price < maxPrice);
  }

  if (limit) {
    const limitNumber = parseInt(limit);
    queryProds = queryProds.slice(0, limitNumber);
  }

  if (queryProds.length === 0) {
    return res.status(404).json({ error: 'No products matched your search criteria.' });
  }

  res.status(200).json(queryProds);
});


//  Define a route handler for page not found (404)
app.all('*', (req, res) => {
    // if i click on http://localhost3000/about i will see page not found because of app.all code 
  res.status(404).send('Page not found');
  
});
console.log('user hit the server');
// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

