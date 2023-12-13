import { useState } from 'react'
import './App.css'
import Userinputs from './components/inputs'
import Todolists from './components/todolists'
import Navbar from 'react-bootstrap/Navbar';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  let [disfilter,setdisfilter]=useState("ALL");
  let [todoname,settodoname]=useState("");
  let [todoID,settoID]=useState("");
let [tododesc,settododesc]=useState("");
let [Database, setDatabase]=useState([
  {
    Id:1,
    Name:"Office Task-1",
    Description:"this is the description for My first Task",
    Status:"Not Completed"
  },
  {
    Id:2,
    Name:"Office Task-2",
    Description:"this is the description for My Second Task",
    Status:"Completed"
  },
  {
    Id:3,
    Name:"Office Task-3",
    Description:"this is the description for My Third Task",
    Status:"Not Completed"
  }

])

const applayfilter=(val)=>{

  console.log(val.target.value)
}



  return  <>
<Container className="todo">      

      <Row className="justify-content-md-center">
        
        <Col md="auto"><h1>My todo</h1></Col>
        
      </Row>
      <Row>
      <Container className='userinput'> 
        <Userinputs Database={Database} setDatabase={setDatabase} todoname={todoname} settodoname={settodoname} tododesc={tododesc} settododesc={settododesc} todoID={todoID} settoID={settoID}   />
        </Container>
      </Row>
      <Row>
      <Container className='navba'> 
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h4>My Todos</h4> </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Row>
        <Form.Label column="lg" lg={6}>
          <h4>Status Filter :</h4>
        </Form.Label>
        <Col>
        <Form.Select    onChange={(e)=>setdisfilter(e.target.value) }>
      
      <option value="ALL">ALL</option>
      <option value="Completed">Completed</option>
      <option value="Not Completed">Not Completed</option>
    </Form.Select>
        </Col>
      </Row>
      
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
    <Container fluid>
      <Row className='todolist '>
      <Todolists Database={Database} setDatabase={setDatabase} disfilter={disfilter} todoname={todoname} settodoname={settodoname} tododesc={tododesc} settododesc={settododesc} todoID={todoID} settoID={settoID} />
      </Row>
    </Container>
    
       
      </Row>
      


    </Container>



     
    </>
  
}

export default App
