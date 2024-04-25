//NODE TUTORIAL
// var fs=require('fs');
// var os= require('os');
// var _=require('lodash'); // it's a good library and this is the way to use lodash
// var user=os.userInfo();
// console.log(user);
// console.log(user.username);
//console.log(os) //we will get to know about the functionality of os.

// // fs.appendFile("greetings.txt",'Hello'+ user.username+"!",()=>{
// //     console.log("You can join us")
// // });
// var arr=["abc","abc",1,1,2,3,3,4,4]
// var filtered = _.uniq(arr)  //uniq function is for filter unique data
// console.log(filtered);

const express =require('express');
const app = express();
const db=require('./db'); 
//importing the db.js file to establish connection between node server and data base server

require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json()); // it will save the data in (req.body) we'll just neeed to use that.
const PORT=process.env.PORT || 3000;



//get method to receive data.
app.get('/', function (req, res) {
  res.send('Our Server is ready');
})

//import the router files
const personRouter=require('./routes/personRouter');

//use the routers
app.use('/person',personRouter);


app.listen(PORT, ()=>{
    console.log("server is listening!")
})