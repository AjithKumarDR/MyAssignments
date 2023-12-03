import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import HeaderTitle from './Components/HeaderTitle'
import Cards from './Components/Cards'
function App() {
  const [count, setCount] = useState(0)

  return  <>
     <Nav />
     <>
          <HeaderTitle />
          <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <>
                  <Cards />
                  </>
                  </div>
            </div>
          </section>
     </>
    </>
  
}

export default App
