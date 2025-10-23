import asyncHandler from 'express-async-handler'

const authuser=asyncHandler(async(req,res)=>{

    res.status(401)
    throw new Error('something is wrong')
res.status(200).json({message:'User created'})


})

export default authuser