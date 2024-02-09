
const express = require('express')
const PORT =8000
const fs =require('fs')
const http =require('http')
const app = express();


app.get('/create', (request, response) => {

  const date = new Date();
  const timestamp = Date.now()
  let Filename =date.getDate()+"."+date.getMonth()+1+"."+date.getFullYear()+"-"+ date.getHours()+"."+date.getMinutes()+"."+date.getSeconds()    //date.toLocaleString();
  let Content = "Current Date:"+Filename+"\nCurrent TimeStamp:"+ timestamp.toString();
  
  fs.writeFile(`TimeStamp/${Filename}.txt`,Content,'utf-8',(err)=>{
    if(err){
      console.log(err)
      return response.status(404).json({ Message: "Text file creation failed" })
    }
    else{
      console.log("File Creation Successfully....")
      return response.status(200).json({ Message: `Text file ${Filename}.txt created successfully ` })
    }
  
  
  
  })
})



app.get('/GetFiles', (request, response) => {


  try{
   


    const FileinFolder = [];
    const files = fs.readdirSync('./TimeStamp');
    files.forEach(file => {
       
          FileinFolder.push(file);
      
    })
    response.status(200).send(FileinFolder);
    console.log(FileinFolder)


}
catch(err){
    console.log(err)

}



})
app.get('/', (request, response) => {
  response.writeHead(200,{'Content-Type':'text/html'})
  response.end("<div>         <H1>  Create a File URL: /create   </H1> <H1> Read File URL: /GetFiles    </H1><div>")
})

    
    app.listen(PORT,()=>console.log("server running in this port "+ PORT))

