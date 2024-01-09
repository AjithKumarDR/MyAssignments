import React, { useEffect,useState } from 'react'
import imgbook from '../assets/img/DWK18_3D-Cover_HiRes.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SimpleImageSlider from "react-simple-image-slider";
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux'
import { saveAllBlogs,removeitem ,qtychange} from '../redux/CartsSlice';
function Cartss() {
  const datas = useSelector(state=> state.blogs)
  let dispatch = useDispatch()

useEffect(()=>{
  const datasDB= {
    "products": [
          {
              "id": 1,
              "title": "iPhone 9",
              "description": "An apple mobile which is nothing like apple",
              "price": 549,
              "discountPercentage": 12.96,
              "rating": 4.69,
              "stock": 94,
              "orderqty":1,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
              "images": [
                  "https://i.dummyjson.com/data/products/1/1.jpg",
                  "https://i.dummyjson.com/data/products/1/2.jpg",
                  "https://i.dummyjson.com/data/products/1/3.jpg",
                  "https://i.dummyjson.com/data/products/1/4.jpg",
                  "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
              ]
          },
          {
              "id": 2,
              "title": "iPhone X",
              "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
              "price": 899,
              "discountPercentage": 17.94,
              "rating": 4.44,
              "stock": 34,
              "orderqty":1,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
              "images": [
                  "https://i.dummyjson.com/data/products/2/1.jpg",
                  "https://i.dummyjson.com/data/products/2/2.jpg",
                  "https://i.dummyjson.com/data/products/2/3.jpg",
                  "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
              ]
          },
          {
              "id": 3,
              "title": "Samsung Universe 9",
              "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
              "price": 1249,
              "discountPercentage": 15.46,
              "rating": 4.09,
              "stock": 36,
              "orderqty":1,
              "brand": "Samsung",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
              "images": [
                  "https://i.dummyjson.com/data/products/3/1.jpg"
              ]
          },
          {
              "id": 4,
              "title": "OPPOF19",
              "description": "OPPO F19 is officially announced on April 2021.",
              "price": 280,
              "discountPercentage": 17.91,
              "rating": 4.3,
              "stock": 123,
              "orderqty":1,
              "brand": "OPPO",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
              "images": [
                  "https://i.dummyjson.com/data/products/4/1.jpg",
                  "https://i.dummyjson.com/data/products/4/2.jpg",
                  "https://i.dummyjson.com/data/products/4/3.jpg",
                  "https://i.dummyjson.com/data/products/4/4.jpg",
                  "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
              ]
          },
          {
              "id": 5,
              "title": "Huawei P30",
              "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
              "price": 499,
              "discountPercentage": 10.58,
              "rating": 4.09,
              "stock": 32,
              "orderqty":1,
              "brand": "Huawei",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
              "images": [
                  "https://i.dummyjson.com/data/products/5/1.jpg",
                  "https://i.dummyjson.com/data/products/5/2.jpg",
                  "https://i.dummyjson.com/data/products/5/3.jpg"
              ]
          }
      ]
  }

  dispatch(saveAllBlogs({data:datasDB}))
},[])


  return <>
 <Navbar  expand="lg" data-bs-theme="dark" className="head bg-body-tertiary">
      <Container  >
        <Navbar.Brand   href="#"><h4> Redux Cart Page</h4> </Navbar.Brand>
      </Container>
    </Navbar>


    <Container >
    <Row >
    {datas.map((val)=>{

    const formattedUrls = val.images.map((val, index) => {
      return { url: val };
  });     

              let ratingstars=[]
              let num =1
              
              while(num<=val.rating){
              ratingstars.push(<div key={num}   className="bi-star-fill"></div>)
                num++
              }
    return<Card key={val.id}  className="shadow p-2 mb-3 bg-white rounded">  
    <Card.Body   >
    <Form   >
    <Col     sm={12}>
    <Row  >
    <Col  sm={2}>    

      <SimpleImageSlider       
        width={150}
        height={150}
        images={formattedUrls}
        slideDuration={0.5}
        autoPlay={true}
      />
    
       
      </Col>
      <Col   sm={8}>
      <Row    >
      <Col   sm={10}>
        <h1  >{val.title}</h1>
        <h4  >Brand : {val.brand}</h4>
        <h4 >category Type : {val.category}</h4>
        <h6 > Description: {val.description}</h6>        

      </Col>
      <Col  sm={2}>
        Qty: 
        <Form.Control  required  id={val.id} max={val.stock} min={1}
         type="number" 
         onChange={(e)=>       
          dispatch(qtychange({id:val.id,qty:e.target.value,stocks:val.stock}))
          }  value={ val.orderqty}
         
         />
        
        

      </Col>
      </Row>
     

      <div     className="d-flex   text-warning mb-2">
                                        
         Rating:      {ratingstars} 
                                       
       </div>
       
       <h6  >Stock: <span className="text-danger">{val.stock}</span> pcs</h6>
       
      </Col>
      < Col  sm={2}>
         
       <h3  > <span  className="text-muted text-decoration-line-through">${val.price}</span></h3>
       <h3 >
        ${(val.price-(val.price*(val.discountPercentage/100))).toFixed(2) }
        
        <span  >
        ({val.discountPercentage}%)</span></h3>
        <Button  variant="light text-danger " onClick={()=>  dispatch(removeitem({id:val.id}))}>Remove</Button>{' '}
      </Col>
      </Row>
    </Col>
    </Form>
    </Card.Body>  
     </Card>
   


    
  })}
 


    
    <Col sm={12}>
    <Row className='Footer'>
    <Col sm={6}> <h6> Subtotal:</h6></Col>
    <Col sm={6}> <h6> ${datas.reduce((acc,val)=> acc+(val.orderqty *(val.price-(val.price*(val.discountPercentage/100))).toFixed(2) ),0 ).toFixed(2)} </h6></Col>
    <Col sm={6}> <h6>Shipping: </h6></Col>
    <Col sm={6}> < h6>Free </h6></Col>
    <Col sm={6}> <h3>Total:</h3>  </Col>
    <Col sm={6}> <h3> ${datas.reduce((acc,val)=> acc+(val.orderqty *(val.price-(val.price*(val.discountPercentage/100))).toFixed(2) ),0 ).toFixed(2)} </h3> </Col>
    <h6 className='text-danger' >Get Daily Cash With Nespola Card</h6>
    </Row>
    </Col>        
     
    </Row>
  </Container>
  </>
}

export default Cartss