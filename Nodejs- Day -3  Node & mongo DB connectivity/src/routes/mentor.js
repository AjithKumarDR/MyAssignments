import express from 'express'

import MentorController from '../controller/mentor.js'
const router = express.Router()

router.post('/',MentorController.createMentor)
 router.get('/:id',MentorController.getMentorStudentsById)
 router.post('/:id',MentorController.AssignMultiStudents)


export default router