//const localdata = new Array();

(function() {
  'use strict';
  window.addEventListener('load', function() {    
    var forms = document.getElementsByClassName('needs-validation');    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        }
        else{
         insertableData();

         event.preventDefault();
         document.querySelector("form").reset()
         document.getElementById('foods').parentNode.children[1].title=""
         document.querySelector(".filter-option-inner-inner").innerText="Nothing selected"
         let validate =document.querySelector(".was-validated")
         validate !=null ? validate.setAttribute("class","needs-validation"):''
        }
        
      }, false);
    });
  }, false);
})();



function createcard(val){
  let createcard=document.createElement("div")
createcard.setAttribute("class","card shadow-lg")
createcard.appendChild(document.createElement("div"))
createcard.firstChild.setAttribute("class","card-body")
createcard.firstChild.setAttribute("id",val)
return createcard
}

let getmain= document.getElementById("mainstart")
getmain.appendChild(createcard("Dfrom"))
let creategrid=document.createElement("div")
creategrid.setAttribute("class","row")
creategrid.appendChild(document.createElement("div"))
creategrid.children[0].setAttribute("class","col-lg-5")
creategrid.children[0].setAttribute("id","InputF")
creategrid.appendChild(document.createElement("div"))
creategrid.children[1].setAttribute("class","col-lg-7")
creategrid.children[1].setAttribute("id","Outputf")
let getcard= document.getElementById("Dfrom")
getcard.appendChild(creategrid)
let inputf= document.getElementById("InputF")
inputf.appendChild(createcard("inputCrd"))

let createFromgrid=document.createElement("div")
createFromgrid.setAttribute("class","row")
createFromgrid.appendChild(document.createElement("div"))
createFromgrid.children[0].setAttribute("class","col-lg-12")
createFromgrid.children[0].setAttribute("id","Inicon")
createFromgrid.appendChild(document.createElement("div"))
createFromgrid.children[1].setAttribute("class","col-lg-12")
createFromgrid.children[1].setAttribute("id","infrom")
let inputCrd= document.getElementById("inputCrd")
inputCrd.appendChild(createFromgrid)
let Inicon= document.getElementById("Inicon")
Inicon.appendChild(document.createElement("img"))
Inicon.firstChild.setAttribute("src","Assets/pictures/img_avatar1.png")
Inicon.firstChild.setAttribute("class","rounded-circle img-thumbnail mx-auto d-block")
Inicon.firstChild.setAttribute("alt","Img_Notfound")
let infrom= document.getElementById("infrom")
infrom.appendChild(document.createElement("form"))
infrom.firstChild.setAttribute("class","needs-validation")
infrom.firstChild.setAttribute("id","form")
infrom.firstChild.setAttribute("novalidate","")
let forms= document.getElementById("form")
forms.appendChild(document.createElement("div"))
forms.firstChild.setAttribute("class","input-group mb-3 form-group")
forms.firstChild.appendChild(document.createElement("div"))
forms.firstChild.firstChild.setAttribute("class","input-group-prepend")
forms.firstChild.firstChild.appendChild(document.createElement("span"))
forms.firstChild.firstChild.firstChild .setAttribute("class","input-group-text")
forms.firstChild.firstChild.firstChild.innerText="User :"
forms.firstChild.appendChild(document.createElement("input"))
forms.firstChild.children[1].setAttribute("type","text")
forms.firstChild.children[1].setAttribute("class","form-control")
forms.firstChild.children[1].setAttribute("id","first-name")
forms.firstChild.children[1].setAttribute("placeholder","First Name")      
forms.firstChild.children[1].setAttribute("required","")     
forms.firstChild.appendChild(document.createElement("input"))
forms.firstChild.children[2].setAttribute("type","text")
forms.firstChild.children[2].setAttribute("class","form-control")
forms.firstChild.children[2].setAttribute("id","last-name")
forms.firstChild.children[2].setAttribute("placeholder","Last Name")      
forms.firstChild.children[2].setAttribute("required","")     
forms.firstChild.appendChild(document.createElement("div"))
forms.firstChild.children[3].setAttribute("class","valid-feedback")
forms.firstChild.children[3].innerText="Valid"
forms.firstChild.appendChild(document.createElement("div"))
forms.firstChild.children[4].setAttribute("class","invalid-feedback")
forms.firstChild.children[4].innerText="Please fill out this field"

