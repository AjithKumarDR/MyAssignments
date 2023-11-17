//#region Create Contrie Dropdown for get contries short code 
function createcard(val,val2){
    let createcard=document.createElement("div")
  createcard.setAttribute("class","card shadow-lg "+val2)
  createcard.appendChild(document.createElement("div"))
  createcard.firstChild.setAttribute("class","card-body "+val)
  
  return createcard
  }

let mainstart=document.querySelector(".mainstart")

mainstart.appendChild(createcard("maincard","h-100"))
let maincard=document.querySelector(".maincard")
maincard.appendChild(createcard("inputcard","frosted-glass"))
maincard.appendChild(createcard("outputcard","outsub frosted-glass"))
let inputcard=document.querySelector(".inputcard")
inputcard.appendChild(document.createElement("div"))
inputcard.childNodes[0].setAttribute("class","row")
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[0].setAttribute("class","col-sm-1 ")
inputcard.childNodes[0].childNodes[0].innerHTML+="<label class='select_State'><b>State :</b></label>"
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[1].setAttribute("class","col-sm-4 State")
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[2].setAttribute("class","col-sm-1 ")
inputcard.childNodes[0].childNodes[2].innerHTML+="<label class='select_Citys'><b>Citys :</b></label>"
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[3].setAttribute("class","col-sm-4 citys")

 let State=document.querySelector(".State")
 State.innerHTML+="<select    data-live-search='true'>  </select>"
 State.childNodes[0].setAttribute("class","Drp_State form-control selectpicker")
let citys=document.querySelector(".citys")
 citys.innerHTML+="<select    data-live-search='true'>  </select>"
 citys.childNodes[0].setAttribute("class","Drp_citys form-control selectpicker")
 let Drp_States=document.querySelectorAll("select")
 Drp_States[0].setAttribute("onchange","FillCitys()")
 let addoption =document.createElement("option")
  Drp_States[0].innerHTML=""
 Drp_States[0].appendChild(addoption)
  fetch('./Assets/scripts/city_list.json')
  .then((response) => response.json())
  .then((json) => {
   
    Object.keys(json).forEach(element => {
      let addoption =document.createElement("option")
      addoption.setAttribute("value",element)
      addoption.innerText=json[element]
      Drp_States[0].appendChild(addoption) 
    });
    $(".Drp_citys").selectpicker("refresh");
  });


//#region Create Citys Dropdown for get Citys ID code 
let FillCitys= ()=>{   
   
   let State_select= document.getElementsByClassName("selectpicker")[0].value
  

let promise_state = new Promise((resolve,reject)=>{    
    var res = fetch("https://data.covid19india.org/v4/min/data.min.json")    

    res.then((data)=>data.json()).then((data1)=>{        
        resolve(data1)
    });   
})
promise_state.then((data)=>{
    let Drp_state=document.querySelectorAll("select")
    Drp_state[1].setAttribute("onchange","GetCovidetails()")
    let addoption =document.createElement("option")
    Drp_state[1].appendChild(addoption) 
  
let citys= data[State_select].districts
   

    Object.keys(citys).forEach(element => {
        let addoption =document.createElement("option")
        addoption.setAttribute("value",element)
        addoption.innerText=element
        Drp_States[1].appendChild(addoption) 
      });

    $(".Drp_citys").selectpicker("refresh");
}).catch((err)=>{console.log(err)})

 
}
//#endregion











//#region Create and Fill Covid Details 

let outputcard=document.querySelector(".outputcard")   
outputcard.appendChild(document.createElement("div"))
outputcard.childNodes[0].setAttribute("class","row")
outputcard.childNodes[0].appendChild(document.createElement("div"))
outputcard.childNodes[0].childNodes[0].setAttribute("class","col-sm-6 Covidetails")
outputcard.childNodes[0].appendChild(document.createElement("div"))
outputcard.childNodes[0].childNodes[1].setAttribute("class","col-sm-6 otherDetails")



