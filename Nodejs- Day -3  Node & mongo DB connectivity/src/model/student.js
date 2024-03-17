import mongoose from './index.js'

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
//Create schema
let studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name must be required']
    },
    email:{
        type:String,
        required:[true,'Email must be required'],
        validate:{
            validator:(value)=>validateEmail(value)
        }
    },
    mentorid:{
        type:String,
        default:''
        
    }, 
    prementorid:{
        type:String,
        default:''
     
    }, 
    status:{
        type:Boolean,
       default:true
    },
     
  
    createAt:{
        type:Date,
       default:Date.now()
    },
},{
    collection:'students',
    versionKey:false
})


//Create Model
const studentModel =mongoose.model('students',studentSchema)

export default studentModel