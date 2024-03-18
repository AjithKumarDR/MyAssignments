import express from 'express'

import StudentController from '../controller/student.js'
const router = express.Router()


router.post('/',StudentController.createStudent)
router.put('/:id',StudentController.assignMentor)
 router.get('/:id',StudentController.getPrevMentor)
 router.get('/',StudentController.getAll)

export default router