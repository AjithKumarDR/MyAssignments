import React,{useState} from "react"
import './App.css'
import Nav from './Components/Nav'
import HeaderTitle from './Components/HeaderTitle'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
function App() {
  let[cart,setcart]=useState(0)
  //let[toggle,settoggle]=useState(true)
  //#region  Product details
  let product=[{
    sale:false,
    name:"Fancy Product",
    ratings:0,
    product_price:"",
    actual_price:"$40.00",
    salse_price:"$80.00",

  },{
    sale:true,
    name:"Special Item",
    ratings:5,
    product_price:"$20.00",
    actual_price:"",
    salse_price:"$18.00",

  },{
    sale:true,
    name:"Sale Item",
    ratings:0,
    product_price:"$50.00",
    actual_price:"",
    salse_price:"$25.00",

  },{
    sale:false,
    name:"Popular Item",
    ratings:5,
    product_price:" ",
    actual_price:"",
    salse_price:"$40.00",

  },{
    sale:true,
    name:"Sale Item",
    ratings:0,
    product_price:"$50.00",
    actual_price:"",
    salse_price:"$25.00",

  },{
    sale:false,
    name:"Fancy Product",
    ratings:0,
    product_price:"",
    actual_price:"$120.00",
    salse_price:"$280.00",

  },{
    sale:true,
    name:"Special Item",
    ratings:5,
    product_price:"$20.00",
    actual_price:"",
    salse_price:"$18.00",

  },{
    sale:false,
    name:"Popular Item",
    ratings:5,
    product_price:" ",
    actual_price:"",
    salse_price:"$40.00",

  },
]
//#endregion
  return  <>
  
     <Nav cart={cart} setcart={setcart} product={product} />
     <>
          <HeaderTitle />
          <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {product.map((e,i)=>{
                //return  <Cards cart={cart} setcart={setcart} toggle={toggle} settoggle={settoggle} product={e} key={i} />
                return  <Cards cart={cart} setcart={setcart} product={e} key={i} />
                })}
                  
                 
                  </div>
            </div>
          </section>
     </>
     <Footer />
    </>
  
}

export default App
