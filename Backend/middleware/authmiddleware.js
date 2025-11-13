import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/usermodels.js'


const protect=expressAsyncHandler(async(req,res,next)=>{
 let token;
 token=req.cookies.jwt;

 if(token){
   try {
    const decoded=jwt.verify(token, process.env.JWT_SECRET)
     req.user=await User.findById(decoded.userId).select('-password')
     next()
   } catch (error) {
    res.status(401)
    throw new Error('Invalid token')
   }
 }
 else{
    res.status(401);
    throw new Error('Not authorised,No token found')
 }



})
export {protect}