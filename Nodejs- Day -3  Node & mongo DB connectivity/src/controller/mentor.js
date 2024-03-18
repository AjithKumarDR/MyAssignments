import mentorModel from '../model/mentor.js'
import studentModel from '../model/student.js'
import dotenv from 'dotenv'
dotenv.config()


//#region Get Mentor Students Details  By Mentor ID 
const getMentorStudentsById = async(req,res)=>{
    
    try {
        let mentor = await mentorModel.findOne({_id:req.params.id})
        let students = await studentModel.find({mentorid:req.params.id})
        let studentsname = students.map((val)=>{
            return val.name
        })
       
        res.status(200).send({
            message:"Data fetch successfull",
            "Mentor Name:":mentor.name,
            "Students List:":studentsname

        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    
}
//#endregion
//#region Write API to create Mentor
const createMentor = async(req,res)=>{
    try {
        let mentor = await mentorModel.findOne({email:req.body.email})
        if(!mentor)
        {
            await mentorModel.create(req.body)
            res.status(201).send({
                message:"Mentor created successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:`Mentor with ${req.body.email} already exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
}
//#endregion

//#region Write API to Assign a student to Mentor

const AssignMultiStudents = async(req,res)=>{
    try {
        const addedstudents = new Array();
        let mentor = await mentorModel.findOne({_id:req.params.id})
        if(mentor)
        {
            const studentPromises =   req.body.students.map(async(val)=>{

                let student = await studentModel.findOne({_id:val})
                if(student)
                {
                   // student.prementorid= mentor.mentorid==student.mentorid ? student.prementorid:student.mentorid
                   student.mentorid=='' ? addedstudents.push(val):''
                   student.mentorid= student.mentorid=='' ? mentor.id:student.mentorid

                    
                    
                }
                await student.save()
            })
            const studentslist = await Promise.all(studentPromises);
            res.status(201).send({
                message:"Assign Multiple Students",                
                addedstudents
            })
        }
        else
        {
            res.status(400).send({
                message:`Mentor Data Not found`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
}
//#endregion

//#region Get Mentor Students Details  By Mentor ID 
const getAll = async(req,res)=>{
    
    try {
        let mentor = await mentorModel.find()
        
       
        res.status(200).send({
            message:"Data fetch successfull",
            "Mentor Database:":mentor,
            

        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal server error"
        })
    }
    
}
//#endregion



export default {

    createMentor,
    getMentorStudentsById,
    AssignMultiStudents,
    getAll

}