forms.appendChild(document.createElement("div"))
forms.children[1].setAttribute("class","input-group mb-3 form-group")
forms.children[1].appendChild(document.createElement("div"))
forms.children[1].children[0].setAttribute("class","input-group-prepend")
forms.children[1].children[0].appendChild(document.createElement("span"))
forms.children[1].children[0].firstChild.setAttribute("class","input-group-text")
forms.children[1].children[0].firstChild.innerText="Address :"
forms.children[1].appendChild(document.createElement("textarea"))
forms.children[1].children[1].setAttribute("class","form-control")
forms.children[1].children[1].setAttribute("id","address")
forms.children[1].children[1].setAttribute("placeholder","Address")
forms.children[1].children[1].setAttribute("required","")
forms.children[1].appendChild(document.createElement("div"))
forms.children[1].children[2].setAttribute("class","valid-feedback")
forms.children[1].children[2].innerText="Valid"
forms.children[1].appendChild(document.createElement("div"))
forms.children[1].children[3].setAttribute("class","invalid-feedback")
forms.children[1].children[3].innerText="Please fill out this field"


forms.appendChild(document.createElement("div"))
forms.children[2].setAttribute("class","input-group mb-3 form-group")
forms.children[2].appendChild(document.createElement("div"))
forms.children[2].children[0].setAttribute("class","input-group-prepend")
forms.children[2].children[0].appendChild(document.createElement("span"))
forms.children[2].children[0].firstChild.setAttribute("class","input-group-text")
forms.children[2].children[0].firstChild.innerText="Pincode :"
forms.children[2].appendChild(document.createElement("input"))
forms.children[2].children[1].setAttribute("class","form-control")
forms.children[2].children[1].setAttribute("id","pincode")
forms.children[2].children[1].setAttribute("placeholder","Pincode")
forms.children[2].children[1].setAttribute("required","")
forms.children[2].appendChild(document.createElement("div"))
forms.children[2].children[2].setAttribute("class","valid-feedback")
forms.children[2].children[2].innerText="Valid"
forms.children[2].appendChild(document.createElement("div"))
forms.children[2].children[3].setAttribute("class","invalid-feedback")
forms.children[2].children[3].innerText="Please fill out this field"

forms.appendChild(document.createElement("div"))
forms.children[3].setAttribute("class","input-group mb-3 form-group")
forms.children[3].appendChild(document.createElement("div"))
forms.children[3].children[0].setAttribute("class","input-group-prepend")
forms.children[3].children[0].appendChild(document.createElement("span"))
forms.children[3].children[0].firstChild.setAttribute("class","input-group-text")
forms.children[3].children[0].firstChild.innerText="Gender :"
forms.children[3].appendChild(document.createElement("div"))
forms.children[3].children[1].setAttribute("class","custom-control custom-radio custom-control-inline")
forms.children[3].children[1].appendChild(document.createElement("input"))
forms.children[3].children[1].children[0].setAttribute("type","radio")
forms.children[3].children[1].children[0].setAttribute("class","custom-control-input")
forms.children[3].children[1].children[0].setAttribute("id","customRadio1")
forms.children[3].children[1].children[0].setAttribute("name","gender")
forms.children[3].children[1].children[0].setAttribute("Value","Male")
forms.children[3].children[1].children[0].setAttribute("required","")
forms.children[3].children[1].appendChild(document.createElement("label"))
forms.children[3].children[1].children[1].setAttribute("class","custom-control-label")
forms.children[3].children[1].children[1].setAttribute("for","customRadio1")
forms.children[3].children[1].children[1].innerText="Male"


forms.children[3].appendChild(document.createElement("div"))
forms.children[3].children[2].setAttribute("class","custom-control custom-radio custom-control-inline")
forms.children[3].children[2].appendChild(document.createElement("input"))
forms.children[3].children[2].children[0].setAttribute("type","radio")
forms.children[3].children[2].children[0].setAttribute("class","custom-control-input")
forms.children[3].children[2].children[0].setAttribute("id","customRadio2")
forms.children[3].children[2].children[0].setAttribute("name","gender")
forms.children[3].children[2].children[0].setAttribute("Value","Female")
forms.children[3].children[2].children[0].setAttribute("required","")
forms.children[3].children[2].appendChild(document.createElement("label"))
forms.children[3].children[2].children[1].setAttribute("class","custom-control-label")
forms.children[3].children[2].children[1].setAttribute("for","customRadio2")
forms.children[3].children[2].children[1].innerText="Female"

