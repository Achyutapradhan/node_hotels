const mongoose =require ('mongoose');

//define the person schema

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true //it means mandatory filed.
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
     type:String,
     required:true,
     unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
// here we have created the schema.
//using this schema we will create the models and on that models -
// we will perform CRUD operations.
});

//creating person model

const Person= mongoose.model('Person',personSchema);
module.exports=Person;