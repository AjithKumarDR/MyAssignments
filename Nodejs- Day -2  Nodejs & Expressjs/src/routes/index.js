import { Router } from "express";
import RoomRouter from "./RoomsNav.js"
import OrdersRouter from "./OrdersNav.js"
const router=Router()

router.get('/',(req,res)=>{
    res.status(200).send('<h1> Welcome to Hall Booking Site </h1>')
})
router.use('/Room',RoomRouter)
router.use('/Order',OrdersRouter)

export default router