forms.children[3].appendChild(document.createElement("div"))
forms.children[3].children[3].setAttribute("class","custom-control custom-radio custom-control-inline")
forms.children[3].children[3].appendChild(document.createElement("input"))
forms.children[3].children[3].children[0].setAttribute("type","radio")
forms.children[3].children[3].children[0].setAttribute("class","custom-control-input")
forms.children[3].children[3].children[0].setAttribute("id","customRadio3")
forms.children[3].children[3].children[0].setAttribute("name","gender")
forms.children[3].children[3].children[0].setAttribute("Value","Other")
forms.children[3].children[3].children[0].setAttribute("required","")
forms.children[3].children[3].appendChild(document.createElement("label"))
forms.children[3].children[3].children[1].setAttribute("class","custom-control-label")
forms.children[3].children[3].children[1].setAttribute("for","customRadio3")
forms.children[3].children[3].children[1].innerText="Other"

forms.appendChild(document.createElement("div"))
forms.children[4].setAttribute("class","input-group mb-3 form-group")
forms.children[4].appendChild(document.createElement("div"))
forms.children[4].children[0].setAttribute("class","input-group-prepend")
forms.children[4].children[0].appendChild(document.createElement("span"))
forms.children[4].children[0].firstChild.setAttribute("class","input-group-text")
forms.children[4].children[0].firstChild.innerText="Food : "
//forms.children[4].appendChild(document.createElement("select"))
forms.children[4].innerHTML+="<select   multiple data-live-search='true'>  </select>"
//forms.children[4].children[1].setAttribute("class","form-control")
forms.children[4].children[1].setAttribute("class","form-control selectpicker")
forms.children[4].children[1].setAttribute("id","foods")
forms.children[4].children[1].setAttribute("required","")
//forms.children[4].children[1].setAttribute("multiple data-live-search","true")
forms.children[4].children[1].appendChild(document.createElement("option"))
forms.children[4].children[1].children[0].innerText="Dosa"
forms.children[4].children[1].appendChild(document.createElement("option"))
forms.children[4].children[1].children[1].innerText="Filter Coffee"
forms.children[4].children[1].appendChild(document.createElement("option"))
forms.children[4].children[1].children[2].innerText="Lemon Rice"
forms.children[4].children[1].appendChild(document.createElement("option"))
forms.children[4].children[1].children[3].innerText="Pongal"
forms.children[4].children[1].appendChild(document.createElement("option"))
forms.children[4].children[1].children[4].innerText="Idli and Vada"
forms.children[4].appendChild(document.createElement("div"))
forms.children[4].children[2].setAttribute("class","valid-feedback")
forms.children[4].children[2].innerText="Valid"
forms.children[4].appendChild(document.createElement("div"))
forms.children[4].children[3].setAttribute("class","invalid-feedback")
forms.children[4].children[3].innerText="Please fill out this field"


forms.appendChild(document.createElement("div"))
forms.children[5].setAttribute("class","input-group mb-3 form-group")
forms.children[5].appendChild(document.createElement("div"))
forms.children[5].children[0].setAttribute("class","input-group-prepend")
forms.children[5].children[0].appendChild(document.createElement("span"))
forms.children[5].children[0].firstChild.setAttribute("class","input-group-text")
forms.children[5].children[0].firstChild.innerText="State :"
forms.children[5].appendChild(document.createElement("select"))
forms.children[5].children[1].setAttribute("class","form-control")
forms.children[5].children[1].setAttribute("id","State")
forms.children[5].children[1].setAttribute("placeholder","Please Select Your State")
forms.children[5].children[1].setAttribute("required","")
forms.children[5].children[1].appendChild(document.createElement("option"))
forms.children[5].children[1].children[0].innerText=""
forms.children[5].children[1].appendChild(document.createElement("option"))
forms.children[5].children[1].children[1].innerText="Tamil Nadu"
forms.children[5].children[1].appendChild(document.createElement("option"))
forms.children[5].children[1].children[2].innerText="Kerala"
forms.children[5].children[1].appendChild(document.createElement("option"))
forms.children[5].children[1].children[3].innerText="Goa"
forms.children[5].children[1].appendChild(document.createElement("option"))
forms.children[5].children[1].children[4].innerText="Maharashtra"
forms.children[5].appendChild(document.createElement("div"))
forms.children[5].children[2].setAttribute("class","input-group-prepend")
forms.children[5].children[2].appendChild(document.createElement("span"))
forms.children[5].children[2].firstChild.setAttribute("class","input-group-text")
forms.children[5].children[2].firstChild.innerText="Country :"
forms.children[5].appendChild(document.createElement("select"))
forms.children[5].children[3].setAttribute("class","form-control")
forms.children[5].children[3].setAttribute("id","Country")
forms.children[5].children[3].setAttribute("placeholder","Please Select Your State")
forms.children[5].children[3].setAttribute("required","")
forms.children[5].children[3].appendChild(document.createElement("option"))
forms.children[5].children[3].children[0].innerText=""
forms.children[5].children[3].appendChild(document.createElement("option"))
forms.children[5].children[3].children[1].innerText="India"
forms.children[5].children[3].appendChild(document.createElement("option"))
forms.children[5].children[3].children[2].innerText="United States"
forms.children[5].children[3].appendChild(document.createElement("option"))
forms.children[5].children[3].children[3].innerText="Germany"
forms.children[5].children[3].appendChild(document.createElement("option"))
forms.children[5].children[3].children[4].innerText="France"
forms.children[5].children[3].appendChild(document.createElement("option"))
forms.children[5].children[3].children[5].innerText="Australia"
forms.children[5].appendChild(document.createElement("div"))
forms.children[5].children[4].setAttribute("class","valid-feedback")
forms.children[5].children[4].innerText="Valid"
forms.children[5].appendChild(document.createElement("div"))
forms.children[5].children[5].setAttribute("class","invalid-feedback")
forms.children[5].children[5].innerText="Please fill out this field"


