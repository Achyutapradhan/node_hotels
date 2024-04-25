 const mongoose =require('mongoose');
 require('dotenv').config();
 // define the MongoDB connection URL

 //this url for local database connectivity.
// const mongoURL=DB_URL_LOCAL // in this localhost prot number database server runs
 // you can change the database name 'hotels' to any other according your need.
 const mongoURL=process.env.DB_URL;


 // here to establish connection with database.
 mongoose.connect(mongoURL,{
  //  useNewUrlParser:true,
  //  useUnifiedTopology:true
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