import {Router} from 'express'
import usercontroller from '../controller/Hallbooking.js'
const router =Router()


router.get('/',usercontroller.RoomDetails)
router.post('/',usercontroller.AddRooms)

export default router