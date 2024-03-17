import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// console.log(`${process.env.DB_URL}/${process.env.DB_NAME}`)
// mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
console.log(`URL:${process.env.DB_URL_S}/${process.env.DB_NAME}${process.env.DB_URL_E}`)
mongoose.connect(`${process.env.DB_URL_S}/${process.env.DB_NAME}${process.env.DB_URL_E}`)
export default mongoose