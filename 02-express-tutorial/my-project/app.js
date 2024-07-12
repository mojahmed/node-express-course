// app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser()); // Parse cookies

// Static files serving
app.use(express.static('./methods-public'));

// using for all routes
app.use(logger);


const peopleRouter = require('./routes/people');
app.use('/api/v1/people', peopleRouter);

// Logon route
app.post('/logon', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ success: false, message: "Please provide a name" });
    }
    res.cookie('name', name);
    res.status(201).json({ success: true, message: `Hello, ${name}` });
});

//this is call Logoff route
app.delete('/logoff', (req, res) => {
    res.clearCookie('name');
    res.status(200).json({ success: true, message: "Logged off" });
});

// Test route with authentication using auth file
app.get('/test', auth, (req, res) => {
    res.status(200).json({ success: true, message: `Welcome, ${req.user}` });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

