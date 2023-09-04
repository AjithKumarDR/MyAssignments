
console.log("1.Do the below programs in anonymous function & IIFE:");
console.log("A)Print odd numbers in an array");
//#region Print odd numbers in an array
///Array variable declaration
var samplearray=[1,3,2,4,5,6,7,9,8]
console.log("Input Array :"+samplearray);
console.log("Anonymous function");
///Anonymous function
var anonymousOdd=function(arrval){
    arrval.forEach((element) => {
        element%2==1?console.log(element):"";
  });
}
anonymousOdd(samplearray);

////IIFE function
console.log("IIFE function");
(function(arrval){
    arrval.forEach((element) => {
        element%2==1?console.log(element):""})
} )(samplearray);
//#endregion

console.log("B)Convert all the strings to title caps in a string array");
//#region Convert all the strings to title caps in a string array
var Stringarray=["apple","orange","mango","banana","blackberries"]



//#endregion
console.log("2.Do the below programs in arrow functions:");
console.log("A)Print odd numbers in an array");
/////Arrow Function 
//#region Print odd numbers in an array
console.log("Arrow Function ");
console.log("Input Array :"+samplearray);//Samplearray getting from anonymous function
var arrOdd= (arrval)=>{
    arrval.forEach((element) => {
        element%2==1?console.log(element):""})
}
arrOdd(samplearray);
//#endregion
