import React,{useState} from "react"
import Mails from './Mails'


function Section({datas}) { 
    let Sections=[]
    // while(num<=product.ratings){
    //     Sections.push(<div key={num} className="bi-star-fill"></div>)    
    // }
    datas.map((data,i)=>{
        //console.log(data)
        Sections.push(<section key={i} className={data.section_Class } id={data.section_Id!=""?data.section_Id:""} >
          {data.Header_text!=""?<h2 className={data.Header_Class}>{data.Header_text}</h2>:""}
          
        <div key={i} className={data.container_Class}>
          {
            data.rows_datas.map((val,j)=>{
             // console.log(val)
             return( 
             <div key={j} className={val.Row_class}>
                 
                {val.Columns_datas.map((colu,k)=>{
                  console.log(colu);
                  
                  
                  return(<div key={k} className={colu.Column_Class}  style={ colu.Column_style!=""?{ backgroundImage:`url(${colu.Column_style})`}:{}} >
                    { colu.Balance_datas }

                  </div>)

                })}


              </div>)
            })
          }

        </div>
        </section>)
    })
    









  return  <>
 {Sections}
  
  </>
  
}

export default Section