import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../App';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import userico from '../assets/icons/user-placeholder.svg'
function AddUsers({editID,seteditID}) {
    let [editid,seteditid] = useState("")
    let [firstname,setfirstname] = useState("")
    let [lastname,setlastname] = useState("")
    let [address,setaddress] = useState("")
    let [email,setmail] = useState("")
    let [state,setstate] = useState("")
    let [city,setcity] = useState("")
    let [mobile,setmobile] = useState("")
    let [companyname,setcompany] = useState("")
    let [companybs,setBusiness] = useState("")
    let [avatar,setavatar] = useState("")
    let navigate = useNavigate("")
    const getdatatb = async()=>{
        try {
          let res = await axios.get(API_URL+"/"+editID)
          console.log(res.data)
          seteditid(res.data.id)
          setfirstname(res.data.firstname)
          setlastname(res.data.lastname)
          setaddress(res.data.address)
          setmail(res.data.email)
          setstate(res.data.state)
          setcity(res.data.city)
          setmobile(res.data.mobile)
          setcompany(res.data.companyname)
          setBusiness(res.data.companybs)
          setavatar(res.data.avatar)
        } catch (error) {
          console.log(error)
        }
    }

    const handleSubmit= async()=>{
        try {
            let res 
         if (editid!=""){

             res = await axios.put(`${API_URL}/${editid}`,{
                firstname,
                avatar,
                lastname,
                email,
                address,
                state,
                city,
                mobile,
                companyname,
                companybs,          
               
             })
             
         }
         else{
             res = await axios.post(API_URL,{
                firstname,
                avatar,
                lastname,
                email,
                address,
                state,
                city,
                mobile,
                companyname,
                companybs,          
               
             })
         }
         

         if(res.status===200)
         {
            editID=''
            seteditid('')
            setfirstname('')
            setlastname('')
            setaddress('')
            setmail('')
            setstate('')
            setcity('')
            setmobile('')
            setcompany('')
            setBusiness('')
            setavatar('')
            
            alert('Update Successfully')        

           




             navigate('/Userslist')
          }
         if(res.status===201)
         {
            seteditid('')
            setfirstname('')
            setlastname('')
            setaddress('')
            setmail('')
            setstate('')
            setcity('')
            setmobile('')
            setcompany('')
            setBusiness('')
            setavatar('')
           alert('ADD ADD Successfully')
            navigate('/Userslist')
         }
         
        } catch (error) {
           console.log(error)
        }
     
       }
   
 console.log( "user id" +editID)
if (editID!=""){ useEffect(()=>{ getdatatb() },[])}

  return <>
  <main>
                    <header className="page-header page-header-compact page-header-light border-bottom bg-white mb-4">
                        <div className="container-xl px-4">
                            <div className="page-header-content">
                                <div className="row align-items-center justify-content-between pt-3">
                                    <div className="col-auto mb-3">
                                        <h1 className="page-header-title">
                                            Add User
                                        </h1>
                                    </div>
                                    <div className="col-12 col-xl-auto mb-3">
                                        <a className="btn btn-sm btn-light text-primary"  onClick={()=>   navigate('/Userslist')} >
                                        <i className="fa-solid fa-left-long"></i>
                                        Back to Users List
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    <div className="container-xl px-4 mt-4">
                        <div className="row">
                            <div className="col-xl-4">
                               
                                <div className="card mb-4 mb-xl-0">
                                    <div className="card-header">Profile Picture</div>
                                    <div className="card-body text-center">

                                        <img className="img-account-profile rounded-circle mb-2" src= {avatar!=""?avatar:userico} alt=""/>
                                        
                                        <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                                        <label className="small mb-1" htmlFor="inputImageurl">Image URL</label>
                                                    <input className="form-control" id="inputImageurl" type="text" placeholder="Enter Image URL" onChange={(e)=>setavatar(e.target.value)} value={avatar} required/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-8">
                              
                                <div className="card mb-4">
                                    <div className="card-header">Account Details</div>
                                    <div className="card-body">
                                        <form >
                                            
                                            <div className="row gx-3 mb-3">
                                               
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                                                    <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" onChange={(e)=>setfirstname(e.target.value)} value={firstname} required/>
                                                </div>
                                              
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                                    <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" onChange={(e)=>setlastname(e.target.value)} value={lastname} required/>
                                                </div>
                                            </div>
                                          
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                                <input className="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" onChange={(e)=>setmail(e.target.value)} value={email} required/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputaddress"> Address</label>
                                                <textarea className="form-control" id="inputaddress" as="area" placeholder="Enter your Address" onChange={(e)=>setaddress(e.target.value)} value={address} required> </textarea>
                                            </div>
                                            
                                            
                                            
                                            <div className="row gx-3 mb-3">
                                               
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputState">State</label>
                                                    <input className="form-control" id="inputState" type="text" placeholder="Enter your first name" onChange={(e)=>setstate(e.target.value)} value={state} required/>
                                                </div>
                                              
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputCity">City</label>
                                                    <input className="form-control" id="inputCity" type="text" placeholder="Enter your last name" onChange={(e)=>setcity(e.target.value)} value={city} required/>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputmobile"> Mobile</label>
                                                <input className="form-control" id="inputmobile" as="area" placeholder="Enter your Address" onChange={(e)=>setmobile(e.target.value)} value={mobile} required/> 
                                            </div>
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputCompany"> Company</label>
                                                <input className="form-control" id="inputCompany" as="area" placeholder="Enter your Address" onChange={(e)=>setcompany(e.target.value)} value={companyname} required/> 
                                            </div>
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputCompanybs"> Business</label>
                                                <input className="form-control" id="inputCompanybs" as="area" placeholder="Enter your Address" onChange={(e)=>setBusiness(e.target.value)} value={companybs} required/> 
                                            </div>
                                            
                                            <button className="btn btn-primary" onClick={()=>handleSubmit()} type="button">Add user</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
  
  
  </>
}

export default AddUsers
