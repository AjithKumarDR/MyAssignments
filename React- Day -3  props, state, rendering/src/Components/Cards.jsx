import React,{useState} from "react"
//function Cards({cart,setcart,toggle,settoggle,product}) { 
function Cards({cart,setcart,product}) { 
// let[value,setvalue]=useState(0)
let ratingstars=[]
let num =1
//#region Create Ratting Starts given 
while(num<=product.ratings){
    ratingstars.push(<div key={num} className="bi-star-fill"></div>)
num++
}
//#endregion
let[toggle,settoggle]=useState(true)
    return  <>
    <div className="col mb-5">
        
                        <div className="card h-100">
                          
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>{product.sale?"Sale":""}</div>
                           
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                           
                            <div className="card-body p-4">
                                <div className="text-center">
                                  
                                    <h5 className="fw-bolder">{product.name}</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        
                                          {ratingstars}
                                       
                                    </div>
                                   
                                    {product.product_price!=""? <span className="text-muted text-decoration-line-through">
                                    {product.product_price}</span>: 
                                     product.actual_price  +" - "  }
                                    { " "+product.salse_price}
                                </div>
                            </div>
                           
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                {/* <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={()=>setvalue(value+1)}>Add to cart</button></div> */}
                                <div className="text-center">
                                   {toggle? <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                    setcart(cart+1)//Method 1
                                    settoggle(!toggle) //Method 1
                                }}>Add to cart</button>:
                                    <button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setcart(value => value-1)//Method 2
                                        // settoggle(value2=>{
                                        //     !value2
                                        // }) //Method 2
                                        settoggle(value2=>!value2) //Method 2 Short Hand
                                        }}>Remove from cart</button>}
                                    </div>
                            </div>
                        </div>
                    </div>
  
      </>
    
  }
  
  export default Cards
  