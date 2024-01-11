import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { API_URL } from '../App';
function Userslist({editID,seteditID}) {
    let navigate = useNavigate("")


    let [datatb,setdatatb] = useState([])
    const getdatatb = async()=>{
        try {
            seteditID('')
          let res = await axios.get(API_URL)
          setdatatb(res.data)
        } catch (error) {
          console.log(error)
        }
    }


    const Deletedata = async(blog)=>{
        try {
        let res = await axios.delete(`${API_URL}/${blog.id}`)
        if(res.status===200)
        {
            alert('Delete Successfully...!')
            getdatatb()
        }
        } catch (error) {
          console.log(error)
        }
      }

   const Editdata = async(blog)=>{
        
          console.log(blog.id)
          seteditID(blog.id)
          navigate('/AddUsers')
      }









    useEffect(()=>{
        getdatatb()
      },[])


  return <>
  <main>
                    <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                        <div className="container-xl px-4">
                            <div className="page-header-content pt-4">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto mt-4">
                                        <h1 className="page-header-title">
                                            <div className="page-header-icon">
                                            <i className="fa-solid fa-users-rectangle"></i>
                                                </div>
                                            Users List
                                        </h1>
                                        <div className="page-header-subtitle">List of Datas Getting from Mock API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                   
                    <div className="container-xl px-4 mt-n10">
                        <div className="card mb-4">
                            <div className="card-header"> DataTables</div>
                            <div className="card-body">
                                <div className="datatable-wrapper datatable-loading no-footer sortable searchable fixed-columns">
                                    <div className="datatable-top">
    
    
                                     </div>
<div className="datatable-container">
    <table id="datatablesSimple" className="datatable-table">
        <thead><tr><th data-sortable="true" >           
  
  <a  className="datatable-sorter">First Name</a></th>
  <th data-sortable="true" >
    
    <a  className="datatable-sorter">Last Name</a></th>
    <th data-sortable="true">
       
      <a className="datatable-sorter">Email</a></th>
      <th data-sortable="true">
        
        <a  className="datatable-sorter">Address</a></th>
        <th data-sortable="true">
          
          <a  className="datatable-sorter">Mobile</a></th>
          <th data-sortable="true" >
           
            <a  className="datatable-sorter"> Company </a></th>
            <th data-sortable="true" >
              
              <a  className="datatable-sorter"> State  </a></th>
              <th data-sortable="true">
                
                <a  className="datatable-sorter">City</a></th>

                <th data-sortable="true">
                
                <a  className="datatable-sorter">Actions</a></th>
                </tr></thead><tbody>
                    
                {
                datatb.map((e)=>{
                    return <tr key={e.id} data-index="0">
                        <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar me-2"><img className="avatar-img img-fluid" src={e.avatar}/></div>
                                                    {e.firstname}
                                                </div>
                                            </td>
                    
                    <td>{e.lastname}</td>
                    <td>{e.email}</td>
                    <td>{e.address}</td>
                    <td>{e.mobile}</td>
                    <td>
                    <div className="badge bg-primary text-white rounded-pill">{e.companyname}</div>
                        </td>
                    <td>{e.state}</td>
                    <td>
                        {e.city}
                    </td>
                    
                    <td>
                     <button className="btn btn-datatable btn-icon btn-transparent-dark me-2" onClick={()=>Editdata(e)} >
                     <i className="fa-regular fa-pen-to-square" ></i>
                            </button>
                      <button className="btn btn-datatable btn-icon btn-transparent-dark" onClick={()=>Deletedata(e)}>
                      <i className="fa-solid fa-trash"></i> </button>

                                            </td></tr>

                })}



                    


                                            </tbody></table></div>
<div className="datatable-bottom">
  
   
</div></div>
                            </div>
                        </div>
                        
                        
                    </div>
                </main>
                <footer className="footer-admin mt-auto footer-light">
                   
                </footer>
  
  
  </>
}

export default Userslist