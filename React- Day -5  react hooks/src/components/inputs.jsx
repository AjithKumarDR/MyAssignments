import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function userinputs({Database,setDatabase,todoname,settodoname,tododesc,settododesc,todoID,settoID}) {

let todostatus="Not Completed";

  const addDatas=()=>{
  console.log({todoID,todoname,tododesc,todostatus})
  console.log( "vasl"+Database.length )
 if(todoname!=""&&tododesc!=""){
  
  Database.splice( todoID!=""?Database.findIndex(item => item.Id == todoID):Database.length,1,{
    Id:todoID!=""?todoID: Database.length!=0? Database[Database.length-1].Id +1:1,
    Name:todoname,
    Description:tododesc,
    Status:todostatus
  })
  settoID("")

   
        setDatabase([...Database])
        settodoname('')
        settododesc('')

 }
 else{
  alert("Please Fill the Name And Description....!");
 }
  }
  
 
  return <>
   <Form  >
      <Row>
        <Col sm={5}>
          <Form.Control required id='todoname' placeholder="Todo Name" onChange={(e)=>settodoname(e.target.value) }  value={todoname}/>
          
        </Col>
        <Col sm={5}>
          <Form.Control required id='tododesc' placeholder="Todo Description" onChange={(e)=>settododesc(e.target.value)} value={tododesc}  />
        </Col>
        <Col sm={2}>
        <Button variant="success" onClick={()=>addDatas()}>Add Todo</Button>
        </Col>
      </Row>
    </Form>
    
  </>
    
}

export default userinputs