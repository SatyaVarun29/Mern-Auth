import express from 'express'
import {authuser,registerUser,getuserProfile,updateUserProfile,logoutUser} from '../controllers/usercontrollers.js'

const router=express.Router()


router.post('/auth',authuser)
router.post('/',registerUser)
router.post('/logout',logoutUser)
// router.get('/profile',getuserProfile)
// router.put('/profile',updateUserProfile)
router.route('/profile').get(getuserProfile).put(updateUserProfile)

export default router



