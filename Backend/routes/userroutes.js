import express from 'express'
import authuser from '../controllers/usercontrollers.js'

const router=express.Router()


router.post('/auth',authuser)


export default router



