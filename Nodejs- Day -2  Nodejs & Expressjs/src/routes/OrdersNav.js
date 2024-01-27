import {Router} from 'express'
import usercontroller from '../controller/Hallbooking.js'
const router =Router()

router.get('/',usercontroller.CustomerDetails)
router.get('/getall',usercontroller.getalldatas)
router.get('/Customers',usercontroller.CustomerBookingDetails)
router.post('/',usercontroller.AddBookingOrders)


export default router