forms.appendChild(document.createElement("Button"))
forms.children[6].setAttribute("type","submit")
forms.children[6].setAttribute("class","btn btn-primary btn-block")
forms.children[6].setAttribute("id","submit")
forms.children[6].innerText="Submit"
//$('select').selectpicker();



let outf= document.getElementById("Outputf")
outf.appendChild(createcard("outCrd"))
let outCrd= document.getElementById("outCrd")
outCrd.appendChild(document.createElement("div"))
outCrd.children[0].setAttribute("class","input-group-prepend")
outCrd.children[0].appendChild(document.createElement("span"))
outCrd.children[0].firstChild.setAttribute("class","input-group-text")
outCrd.children[0].firstChild.innerText="Search :"
outCrd.children[0].appendChild(document.createElement("input"))
outCrd.children[0].children[1].setAttribute("class","form-control")
outCrd.children[0].children[1].setAttribute("id","Search")
outCrd.appendChild(document.createElement("div"))
outCrd.children[1].setAttribute("class","table-responsive-lg")
outCrd.children[1].appendChild(document.createElement("table"))
outCrd.children[1].children[0].setAttribute("class","table table-striped")

outCrd.children[1].children[0].appendChild(document.createElement("thead"))
outCrd.children[1].children[0].children[0].setAttribute("class","thead-dark")
outCrd.children[1].children[0].children[0].appendChild(document.createElement("tr"))
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[0].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[0].innerText="First Name"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[1].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[1].innerText="Last Name"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[2].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[2].innerText="Address"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[3].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[3].innerText="Pincode"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[4].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[4].innerText="Gender"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[5].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[5].innerText="Foods"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[6].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[6].innerText="State"
outCrd.children[1].children[0].children[0].children[0].appendChild(document.createElement("th"))
outCrd.children[1].children[0].children[0].children[0].children[7].setAttribute("scope","col")
outCrd.children[1].children[0].children[0].children[0].children[7].innerText="Country"
outCrd.children[1].children[0].appendChild(document.createElement("tbody"))
outCrd.children[1].children[0].children[1].setAttribute("id","formdatas")

function insertableData(){
  let Firstname=document.getElementById("first-name").value
  let Lastname=document.getElementById("last-name").value
  let Address=document.getElementById("address").value
  let pincode=document.getElementById("pincode").value
  let Gender=document.querySelector('input[name="gender"]:checked').value
  let Foods=document.getElementById('foods').parentNode.children[1].title
  let State=document.getElementById('State').value
  let Country=document.getElementById('Country').value
  //localdata.push([Firstname,Lastname,Address,pincode,Gender,Foods,State,Country])
  let newrow="<tr> <td>"+Firstname+"</td> <td>"+Lastname+"</td> <td>"+Address+"</td><td>"+pincode+"</td><td>"+Gender+"</td> <td>"+Foods+"</td>  <td>"+State+"</td> <td>"+Country+"</td></tr>"
  outCrd.children[1].children[0].children[1].innerHTML+= newrow
}

$(document).ready(function(){
  $("#Search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#formdatas tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});