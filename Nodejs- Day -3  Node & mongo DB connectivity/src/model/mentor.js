import mongoose from './index.js'

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
//Create schema
let mentorSchema= new mongoose.Schema({
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
    
    status:{
        type:Boolean,
       default:true
    },
     
    
    createAt:{
        type:Date,
       default:Date.now()
    },
},{
    collection:'mentors',
    versionKey:false
})


//Create Model
const mentorModel =mongoose.model('mentors',mentorSchema)

export default mentorModel