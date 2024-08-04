require('dotenv').config()

// async errors 
require('express-async-errors')

const express = require('express');
const app = express();


const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// Middleware
app.use(express.json())

// Routes  
app.get('/',(req,res)=>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')
})

app.use('/api/v1/products',productsRouter)

// products route

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.port || 3000

// console.log('MONGO_URI:', process.env.MONGO_URI);
// console.log('PORT:', port);

const start = async () =>{
    try{
        // connectDB
        // console.log('Attempting to connect to MongoDB...');
        await connectDB(process.env.MONGO_URI)
        // console.log('Connected to MongoDB');
        app.listen(port, console.log(`Server is listening to port ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

start()
