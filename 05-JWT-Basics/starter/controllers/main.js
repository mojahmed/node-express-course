
const jwt = require('jsonwebtoken')
const { BadRequest} = require('../errors')

const login = async (req,res) =>{
    const {username,password} = req.body
    // mongo
    // check in the controller


   

if(!username || !password) {
    throw new BadRequest('Please provide email and password')

}
// this is just for demo, normally we provided by DB!!!
const id = new Date().getDate()

// just for demo, in production use long, complex and unguessable string value!!!!!!
const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
   
    res.status(200).json({msg:'user created',token})
 }

 const dashboard = async (req,res) => {
    // console.log(req.user);
   
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg: `Hello, ${req.user.username}`,secret:`Here is your authorized data,your lucky number is ${luckyNumber}` })

   
    // console.log(token)
}

 module.exports = {
    login,dashboard
 }