import 'bootstrap/dist/css/bootstrap.min.css';
import './PricesCards.css'
import Button from 'react-bootstrap/Button';
import check from '../icons/check.svg'
import xico from '../icons/x.svg'
function Carts(data) {
console.log(data.datas[0]);
 
    return     (
                 < div className="card-columns">
           { data.datas.map((val,j)=>{                 
                return (
                   <div key={j} className="card ">
                      
                    { <h5 > {val.type}  </h5>}
                    {<h1 > ${val.price}/month </h1>}
                   <div  className="cardtext">
                    <ul>
                    {val.available.map((val1,i)=>{
                        //console.log(val1)
                        return(
                            <li key={i}><img src={check} alt="Bootstrap" width="22" height="22"></img> {val1}</li>
                             );


                    }) }
                    

                    {val.Notavailable.map((val2 ,i)=>{
                        //console.log(val1)
                        return(
                            <li key={i} className='disab' disabled> <img src={xico} alt="Bootstrap" width="22" height="22"></img>{val2}</li>
                             );


                    }) }
                    </ul>

                    </div>
                    <div className="d-grid gap-2">
      <Button variant="primary" size="lg" className='w-100 rounded-pill'>  <b>BUTTON</b> </Button>    
    </div>
                     </div>
                    );
            
            })
        }
            </div>
    );


     
}

export default Carts;