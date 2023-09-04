const express = require('express') ;
const app = express() ;
const mongoose = require('mongoose') ;
// const dotenv = require('dotenv') ;
// dotenv.config() ;

require('dotenv').config()
// console.log(process.env.MONGO_URL1) ;

mongoose.connect('mongodb://0.0.0.0:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('DB connnection successful!'))
.catch((err)=>console.log(err)) ;

// mongoose.connect(process.env.MONGO_URL1, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(()=>console.log('DB connnection successful!'))
// .catch((err)=>console.log(err)) ;


app.listen(8800, ()=>{
    console.log("Backend Server is running!.") ;
}) ;