//#region Create Contrie Dropdown for get contries  short code 
//#region cards UI create function
function createcard(val,val2){
    let createcard=document.createElement("div")
  createcard.setAttribute("class","card shadow-lg "+val2)
  createcard.appendChild(document.createElement("div"))
  createcard.firstChild.setAttribute("class","card-body "+val)
  
  return createcard
  }
  //#endregion

  //#region Create UI  for dropdowns
let mainstart=document.querySelector(".mainstart")

mainstart.appendChild(createcard("maincard","h-100"))
let maincard=document.querySelector(".maincard")
maincard.appendChild(createcard("inputcard","frosted-glass"))
maincard.appendChild(createcard("outputcard","h-75 frosted-glass"))
let inputcard=document.querySelector(".inputcard")
inputcard.appendChild(document.createElement("div"))
inputcard.childNodes[0].setAttribute("class","row")
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[0].setAttribute("class","col-sm-1 ")
inputcard.childNodes[0].childNodes[0].innerHTML+="<label class='select_Contrie'><b>Contrie :</b></label>"
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[1].setAttribute("class","col-sm-4 Countries")
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[2].setAttribute("class","col-sm-1 ")
inputcard.childNodes[0].childNodes[2].innerHTML+="<label class='select_year'><b>Year :</b></label>"
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[3].setAttribute("class","col-sm-4 Years")

 let countries=document.querySelector(".Countries")
 countries.innerHTML+="<select    data-live-search='true'>  </select>"
 countries.childNodes[0].setAttribute("class","Drp_countries form-control selectpicker")
let Years=document.querySelector(".Years")
 Years.innerHTML+="<select    data-live-search='true'>  </select>"
 Years.childNodes[0].setAttribute("class","Drp_Years form-control selectpicker")
 //#endregion
 
  //#region Create Promise for get contries datas from API 
let promise_countries = new Promise((resolve,reject)=>{    
    var res = fetch("https://restcountries.com/v3.1/all")    
    res.then((data)=>data.json()).then((data1)=>{        
        resolve(data1)
    });   
})

promise_countries.then((data)=>{
    let Drp_countries=document.querySelectorAll("select")
    Drp_countries[0].setAttribute("onchange","FillYears()")
    let addoption =document.createElement("option")
    Drp_countries[0].appendChild(addoption) 
  

    data.forEach(val => {
        let addoption =document.createElement("option")
        addoption.setAttribute("value",val.altSpellings[0])
        addoption.innerText=val.name.common
        Drp_countries[0].appendChild(addoption)        
    });   
    
}).catch((err)=>{console.log(err)})
//#endregion
//#endregion

//#region Create year Dropdown for get year 
let FillYears= ()=>{   
   
   let Drp_Years=document.querySelectorAll("select")
   Drp_Years[1].setAttribute("onchange","getHolidays()") 
  
   let addoption =document.createElement("option")
   Drp_Years[1].innerHTML=""
   Drp_Years[1].appendChild(addoption)
   let currentYear = new Date().getFullYear(), years = [];
   let startYear =  1980;  
   while ( startYear <= currentYear ) {
    let year=startYear++
    let addoption =document.createElement("option")
        addoption.setAttribute("value",year)
        addoption.innerText=year
        Drp_Years[1].appendChild(addoption)         
   } 
   $(".Drp_Years").selectpicker("refresh");

}
//#endregion






//#region Create and Fill Holiday Details from API
let testtt
let outputcard=document.querySelector(".outputcard")   
 outputcard.appendChild(document.createElement("div"))
outputcard.childNodes[0].setAttribute("id","accordion")
outputcard.childNodes[0].setAttribute("class","Holidays")
let getHolidays= ()=>{   
    let promise_Holidays = new Promise((resolve,reject)=>{    
        let Countrie_select= document.getElementsByClassName("selectpicker")[0].value
        let Year_select= document.getElementsByClassName("selectpicker")[1].value
        var res = fetch(`https://calendarific.com/api/v2/holidays?&api_key=WAupHXLVT1IbqriOxTezG2r0CwuECs11&country=${Countrie_select}&year=${Year_select}`)   
        res.then((data)=>data.json()).then((data1)=>{        
            resolve(data1)
            
        });   
    })

    promise_Holidays.then((data)=>{
        let Holidays=document.querySelector(".Holidays") 
        Holidays.innerHTML =""
      data.response.holidays.forEach((val,index) => { 
        let card =`<div class="card">
        <div class="card-header">
          <a class=" collapsed card-link " data-toggle="collapse" href="#Holi_${index}">
            <h2> <b> Date :</b> ${val.date.iso}           <b>Festival: </b>${val.name}</h2>
          </a>
        </div>
        <div id="Holi_${index}" class="collapse " data-parent="#accordion">
          <div class="card-body">
            <h3><b>description :</b> ${val.description} </h3>
            <h3><b>Category :</b> ${val.type} </h3>
            <h3><b>Type :</b> ${val.primary_type} </h3>
          </div>
        </div>
      </div>`        
        
      Holidays.innerHTML +=card        
        console.log(val)
    
    } )    

 document.querySelector(".mainstart").setAttribute("class","container-fluid  mainstart")
    }).catch((err)=>{console.log(err)})
      
}
//#endregion


$(".Drp_Years").selectpicker("refresh");