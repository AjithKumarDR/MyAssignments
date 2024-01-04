import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Userslist from './components/Userslist'
import AddUsers from './components/AddUsers'
import Sidenavbar from './components/Sidenavbar'

import { BrowserRouter, Navigate, Routes, Route,useNavigate} from 'react-router-dom'

export const API_URL = 'https://6595f19604335332df8366ab.mockapi.io/userdatabas'
function App() {
    
    let [editID,seteditID]=useState("");
  return     <>
  
     <nav className="topnav navbar navbar-expand shadow justify-content-between justify-content-sm-start navbar-light bg-white" id="sidenavAccordion">
           
            <button className="btn btn-icon btn-transparent-dark order-1 order-lg-0 me-2 ms-lg-2 me-lg-0" id="sidebarToggle">
            <i className="fa-solid fa-clipboard"></i>
            </button>
           
            <a className="navbar-brand pe-3 ps-4 ps-lg-2" >React Axios Task</a>
            
            
        </nav>
        <div id="layoutSidenav">
        <BrowserRouter> 
            <div id="layoutSidenav_nav">
                <Sidenavbar />
            </div>
            <div id="layoutSidenav_content">
               
                   
      <Routes>
        <Route path='/AddUsers' element={<AddUsers editID={editID} seteditID={seteditID}/>}/>
        <Route path='/Userslist' element={<Userslist editID={editID} seteditID={seteditID}/>}/>
        <Route path='*' element={<Navigate to='/Userslist'/>}/>
      </Routes>
    
                      

                
            </div>

            </BrowserRouter>
        </div>


    </>
  
}

export default App
