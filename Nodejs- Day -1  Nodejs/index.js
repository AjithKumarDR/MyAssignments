const http =require('http')
const PORT =8000
const fs =require('fs')
const date = new Date();
const timestamp = Date.now()
let Filename =date.getDate()+"."+date.getMonth()+1+"."+date.getFullYear()+"-"+ date.getHours()+"."+date.getMinutes()+"."+date.getSeconds()    //date.toLocaleString();
let Content = "Current Date:"+Filename+"\nCurrent TimeStamp:"+ timestamp.toString();

fs.writeFile(`TimeStamp/${Filename}.txt`,Content,'utf-8',(err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("File Creation Successfully....")
  }



})
let server = http.createServer((req,res)=>{
    try{
         let data=fs.readFileSync(`TimeStamp/${Filename}.txt`,'utf-8')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end("<H1>"+data+"</H1>")
    }
    catch(err){
        console.log(err)
    
    }
    
    
    
    })
    
    server.listen(PORT,()=>console.log("server running in this port "+ PORT))

