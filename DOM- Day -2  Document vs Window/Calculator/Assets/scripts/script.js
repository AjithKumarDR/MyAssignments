
let getmain= document.getElementById("mainstart")
let createcard=document.createElement("div")
createcard.setAttribute("class","card shadow-lg")
createcard.appendChild(document.createElement("div"))
createcard.firstChild.setAttribute("class","card-body")
createcard.firstChild.setAttribute("id","calc")
getmain.appendChild(createcard)
let getcard= document.getElementById("calc")
let creategrid=document.createElement("div")
creategrid.setAttribute("class","container-fluid")
creategrid.appendChild(document.createElement("div"))
creategrid.firstChild.setAttribute("class","row")
creategrid.firstChild.appendChild(document.createElement("div"))
creategrid.firstChild.children[0].setAttribute("class","col-sm-12")
creategrid.firstChild.children[0].setAttribute("id","output")
creategrid.firstChild.appendChild(document.createElement("div"))
creategrid.firstChild.children[1].setAttribute("class","col-sm-12")
creategrid.firstChild.children[1].setAttribute("id","inputf")
getcard.appendChild(creategrid)
let getoutput=document.getElementById("output")
getoutput.appendChild(document.createElement("input"))
getoutput.firstChild.setAttribute("class","form-control form-control-lg")
getoutput.firstChild.setAttribute("disabled","true")
getoutput.firstChild.setAttribute("id","result")
let getInput=document.getElementById("inputf")
getInput.appendChild(document.createElement("div"))
getInput.firstChild.setAttribute("class","row d-flex justify-content-end ")
let button_create=(Intext,InClass,Inid,Infun)=>{
    let createbutton =document.createElement("div")
    createbutton.setAttribute("class","col-sm-3")
    createbutton.appendChild(document.createElement("Button"))
    createbutton.firstChild.setAttribute("type","button")
    createbutton.firstChild.setAttribute("Class",InClass+" btn-block")
    createbutton.firstChild.setAttribute("id",Inid)
    createbutton.firstChild.setAttribute("onclick","appendNumber('"+Infun+"')")
    createbutton.firstChild.innerText=Intext
    return createbutton
}

getInput.firstChild.appendChild(button_create("M+","btn btn-warning m-2","Mp_btn","Mplus"))

getInput.firstChild.appendChild(button_create("M-","btn btn-warning m-2","Mm_btn","Mmin"))
getInput.firstChild.appendChild(button_create("MC","btn btn-warning m-2 ","Mc_btn","MC"))
getInput.firstChild.appendChild(button_create("+","btn btn-success m-2","add","+"))


getInput.firstChild.appendChild(button_create("9","btn btn-primary m-2","9","9"))
getInput.firstChild.appendChild(button_create("8","btn btn-primary m-2","8","8"))
getInput.firstChild.appendChild(button_create("7","btn btn-primary m-2","7","7"))
getInput.firstChild.appendChild(button_create("%","btn btn-success m-2","per_btn","%"))

getInput.firstChild.appendChild(button_create("6","btn btn-primary m-2","6","6"))
getInput.firstChild.appendChild(button_create("5","btn btn-primary m-2","5","5"))
getInput.firstChild.appendChild(button_create("4","btn btn-primary m-2","4","4"))
getInput.firstChild.appendChild(button_create("X","btn btn-success m-2","mul_btn","*"))

getInput.firstChild.appendChild(button_create("3","btn btn-primary m-2","3","3"))
getInput.firstChild.appendChild(button_create("2","btn btn-primary m-2","2","2"))
getInput.firstChild.appendChild(button_create("1","btn btn-primary m-2" ,"1","1"))
getInput.firstChild.appendChild(button_create("-","btn btn-success m-2","subtract","-"))

getInput.firstChild.appendChild(button_create("0","btn btn-primary m-2","0","0"))

getInput.firstChild.appendChild(button_create(".","btn btn-primary m-2","dot_btn","."))

getInput.firstChild.appendChild(button_create("=","btn btn-danger m-2","equal","Enter"))
getInput.firstChild.appendChild(button_create("/","btn btn-success m-2","di","/"))
getInput.firstChild.appendChild(button_create("C","btn btn-secondary m-2","clear","clear"))
window.addEventListener('keyup',
    function(e){
        console.log(e.key)
       // let  keys = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/','%']
        let  keys = ['0','1','2','3','4','5','6','7','8','9','.']
        if( keys.includes(e.key)){
            document.getElementById("result").value+=e.key
        }
        /* else if(e.key=="Enter"){
          document.getElementById("result").value =  + cal()
             //let someValues=document.getElementById("result").value
            //document.getElementById("result").value=eval(someValues)
        }
        else if(  e.key.toUpperCase() =="M"){
          localStorage.setItem('Memoryvalue', Number(localStorage.getItem('Memoryvalue'))+ Number(cal()) );
        }
        else if(e.key.toUpperCase()=="N"){
         localStorage.setItem('Memoryvalue', Number(localStorage.getItem('Memoryvalue'))- Number(cal()) );
        }
        else if(e.key.toUpperCase()=="B"){
          document.getElementById("result").value= Number(localStorage.getItem('Memoryvalue'))
          localStorage.clear();
        }
        else if(e.key=="Backspace"){
          document.getElementById("result").value=""
      } */
      else{
        this.alert("Only Numbers are allowed...!")
      }
        
    },
false);


function cal() {  
  
  var inputString = document.getElementById("result").value;  
  
  var pattern = /[+\-*/% ]+/;
  var numbers = inputString.split( pattern);
  var operators = inputString.replace(/[0-9]|\./g, "").split("");
  
  var divide = operators.indexOf("/");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("/");
  }

  var multiply = operators.indexOf("*");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("*");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }
  var mod = operators.indexOf("%");
  while (mod != -1) {    
    numbers.splice(mod, 2, parseFloat((numbers[mod]) /100)* parseFloat(numbers[mod + 1]));
    operators.splice(mod, 1);
    mod = operators.indexOf("%");
  }

   
return numbers[0]

}


function appendNumber(val) {
  if(val=="Enter"){
    var inputString = document.getElementById("result").value;  
    if(Number.isInteger(Number(inputString[inputString.length-1])) ){
    //document.getElementById("result").value=eval(someValues) 
    document.getElementById("result").value =  + cal()
  }
  else{
    this.alert("Please Give Proper Input...!")
    return inputString
  }
}
else if(val=="clear"){
  document.getElementById("result").value=""
}
else if(val=="Mplus"){

  localStorage.setItem('Memoryvalue', Number(localStorage.getItem('Memoryvalue'))+ Number(cal()) );

}
else if(val=="Mmin"){

  localStorage.setItem('Memoryvalue', Number(localStorage.getItem('Memoryvalue'))- Number(cal()));
}
else if(val=="MC"){
  
  document.getElementById("result").value= Number(localStorage.getItem('Memoryvalue'))
  localStorage.clear();
}
else{
  let resultval=document.getElementById("result").value
  if ((resultval[resultval.length-1]!=val ||Number.isInteger(Number(val)))&&
  (resultval.length!=0||Number.isInteger(Number(val)))&&
  ( Number.isInteger(Number(val))||Number.isInteger(Number(resultval[resultval.length-1])) )
   ){
    document.getElementById("result").value+= val;
  }
  else{
    this.alert("Please Give Proper Input...!")
  }
}
}

