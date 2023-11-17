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
inputcard.childNodes[0].childNodes[2].innerHTML+="<label class='select_Citys'><b>Citys :</b></label>"
inputcard.childNodes[0].appendChild(document.createElement("div"))
inputcard.childNodes[0].childNodes[3].setAttribute("class","col-sm-4 citys")

 let countries=document.querySelector(".Countries")
 //countries.appendChild(document.createElement("select"))

 countries.innerHTML+="<select    data-live-search='true'>  </select>"
 countries.childNodes[0].setAttribute("class","Drp_countries form-control selectpicker")


let citys=document.querySelector(".citys")
 //citys.appendChild(document.createElement("select"))
 citys.innerHTML+="<select    data-live-search='true'>  </select>"
 citys.childNodes[0].setAttribute("class","Drp_citys form-control selectpicker")

let promise_countries = new Promise((resolve,reject)=>{    
    var res = fetch("https://restcountries.com/v3.1/all")    

    res.then((data)=>data.json()).then((data1)=>{        
        resolve(data1)
    });   
})
promise_countries.then((data)=>{
    let Drp_countries=document.querySelectorAll("select")
    Drp_countries[0].setAttribute("onchange","FillStates()")
    let addoption =document.createElement("option")
    Drp_countries[0].appendChild(addoption) 
  

    data.forEach(val => {
        let addoption =document.createElement("option")
        addoption.setAttribute("value",val.altSpellings[0])
        addoption.innerText=val.name.common
        Drp_countries[0].appendChild(addoption)        
    });   
    $(".Drp_citys").selectpicker("refresh");
}).catch((err)=>{console.log(err)})
//#endregion

//#region Create Citys Dropdown for get Citys ID code 
let FillStates= ()=>{   
   //let country_select= document.querySelector(".Drp_countries").value
   let country_select= document.getElementsByClassName("selectpicker")[0].value
   let Drp_citys=document.querySelectorAll("select")
   Drp_citys[1].setAttribute("onchange","getWeatherDet()")
   
  
   let addoption =document.createElement("option")
   Drp_citys[1].innerHTML=""
   Drp_citys[1].appendChild(addoption)

  

    fetch('./Assets/scripts/city_list.json')
    .then((response) => response.json())
    .then((json) => {
     let citys= json.filter((index)=> index.country==country_select)
     citys.forEach(element => {
        let addoption =document.createElement("option")
        addoption.setAttribute("value",element.id)
        addoption.innerText=element.name
        Drp_citys[1].appendChild(addoption) 
      });
      $(".Drp_citys").selectpicker("refresh");
    });

 
}
//#endregion

let weatherico={
    "Clouds"  :  '<i class="fa-solid fa-cloud fa-beat-fade"></i>',
    "Mist"    : '<i class="fa-solid fa-smog fa-beat-fade"></i>',
    "Clear"   : '<i class="fa-solid fa-sun fa-beat-fade"></i>',
    "haze"    :'<i class="fa-solid fa-cloud-sun fa-beat-fade"></i>',
    "Fog"     :'<i class="fa-solid fa-cloud-meatball fa-beat-fade"></i>',
    "Rain"    :'<i class="fa-solid fa-cloud-showers-heavy fa-beat-fade"></i>',

}




//#region Create and Fill weather Details 
let testtt
let outputcard=document.querySelector(".outputcard")   
outputcard.appendChild(document.createElement("div"))
outputcard.childNodes[0].setAttribute("class","row")
outputcard.childNodes[0].appendChild(document.createElement("div"))
outputcard.childNodes[0].childNodes[0].setAttribute("class","col-sm-6 degerees")
outputcard.childNodes[0].appendChild(document.createElement("div"))
outputcard.childNodes[0].childNodes[1].setAttribute("class","col-sm-6 otherDetails")
let getWeatherDet= ()=>{   
    let promise_weather = new Promise((resolve,reject)=>{    
        let citys_select= document.getElementsByClassName("selectpicker")[1].value
        var res = fetch(`https://api.openweathermap.org/data/2.5/weather?id=${citys_select}&appid=f67bc4de2d8a0398f067946406903940`)   
    
        res.then((data)=>data.json()).then((data1)=>{        
            resolve(data1)
            
        });   
    })

    promise_weather.then((data)=>{
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
document.querySelector(".mainstart").setAttribute("class","container-fluid  mainstart")
let weatherIco='<i class="fa-solid fa-cloud-showers-heavy fa-fade"></i>'
        testtt=data
      console.log(data) 
      let degerees=document.querySelector(".degerees")   
      degerees.innerHTML=`<div class="row"><div class="col-sm-7 degreeValue"><span class="Dree"> ${  (parseFloat(data.main.temp_min)-273.15).toFixed(2)}</span> &#8451; </div>      <div class="col-sm-5 weatherIco">${weatherico[data.weather[0].main]}</div>      <div class="col-sm-12  weatherDesc">${data.weather[0].description}</div>      <div class="col-sm-12 weatherloc"> ${currentTime}   H:${ testtt.coord.lon.toFixed(2)} | L:${ testtt.coord.lat.toFixed(2)}</div>    </div>`
      let otherDetails=document.querySelector(".otherDetails")   
      otherDetails.innerHTML=`<div class="row">      <div class="col-sm-4 calenderico"><i class="fa-regular fa-calendar-days"></i></div>      <div class="col-sm-8 datedetail"> ${today} </div>      <div class="col-sm-4 locationico"><i class="fa-solid fa-map-location-dot"></i></div>      <div class="col-sm-8 locationDet">${data.name},${document.getElementsByClassName("filter-option-inner-inner")[0].innerHTML}</div>      <div class="col-sm-4 Humldityico"> <i class="fa-solid fa-hand-holding-droplet"></i></div>      <div class="col-sm-8 HumldityDet"><b>Humldity:</b> ${data.main.humidity} % </div>      <div class="col-sm-4 windico">  <i class="fa-solid fa-wind"></i></div>      <div class="col-sm-8 windDet"><b> Wind:</b> ${data.wind.speed}</div>      <div class="col-sm-4 Pressureico"><i class="fa fa-tachometer" aria-hidden="true"></i></div>      <div class="col-sm-8 PressureDet"><b>Pressure:</b> ${data.main.pressure} Mb</div>    </div>` 
      maincard.setAttribute("class","card-body maincard h-75 "+data.weather[0].main)
      
    
    }).catch((err)=>{console.log(err)})
      
}
//#endregion



// "Clouds"    <i class="fa-solid fa-cloud fa-beat-fade"></i>-------
// "Mist"      <i class="fa-solid fa-smog fa-beat-fade"></i>------
// "Clear"     <i class="fa-solid fa-sun fa-beat-fade"></i>----------
// "haze"      <i class="fa-solid fa-cloud-sun fa-beat-fade"></i>-------
// "Fog"       <i class="fa-solid fa-cloud-meatball fa-beat-fade"></i>---------
// "Rain"      <i class="fa-solid fa-cloud-showers-heavy fa-beat-fade"></i>-------------
$(".Drp_citys").selectpicker("refresh");