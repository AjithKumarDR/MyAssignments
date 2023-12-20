import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import guvilog from'./assets/imgs/Guvi-blog-logo.webp'
import Blog from './components/Blog'
import FullstackBlog from   './assets/imgs/top-ways-to-assess-soft-skills-in-full-stack-developers.webp'
import FullstackBlog1 from   './assets/imgs/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp'
import FullstackBlog2 from   './assets/imgs/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp'
import DatasciBlog from   './assets/imgs/Feature-image-1-1536x768.webp'
import DatasciBlog1 from   './assets/imgs/data-science-webinars-and-workshops-1536x804.webp'
import CyberSec from   './assets/imgs/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp'
import Careerblog from   './assets/imgs/top_product_based_companies_that_don_t_require_coding.webp'
import Careerblog1 from   './assets/imgs/8bfd01c18be1b5059bc0d7770d9dabf1.webp'
import Careerblog2 from   './assets/imgs/Featured-Image-1536x804.webp'
import Careerblog3 from   './assets/imgs/cybersecuity-.gif'
import CYSECA from './assets/imgs/July-last-week-offer-cover-1536x340.webp'
 import guviblog from './assets/imgs/blog-header-1536x236.webp'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
function App() {
  let [database,setdatabase] = useState([
 {
   Title:{
    all:{
    Imgcontent: guviblog,
    H1content:"",
    p1content:"",
    p2content:""}
    ,
    fullstack:{
      Imgcontent:"",
      H1content:"Full Stack Development",
      p1content:"Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!",
      p2content:"The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!"
    },
    datascience:{
        Imgcontent:"",
        H1content:"Data Science",
        p1content:"One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.",
        p2content:"The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!"
      },
      cybersecurity:{
        Imgcontent:CYSECA,
        H1content:"",
        p1content:"",
        p2content:""
      }
      ,
      career:{
        Imgcontent:CYSECA,
        H1content:"",
        p1content:"",
        p2content:""
      }

 },
 Blogs:[{
  Coursetype:"fullstack",
  Imgcontent:FullstackBlog,
  H1content:"Top Ways to Assess Soft Skills in Full Stack Developers in 2024",
    pcontent:"When you’re hiring a full-stack developer, what are the most important things you look for?",
    // Readto:"",
    Datedetails:"15 November 2023  ",
    Commands:"No Comments"
 },{
  Coursetype:"fullstack",
  Imgcontent:FullstackBlog1,
  H1content:"Top Differences: Full Stack Developer vs Software Engineer 2024",
    pcontent:"A Full Stack Developer is a tech all-rounder. They work on both the front and",
    // Readto:"",
    Datedetails:"15 November 2023  ",
    Commands:"No Comments"
 }, 
 {
  Coursetype:"fullstack",
  Imgcontent:FullstackBlog2,
  H1content:"Horizontal vs Vertical Scaling for Efficient System Design",
    pcontent:"In the world of system design, envision a digital skyscraper – a multifaceted structure built",
    // Readto:"",
    Datedetails:"10 November 2023  ",
    Commands:"No Comments"
 },  
 {
  Coursetype:"datascience",
  Imgcontent:DatasciBlog,
  H1content:"Impact of Certification Programs on Hiring Data Scientists",
    pcontent:"Data scientists are the creators behind transforming the raw data into edible data insights. These",
    // Readto:"",
    Datedetails:"15 November 2023  ",
    Commands:"No Comments"
 }, 
 {
  Coursetype:"datascience",
  Imgcontent:DatasciBlog1,
  H1content:"Data Science Webinars and Workshops",
    pcontent:"In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
    // Readto:"",
    Datedetails:"9 August 2023   ",
    Commands:"No Comments"
 }, 
 {
  Coursetype:"cybersecurity",
  Imgcontent:CyberSec,
  H1content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    pcontent:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
    // Readto:"",
    Datedetails:"4 December 2023  ",
    Commands:"No Comments"
 }, 
 {
  Coursetype:"cybersecurity",
  Imgcontent:Careerblog3,
  H1content:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    pcontent:"Look around today, you will witness that we are more reliant on technology and devices",
    // Readto:"",
    Datedetails:"20 December 2022   ",
    Commands:"1 Comments"
 },
 {
  Coursetype:"cybersecurity",
  Imgcontent:Careerblog1,
  H1content:"Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?",
    pcontent:"Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
    // Readto:"",
    Datedetails:"22 June 2022  ",
    Commands:"No Comments"
 }, 
 {
  Coursetype:"career",
  Imgcontent:Careerblog,
  H1content:"Top 5 Product-Based Companies That Don’t Require Coding",
    pcontent:"Every one of us wants to work in top product-based companies, Right? But, Not everyone",
    // Readto:"",
    Datedetails:"24 November 2023  ",
    Commands:"No Comments"
 },  {
  Coursetype:"career",
  Imgcontent:Careerblog2,
  H1content:"9 Best Product-Based Companies for Project Management",
    pcontent:"In today’s tech-driven world, the demand for project managers is higher than before. The workload",
    // Readto:"",
    Datedetails:"1 December 2023   ",
    Commands:"No Comments"
 }, 

]

 }])



  return <>
       
        <Navbar key={'sm'} expand={'sm'} className="bg-body-tertiary mb-3 titnav">
          <Container >
            <Navbar.Brand >
            <img
              src={guvilog}              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'sm'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'sm'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'sm'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'sm'}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 topnav">
                  <Nav.Link >COURSES</Nav.Link>
                  <NavDropdown
                    title="LIVE CLASSES"
                    id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                  >
                    <NavDropdown.Item >
                      <h5>Zen Class</h5>
                      <p>LIVE Online Intensive Program + 100% Placement Support</p>

                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>Full Stack Development Program (FSD)</h5>
                      <p>Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more</p>

                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>IIT-M Advanced Programming & Data Science Program</h5>
                      <p>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</p>

                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>Automation & Testing Program</h5>
                      <p>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</p>

                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item  className='Carademe'>
                      <h5> Explore More Programs</h5>
                   
                    </NavDropdown.Item>
                  </NavDropdown>


                  <NavDropdown
                    title="PRACTICE"
                    id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                  >
                    <NavDropdown.Item >
                    <h5>Codekata</h5>
                      <p>Sharpen your coding skills, prepare for interviews</p>


                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>Webkata</h5>
                      <p>Build basic Frontend and Backend development skills</p>

                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>IDE - Online Compiler</h5>
                      <p>Run & test your code in any programming language</p>

                    </NavDropdown.Item>
                    
                    
                    
                  </NavDropdown>

                  <NavDropdown
                    title="RESOURCES"
                    id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                  >
                    <NavDropdown.Item >
                      <h5>REWARDS</h5>
                      </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>REFERRAL</h5>
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item >
                    <h5>FORUM SUPPORT</h5>
                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>BLOGS</h5>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                    title="OUR PRODUCTS"
                    id={`offcanvasNavbarDropdown-expand-${'sm'}`}
                  >
                    <NavDropdown.Item >
                    <h5>HackerKid</h5>
                      <p>Coding classes platform for K-12 children</p>


                    </NavDropdown.Item>
                    <NavDropdown.Item >
                    <h5>GUVI for Corporates</h5>
                      <p>Meet your hiring needs at ease</p>

                    </NavDropdown.Item>
                    
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>



        <BrowserRouter>
  <div id="wrapper">
     
      <Routes>
        <Route path="/:all" element={<Blog database={database} setdatabase={setdatabase}/>}/>
        <Route path="/:fullstack" element={<Blog database={database} setdatabase={setdatabase}/>}/>
        <Route path="/:datascience" element={<Blog database={database} setdatabase={setdatabase}/>}/>
        <Route path="/:cybersecurity" element={<Blog database={database} setdatabase={setdatabase}/>}/>
        <Route path="/:career" element={<Blog usdatabaseer={database} setdatabase={setdatabase}/>}/>
        <Route path="*" element={<Navigate to='/all'/>}/>
      </Routes>
  </div>
  </BrowserRouter>

   
     


     
    </>
  
}

export default App
