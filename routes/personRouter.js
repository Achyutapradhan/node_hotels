const express=require ('express');
const router=express.Router();


//importing person.js file
const Person=require('./../models/person');

//method to send person data(that is post method)
router.post('/',async(req,res)=>{ //it is a call back func but it is good as of industry level, so we use aysnc await 
    // const data=req.body //assuming the request body contains the person's data.
  
    // //creating a new person document using the Mongoose model.
    // const newPerson =new Person(data); //person data inherit to newPerson
    // //to avoid these continously writing conflict we pass the data to newPerson
  
    // newPerson.save((error,person)=>{// .save is a callback which takes two things a para meter(error,model(i.r person)) 
    //   if(error){
    //     console.log('Error saving person');
    //     res.status(500).json({error:'Internal server error'})
    //   }else{
    //     console.log('data saved successfully.');
    //     res.status(200).json(person);
    //   }
    // })
    // //newPerson.name=data.name; //here we use data because req.body saved the data inside data variable.
    // // newPerson.age=data.age;  
    // // newPerson.work=data.work;  
    // // newPerson.email=data.email; 
  try{
    const data=req.body 
  
    //create a newPerson document using mangoose model
    const newPerson =new Person(data);
  
    //save the response to the database
    const response =await newPerson.save();
    console.log('data saved')
    res.status(200).json(response);
  } 
  catch(err){
   console.log(err);
   res.status(500).json({error:'Internal server error'})
  }
  
  })
  
  // to get person data
  router.get('/',async (req,res) => {
    try{
  const data= await Person.find();
  console.log('data fetched')
  res.status(200).json(data);
  
    }catch(err){
  console.log(err);
  res.status(400).json({errpr:'Internal server error'});  
  }
  })
  
  router.get('/:workType',async(req,res)=>{
    const workType=req.params.workType; //extract the work type from the url parameter.
    try{
   if(workType =='chef' || workType=='manager'|| workType=='waiter'){
    const response= await Person.find({work:workType});
    console.log('response fetched');
    res.status(200).json(response);
   }
   else{
    res.status(404).json({error: 'Invalid work type'})
   }
    }
    catch(err){
      console.log(err);
      res.status(400).json({errpr:'Internal server error'});
    }
  })

  router.put('/:id',async(req,res)=>{
    try{
       const personId=req.params.id; //extratct the id from the URL parameter.
       const updatedPersonData=req.body //Updated data for the person
       const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
        new:true, //return the updated document
        runValidators:true, //run mongoose validation
       })
       if(!response){
        return res.status(404).json({error:'Person not found'});
       }
console.log('data updated')
res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:'Internal server error'});
    }
  })

  router.delete('/:id',async(req,res)=>{
    try{
const personId=req.params.id; 
const response=await Person.findByIdAndDelete(personId);

if(!response){
    return res.status(404).json({error:'Person not found'});
   }
   console.log('data deleted.');
   res.status(200).json({message:'Person deleted succesfully.'})
    }
    catch(err){
        console.log(err);
        res.status(400).json({error:'Internal server error'});
    }
  })

  module.exports=router;