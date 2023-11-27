import './App.css';
import Carts from './Component/Index';

function App() {
 let Price_card=[
  {
    type:"FREE",
    price:"0",
    available:["Single User","50GB Storage","Unlimited Public Projects","Community Access"],
    Notavailable:["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
  },
  {
    type:"PLUS",
    price:"9",
    available:["Single User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
    Notavailable:["Monthly Status Reports"]
  },
  {
    type:"PRO",
    price:"49",
    available:["Single User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
    Notavailable:[]
  }
 ]

  return (
    <div className="App">
     <Carts datas={Price_card} />
    </div>
  );
}

export default App;