let GetCovidetails= ()=>{   
    let State_select= document.getElementsByClassName("selectpicker")[0].value
    let City_select= document.getElementsByClassName("selectpicker")[1].value
 
 let promise_Covid = new Promise((resolve,reject)=>{    
     var res = fetch("https://data.covid19india.org/v4/min/data.min.json")    
 
     res.then((data)=>data.json()).then((data1)=>{        
         resolve(data1)
     });   
 })
 promise_Covid.then((data)=>{

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  var currentTime = hours + ":" + minutes;
  today = mm + '/' + dd + '/' + yyyy;

     
   
  let Covidatas= data[State_select].districts[City_select]    
  console.log(Covidatas)
  
  let Covidetails=document.querySelector(".Covidetails")   
  
  let Confirmerd_Cases=Covidatas.total.confirmed
  let Deceased_Cases=Covidatas.total.deceased
  let Recovered_Cases=Covidatas.total.recovered
  let Tested_Cases=Covidatas.total.tested
  let Vaccinated1_Cases=Covidatas.total.vaccinated1
  let Vaccinated2_Cases=Covidatas.total.vaccinated2
  let Population=Covidatas.meta.population
  let LastUpdate=Covidatas.meta.tested.date
  let Confirmerd= Math.round(Confirmerd_Cases * (100/Population))
  let Deceased= Math.round(Deceased_Cases * (100/Confirmerd_Cases))
  let Recovered= Math.round(Recovered_Cases * (100/Confirmerd_Cases))
  let Tested= Math.round(Tested_Cases * (100/Population))
  let Vaccinated1=Math.round(Vaccinated1_Cases * (100/Population))
  let Vaccinated2=Math.round(Vaccinated2_Cases * (100/Population))

 document.querySelector(".mainstart").setAttribute("class","container-fluid  mainstart")

  Covidetails.innerHTML=`      
  <div class="container">
    <h1>Confirmerd Cases:</h1>   
    <p> No Of Confirmerd Cases: ${Confirmerd_Cases}</p>    
    <div class="progress">
      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:${Confirmerd}%">${Confirmerd}%</div>
    </div>
  </div>
  <div class="container">
    <h1>Deceased Cases:</h1>      
    <p> No Of Deceased Cases: ${Deceased_Cases}</p>   
    <div class="progress">
      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:${Deceased}%">${Deceased}%</div>
    </div>
  </div>
  <div class="container">
    <h1>Recovered Cases:</h1>     
    <p> No Of Recovered Cases: ${Recovered_Cases}</p> 
    <div class="progress">
      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:${Recovered}%">${Recovered}%</div>
    </div>
  </div>
  <div class="container">
    <h1>Tested Cases:</h1>      
    <p> No Of Tested Cases: ${Tested_Cases}</p> 
    <div class="progress">
      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:${Tested}%">${Tested}%</div>
    </div>
  </div>
  <div class="container">
    <h1>Vaccinated1 Cases:</h1>  
    <p> No Of Vaccinated1 Cases: ${Vaccinated1_Cases}</p> 
    <div class="progress">
      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:${Vaccinated1}%">${Vaccinated1}%</div>
    </div>
  </div>
  <div class="container">
    <h1>vaccinated2 Cases:</h1>   
    <p> No Of vaccinated2 Cases: ${Vaccinated2_Cases}</p> 
    <div class="progress">
      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" style="width:${Vaccinated2}%">${Vaccinated2}%</div>
    </div>
  </div>`


  let otherDetails=document.querySelector(".otherDetails")   
  otherDetails.innerHTML=`<div class="row">     
   <div class="col-sm-4 calenderico">
   <i class="fa-regular fa-calendar-days"></i>
   </div>     
    <div class="col-sm-8 datedetail">
     ${today} </div>    
       <div class="col-sm-4 locationico">
       <i class="fa-solid fa-map-location-dot"></i>
       </div>      
       <div class="col-sm-8 locationDet">
       ${City_select},${document.querySelector(".selectpicker").selectedOptions[0].innerHTML}
       </div>    
         <div class="col-sm-4 Populationico"> 
         <i class="fa-solid fa-people-group"></i>
         </div>      
         <div class="col-sm-8 PopulationDet">
         <b>Population:</b> ${Population}  </div>      
         <div class="col-sm-4 LastUpdateico"> 
         <i class="fa-solid fa-calendar-check"></i>
          </div>  
              <div class="col-sm-8 LastUpdate">
              <b> LastUpdate:</b> ${LastUpdate}</div>     
              </div>` 
 
 
 }).catch((err)=>{console.log(err)})
  
 }
//#endregion

$(".Drp_citys").selectpicker("refresh");