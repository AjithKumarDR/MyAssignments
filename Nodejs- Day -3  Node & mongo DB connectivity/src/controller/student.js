import studentModel from '../model/student.js'
import mentorModel from '../model/mentor.js'
import dotenv from 'dotenv'
dotenv.config()


//#region Write API to create Student
const createStudent = async(req,res)=>{
    try {
        let student = await studentModel.findOne({email:req.body.email})
        if(!student)
        {
            await studentModel.create(req.body)
            res.status(201).send({
                message:"Student created successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`Student with ${req.body.email} already exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
}
//#endregion

//#region Write API to Assign or Change Mentor for particular Student
const assignMentor = async(req,res)=>{
    try {
        let student = await studentModel.findOne({_id:req.params.id})
        if(student)
        {
            let mentor = await mentorModel.findOne({_id:req.body.mentorid})
            if(mentor)
            {

                if (student.mentorid ==''){
                    
                    student.mentorid=req.body.mentorid
                    
                   }
                   else{                               
                    student.prementorid= req.body.mentorid==student.mentorid ? student.prementorid:student.mentorid
                    student.mentorid=req.body.mentorid
                   
                   }
        
                   await student.save()
                    res.status(200).send({
                        message:`${mentor.name} Mentor Added Successfully for Student ${student.name}`
                    })
            }
            else
            {
                res.status(400).send({
                    message:"Mentor Data Not found"
                })
            }




        }
        else
        {
            res.status(400).send({
                message:"Student Data Not found"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
}
//#endregion

//#region Get Previous Mentor the student
const getPrevMentor = async(req,res)=>{
    
    try {
        let previousMentor=""
        let student = await studentModel.findOne({_id:req.params.id})
        if(student)
            {
                let mentor = await mentorModel.findOne({_id:student.prementorid})
                if(mentor)
                {
                    previousMentor=mentor.name
                }
                else
                {
                    res.status(400).send({
                        message:"Previous Mentor Data Not found",                       
                        "previous Mentor id": student.prementorid
                    })
                }

              
                
            }

            else
            {
                res.status(400).send({
                    message:"Student Data Not found"
                })
            }
        res.status(200).send({
            message:"Data fetch successfull",
            "Student Name:": student.name  ,
            "previous Mentor Name is": previousMentor
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    
}
//#endregion

export default {
    
    createStudent,
    assignMentor,
    getPrevMentor
   
}