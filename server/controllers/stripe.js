import User from '../models/user';
const stripe = require('stripe')(process.env.STRIPE_SECRET);

export const createConnectAccount=async (req,res)=>{

    // user is not defind in express-jwt version 6 or more
    //  so instesd of using the user please use  auth(READ DOCUMENTATION PROPERLY)

if (!req.auth || !req.auth._id) {
  console.error('Invalid user or user ID');
}

// finding the user from the database
const auth = await User.findById(req.auth._id).exec();
  console.log("USER ===>",auth);

// if user don't have stripe_account_id yet then create now
// official doc follows the customer as a name
  if(!auth.stripe_account_id){
    stripe.customers.create({
        email: 'adityaranjan7479@gmail.com',
     })
        .then((customer) =>{
             console.log(customer)
             auth.stripe_account_id=customer.id;
             auth.save();
        })
        .catch(error => console.error(error));
  }

 
};

