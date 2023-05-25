import User from '../models/user'


export const register=async (req,res)=>{
   console.log(req.body);
   const {name,email,password}=req.body;

  //  validation
  if(!name){
    return res.status(400).send("Name is required");
  }
  if(!password || password.length<6){
    return res.status(400).send("password is required and should be minimum 6 character long")
  }

  let userExist=await User.findOne({email}).exec();
  if(userExist){
    return res.status(400).send("User Exist With This Email")
  }

  // for register
  const user=new User(req.body);
  
  try{
      await user.save();
      console.log("USER CREATED",user);
      return res.json({ok:true});
  }catch(err){
    console.log("Create User Failed",err);
    return res.status(400).send("Error. try again");
  }
};
