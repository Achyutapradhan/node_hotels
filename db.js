 const mongoose =require('mongoose');

 // define the MongoDB connection URL

 const mongoURL='mongodb://localhost:27017/hotels' // in this localhost prot number database server runs
 // you can change the database name 'hotels' to any other according your need.


 // here to establish connection with database.
 mongoose.connect(mongoURL,{
   // useNewUrlParser:true,
    //useUnifiedTopology:true
    //without these two parameter may be the connection might not be establish.
 })

 //Get the default connection
 //mongoose maintains a default connection object representing the mongodb conncetion.
 const db= mongoose.connection;

 //define the event listeners

 db.on('connected',()=>{
    console.log("Connected to MongoDB server.")
 })

 
 db.on('error',(err)=>{
    console.log(" MongoDB connection error.",err)
 })

 
 db.on('disconnected',()=>{
    console.log("Disconnected from MongoDB.")
 })

// by exporting this we can use it in our server.js file.
 module.exports=db;