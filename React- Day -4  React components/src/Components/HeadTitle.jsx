import React,{useState} from "react"
import Mails from './Mails'
function HeadTitle() { 











  return  <>
  <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">                          
                            <h1 className="mb-5">Generate more leads with a professional landing page!</h1>                           
                            <form className="form-subscribe" id="contactForm"> 
                            {/* data-sb-form-api-token="API_TOKEN"> */}
                                <Mails />
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  
  </>
  
}

export default HeadTitle