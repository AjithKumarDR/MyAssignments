import React,{useState,useEffect} from 'react'
import {  useNavigate } from 'react-router-dom'
function Sidenavbar() {
    let navigate = useNavigate();

  

  return <>
  <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                            
                            <div className="sidenav-menu-heading d-sm-none">Account</div>
                            
                            <a className="nav-link d-sm-none" >
                                <div className="nav-link-icon">
                                    </div>
                                Alerts
                                <span className="badge bg-warning-soft text-warning ms-auto">4 New!</span>
                            </a>
                            
                            <a className="nav-link d-sm-none" >
                                <div className="nav-link-icon">
                                    </div>
                                Messages
                                <span className="badge bg-success-soft text-success ms-auto">2 New!</span>
                            </a>
                            
                            <div className="sidenav-menu-heading">Home</div>
                           
                            <a className="nav-link collapsed"   onClick={()=>   navigate('/Userslist')} 
                            
                             data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
                                <div className="nav-link-icon"  >
                                <i className="fa-regular fa-rectangle-list"></i>
                                </div>
                                
                                 Dashboards
                                
                            </a>
                            <div className="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                    
                                    
                                </nav>
                            </div>
                        
                            <div className="sidenav-menu-heading">User Management</div>
                           
                            <a className="nav-link collapsed"   onClick={()=> navigate('/AddUsers')  } 
                           
                            data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="nav-link-icon">
                                <i className="fa-solid fa-user-plus"></i>
                                </div>
                                Add User
                                
                            </a>                         

                           
                            
                            
                            
                                                    
                            
                        </div>
                    </div>
               
                    
                </nav>
  
  </>
}

export default Sidenavbar