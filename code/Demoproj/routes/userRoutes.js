const express = require('express');
const {Addupdateuser} = require('../controller/user_controller')

const userRouter = express.Router();

userRouter.post('/users',Addupdateuser);

module.exports=userRouter;
