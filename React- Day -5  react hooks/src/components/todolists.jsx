import React ,{ useState } from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// function todolists({Database,setDatabase,disfilter,todoname,settodoname,tododesc,settododesc,todoID,settoID}) {
  function todolists({Database,setDatabase,disfilter,settodoname,settododesc,settoID}) {
  // let [todoselected,settodoselected]=useState("Not Completed");

  
  let bindDatas=disfilter=="ALL"? Database:disfilter=="Completed"?  Database.filter((val)=>val.Status=="Completed"):Database.filter((val)=>val.Status=="Not Completed")
  // console.log(disfilter)
   // console.log(bindDatas)

  const statuschange=(index,val)=>{

    console.log(Database.findIndex(item => item.Id == index))  
    Database.splice(Database.findIndex(item => item.Id == index),1,{
      Id:index,
      Name:Database[Database.findIndex(item => item.Id == index)].Name,
      Description:Database[Database.findIndex(item => item.Id == index)].Description,
      Status:val
    })
    setDatabase([...Database])

  }
  const deleteDatas=(index)=>{
          console.log(index)             
       
        var result = Database.filter((val)=> val.Id!=index)
         setDatabase([...result])
    console.log(result);
  }
  const EditDatas=(index)=>{
   // console.log(index);
    settoID(index)    
    
     settodoname( Database.filter((val)=> val.Id==index)[0].Name)
      settododesc(Database.filter((val)=> val.Id==index)[0].Description)
    
}
  
  return<> {
    
    bindDatas.map((val,i)=>{
      
      
    //  console.log(" val is :"+ val.Id)
  return (
<Col key={i}  sm={4} >
   <Card  style={{ width: '25rem' ,height:'20rem',margin:'5%' }}>
      <Card.Body  className='todobody'>
        
        <Card.Text >
          Name : {val.Name}
        </Card.Text>
        <Card.Text  >
          Description : {val.Description}
        </Card.Text>
        <Card.Text className='todostatus'>
          
          Status : &nbsp;&nbsp;
          
          <Form.Select key={i} className={val.Status=="Completed"?"selectcmp":""}  value={ val.Status } onChange={(e)=>statuschange(val.Id,e.target.value)}>
            <option  value="Completed" >Completed</option>                                   
            <option value="Not Completed" >Not Completed</option>                                
          </Form.Select>
   
        </Card.Text>
        <Row key={i} className='todobut'>
          <Col sm={5}  className='todobutpo'>
        <Button key={i} variant="success"  onClick={()=>EditDatas(val.Id)} >Edit</Button>
        </Col>
        <Col sm={5} className='todobutpo'>
        <Button key={i} className='taskdelete'  onClick={()=>deleteDatas(val.Id)} >Delete</Button>
        </Col>
        </Row>
      </Card.Body>
    </Card>
    </Col>
)
})
}
  
</>


  
    
    


  
}

export default todolists