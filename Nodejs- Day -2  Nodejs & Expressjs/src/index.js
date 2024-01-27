//const express=require('express')
import  express, { Router }  from "express"
import AppRouters from './routes/index.js'
const app=express()
const PORT=process.env.PORT|| 8000
app.use(express.json())
app.use(AppRouters)

app.listen(PORT,()=>console.log(`App is running in ${PORT}`))