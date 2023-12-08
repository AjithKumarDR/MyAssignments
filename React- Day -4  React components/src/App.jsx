import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Mails from './Components/Mails'
import './App.css'
import Navb from './Components/Nav'
import Footer from './Components/Footer'
import HeadTitle from './Components/HeadTitle'
import Section from './Components/Section'
import bgimg1 from './assets/imgs/bg-showcase-1.jpg'
import bgimg2 from './assets/imgs/bg-showcase-2.jpg'
import bgimg3 from './assets/imgs/bg-showcase-3.jpg'
import person from './assets/imgs/testimonials-1.jpg'
import person2 from './assets/imgs/testimonials-2.jpg'
import person3 from './assets/imgs/testimonials-3.jpg'
function App() {
  //const [count, setCount] = useState(0)
  let data=[
    {
    section_Class:"features-icons bg-light text-center",
    section_Id: "",
    container_Class:"container",
    Header_text:"",
    Header_Class:"",
    rows_datas:[
       {Row_class:"row",
        Columns_datas:[
            {Column_Class:"col-lg-4",
            Column_style:"",
            Balance_datas:<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">            <div className="features-icons-icon d-flex"><i className="bi-window m-auto text-primary"></i></div>            <h3>Fully Responsive</h3>            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>        </div>

        
        
        },
            {Column_Class:"col-lg-4",
            Column_style:"",
            Balance_datas: <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className="bi-layers m-auto text-primary"></i></div>
            <h3>Bootstrap 5 Ready</h3>
            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 5 framework!</p>
        </div>},
            {Column_Class:"col-lg-4",
            Column_style:"",
            Balance_datas:<div className="features-icons-item mx-auto mb-0 mb-lg-3">
            <div className="features-icons-icon d-flex"><i className="bi-terminal m-auto text-primary"></i></div>
            <h3>Easy to Use</h3>
            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
        </div>}         

        ]
       }  
    ],
    
  },
  {
    section_Class:"showcase",
    section_Id: "",
    container_Class:"container-fluid p-0",
    Header_text:"",
    Header_Class:"",
    rows_datas:[
       {Row_class:"row g-0",
       Columns_datas:[
        {Column_Class:"col-lg-6 order-lg-2 text-white showcase-img",
            //Column_style:"background-image: url('assets/img/bg-showcase-1.jpg')",
            Column_style:bgimg1,
            Balance_datas:""
        
        
        },
        {Column_Class:"col-lg-6 order-lg-1 my-auto showcase-text",
            Column_style:"",
            Balance_datas:<> <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
          </>
          }
                   

        ]
       },
       {Row_class:"row g-0",
       Columns_datas:[
           {Column_Class:"col-lg-6 text-white showcase-img",
           //Column_style:"background-image: url('assets/img/bg-showcase-2.jpg')",
           Column_style:bgimg2,
           Balance_datas:""
       
       
       },
           {Column_Class:"col-lg-6 my-auto showcase-text",
           Column_style:"",
           Balance_datas:<>
           <h2>Updated For Bootstrap 5</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
           </>}
                  

       ]},
       {Row_class:"row g-0",
       Columns_datas:[
           {Column_Class:"col-lg-6 order-lg-2 text-white showcase-img",
           //Column_style:"background-image: url('assets/img/bg-showcase-3.jpg')",
           Column_style:bgimg3,
           Balance_datas:""
       
       
       },
           {Column_Class:"col-lg-6 order-lg-1 my-auto showcase-text",
           Column_style:"",
           Balance_datas:<>
           <h2>Easy to Use & Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
           </>}
                   

       ]}, 
  
    ],
    
  },
  {
    section_Class:"testimonials text-center bg-light",
    section_Id: "",
    container_Class:"container",
    Header_text:"What people are saying...",
    Header_Class:"mb-5",
    rows_datas:[
       {Row_class:"row",
       Columns_datas:[
            {Column_Class:"col-lg-4",
            Column_style:"",
            Balance_datas:
            <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src={person} alt="..." />
                            <h5>Margaret E.</h5>
                            <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                        </div>

        
        
        },
            {Column_Class:"col-lg-4",
            Column_style:"",
            Balance_datas:<div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={person2} alt="..." />
            <h5>Fred S.</h5>
            <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
        </div>},
            {Column_Class:"col-lg-4",
            Column_style:"",
            Balance_datas:<div className="testimonial-item mx-auto mb-5 mb-lg-0">
            <img className="img-fluid rounded-circle mb-3" src={person3} alt="..." />
            <h5>Sarah W.</h5>
            <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
        </div>}         

        ]
       } 
  
    ],
    
  }
  ,
  {
    section_Class:"call-to-action text-white text-center",
    section_Id: "signup",
    container_Class:"container position-relative",
    Header_text:"",
    Header_Class:"",
    rows_datas:[
       {Row_class:"row justify-content-center",
       Columns_datas:[
            {Column_Class:"col-xl-6",
            Column_style:"",
            Balance_datas:
            <><h2 class="mb-4">Ready to get started? Sign up now!</h2>
            <form className="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
            {<Mails />}
            </form></>

        
        
        }        

        ]
       }
        
  
    ],
    
  }
  
]
  return (
    <>
      <Navb />
      <HeadTitle />
      <Section datas={data}/>
      <Footer />
    </>
  )
}

export default App
