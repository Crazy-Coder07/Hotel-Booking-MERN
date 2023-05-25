const express=require("express");

const router=express.Router();

// controllers
import {register } from "../controllers/auth";

// /api/:message  here : is for dynamic message on server
router.post('/register',register);

module.exports=router;