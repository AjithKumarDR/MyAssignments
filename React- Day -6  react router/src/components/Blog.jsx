import React from 'react'
import Image from 'react-bootstrap/Image';
import Headpost from'../assets/imgs/blog-header-1536x236.webp'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import FullstackBlog from'../assets/imgs/top-ways-to-assess-soft-skills-in-full-stack-developers.webp'
import {Link} from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Blog({database,setdatabase}) {


  let params = useParams()
  let navigate = useNavigate()
  //console.log(Object.keys(params)[0] )  
  //console.log(database[0].Title[Object.values(params)[0]])
  let titledatas=database[0].Title[Object.values(params)[0]]
   let blogstype=Object.values(params)[0]
  //console.log(titledatas )  
  //let blogstype="fullstack"
   let blogsdatas= Object.values(params)[0]!="all"? database[0].Blogs.filter((val)=> val.Coursetype==blogstype):database[0].Blogs
  console.log(blogsdatas )
  return <>
    <div>
        <Container className="blogText" >{ titledatas.Imgcontent!=""?<Image src={titledatas.Imgcontent} fluid />: <div>
        <h1>{titledatas.H1content}</h1>
        <p>{titledatas.p1content}</p>
        <p>{titledatas.p2content}</p>
    </div> }
    
   
    </Container>
    </div>
    
    <Nav  className="justify-content-center bg-body-tertiary titlenav titcol" variant="underline" defaultActiveKey="/home">
      <div className="flex-container">
      <Nav.Item className='navunderlin' >
        <Nav.Link className='navlink' onClick={()=>navigate('/all')}  >ALL</Nav.Link>
      </Nav.Item>
      <Nav.Item className='navunderlin'>
        <Nav.Link className='navlink' onClick={()=>navigate('/fullstack')}  >FULL STACK DEVELOPMENT</Nav.Link>
      </Nav.Item >
      <Nav.Item className='navunderlin'>
        <Nav.Link className='navlink'  onClick={()=>navigate('/datascience')} >   DATA SCIENCE</Nav.Link>
      </Nav.Item>
      <Nav.Item className='navunderlin'>
        <Nav.Link className='navlink' onClick={()=>navigate('/cybersecurity')} >CYBER SECURITY</Nav.Link>
      </Nav.Item>
      <Nav.Item className='navunderlin'>
        <Nav.Link className='navlink' onClick={()=>navigate('/career')} >CAREER</Nav.Link>
      </Nav.Item>
      </div>
    </Nav>
    <div>
    <Container className='cardcontainer'>
    <CardGroup >
    <Row className='justify-content-center'>
         {blogsdatas.map((data,i)=>{
          return<>
             <Col className='cardwid' xs={4}>
           <Card className='blogcards' >
        <Card.Img key={i} variant="top" src={data.Imgcontent} />
        <Card.Body  >
          <Card.Title   >{data.H1content}</Card.Title>
                    <Card.Text >
           { data.pcontent}
             </Card.Text>
             

          <Card.Text className='Carademe'  key={i} >
           READ MORE » 
          
             </Card.Text>
        </Card.Body>
        <Card.Footer >
          <small key={i} className="text-muted">{data.Datedetails}  {data.Commands}</small>
        </Card.Footer>
      </Card>
      </Col>
          </>

         })}
</Row>
     
      
    </CardGroup>
    </Container>
    </div>
 </>
}

export default Blog