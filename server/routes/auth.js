const express=require("express");

const router=express.Router();

// controllers
import { showMessage } from "../controllers/auth";

// /api/:message  here : is for dynamic message on server
router.get('/:message',showMessage);

module.exports=router;