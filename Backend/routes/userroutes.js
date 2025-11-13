import express from 'express'
import {authuser,registerUser,getuserProfile,updateUserProfile,logoutUser} from '../controllers/usercontrollers.js'
import { protect } from '../middleware/authmiddleware.js'
const router=express.Router()


router.post('/',registerUser)
router.post('/auth',authuser)
router.post('/logout',logoutUser)
// router.get('/profile',getuserProfile)
// router.put('/profile',updateUserProfile)
router.route('/profile').get(protect,getuserProfile).put(protect,updateUserProfile)

export default router



