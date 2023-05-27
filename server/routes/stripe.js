const express=require("express");

const router=express.Router();

// middlewares 
import { requireSignin } from '../middlewares';
// controllers
import {createConnectAccount} from '../controllers/stripe';
// /api/:message  here : is for dynamic message on server
router.post('/create-connect-account',requireSignin,createConnectAccount);



module.exports=router;