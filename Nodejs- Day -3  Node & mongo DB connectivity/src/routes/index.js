import express from 'express'
import MentorRoutes from './mentor.js'
import StudentRoutes from './student.js'
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send('<h1> Welcome to Mentor and Student Assigning with Database Site </h1>  '
   
    +'<H1>PostMan URL is</H1>'
    +'<p>https://www.postman.com/material-technologist-39902777/workspace/my-workspace/collection/28692183-a81c5f9d-7c4a-4b46-b3bb-c987f72510d2?action=share&creator=28692183</p>'
    
    
    
    )
})
router.use('/mentor',MentorRoutes)
router.use('/student',StudentRoutes)
export default router
