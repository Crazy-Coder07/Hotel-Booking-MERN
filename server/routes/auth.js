const express=require("express");

const router=express.Router();

// controllers
import {register,login} from "../controllers/auth";

// /api/:message  here : is for dynamic message on server
router.post('/register',register);
router.post('/login',login);



module.exports=router;