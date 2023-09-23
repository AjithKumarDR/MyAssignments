console.log("---------------------------------------------------------");
console.log("1.Do the below programs in anonymous function & IIFE:");
console.log("---------------------------------------------------------");
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



var Stringarray=["apple","orange","mango","banana","blackberries","dragon fruit"]
console.log("Input Array :"+Stringarray);
console.log("Anonymous function");
///Anonymous function

let anonymousTitleCaps=function(arrval) {
    return arrval.map(function (str) {
      return str.split(' ').map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
  }
;
console.log("After Title Caps :"+anonymousTitleCaps(Stringarray));

////IIFE function
console.log("IIFE function");
(function(arrval){
    console.log("After Title Caps :"+ arrval.map(function (str) {
        return str.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(' ');
      }));
} )(Stringarray);
//#endregion

console.log("C)Sum of all numbers in an array");
//#region Sum of all numbers in an array
///Anonymous function
console.log("Anonymous function");
console.log("Input Array :"+samplearray);
let anonymousSUMArray =function (arrval){
    let sum = 0;
for (let i = 0; i < arrval.length; i++ ) {
    sum += arrval[i];
  }
  return sum;
}  
  console.log(anonymousSUMArray(samplearray)) 

////IIFE function
console.log("IIFE function");
(function(arrval){
    let sum = 0;
    for (let i = 0; i < arrval.length; i++ ) {
        sum += arrval[i];
      }

    console.log(sum);
} )(samplearray);

//#endregion

console.log("D)Return all the prime numbers in an array");
//#region Return all the prime numbers in an array
console.log("Input Array :"+samplearray);
///Anonymous function
console.log("Anonymous function");
let findPrimesInArray =function (arr) {
  let primearray=[];
  arr.forEach((num) => {
 if (num <= 1) return false;
 if (num <= 3) return primearray.push(num) ;
 if (num % 2 === 0 || num % 3 === 0) return false;
 for (let i = 5; i * i <= num; i += 6) {
   if (num % i === 0 || num % (i + 2) === 0) return false;
 }
 return  primearray.push(num);
 
});
return primearray;
}
console.log( findPrimesInArray(samplearray).toString());
///IIFE function
console.log("IIFE function");
(function(arrval){
  let primearray=[];
  arrval.forEach((num) => {
 if (num <= 1) return false;
 if (num <= 3) return primearray.push(num) ;
 if (num % 2 === 0 || num % 3 === 0) return false;
 for (let i = 5; i * i <= num; i += 6) {
   if (num % i === 0 || num % (i + 2) === 0) return false;
 }
 return  primearray.push(num);
 
});
console.log(primearray.toString());
} )(samplearray);


//#endregion

console.log("E)Return all the palindromes in an array");
//#region Return all the prime numbers in an array
const StringArray = ["radar","Car","level", "Mango", "madam", "Pet", "refer", "Bell", "Well"];
console.log("Input Array :"+StringArray);  
///Anonymous function   

  let Test=function  (arrayval){
    return arrayval.filter( function( val ){
        return  val ==val.split('').reverse().join('') ?  val : false;
    });
 }
console.log("Anonymous function");
console.log(Test(StringArray).toString());
///IIFE function
console.log("IIFE function");
(function(arrayval){
  console.log( arrayval.filter( function( val ){
          return  val ==val.split('').reverse().join('') ?  val : false;
      }).toString());
  
  } )(StringArray);



//#endregion
console.log("F)Return median of two sorted arrays of the same size");
//#region Return all the prime numbers in an array
let array1 = [1,2,4,5,3]
let array2 = [6,7,8,9,10]
console.log("Input Array 1 :"+array1 ); 
console.log("Input Array 2 :"+array2 );  
///Anonymous function 
console.log("Anonymous function");
let medianArray =function  (arrayval1,arrayval2){
  let merarray =arrayval1.concat(arrayval2).sort(function (a, b) { return a - b }); 
  return merarray.length % 2 !== 0 ? merarray[Math.floor(merarray.length / 2)] : (merarray[Math.floor(merarray.length / 2) - 1] + merarray[Math.floor(merarray.length / 2)]) / 2 ;
}
console.log(medianArray(array1,array2));
///IIFE function
console.log("IIFE function");
(function(arrayval1,arrayval2){
  let merarray =arrayval1.concat(arrayval2).sort(function (a, b) { return a - b }); 
  console.log( merarray.length % 2 !== 0 ? merarray[Math.floor(merarray.length / 2)] : (merarray[Math.floor(merarray.length / 2) - 1] + merarray[Math.floor(merarray.length / 2)]) / 2);
  
  } )(array1,array2);

//#endregion
console.log("G)Remove duplicates from an array");
//#region Return all the prime numbers in an array
let duplicatearray = [1,2,4,5,3,4,2,1,3]
///Anonymous function   
console.log("Input Array :"+duplicatearray);  
console.log("Anonymous function");
let removedupli=function (arrayval){
  return arrayval.filter(function(item, pos) {
    return arrayval.indexOf(item) == pos;
})
}
console.log(removedupli(duplicatearray).toString());
///IIFE function
console.log("IIFE function");
(function(arrayval){
 console.log(  arrayval.filter(function(item, pos) {
  return arrayval.indexOf(item) == pos;
}).toString());
} )(duplicatearray);


//#endregion
console.log("H)Rotate an array by k times");
//#region Return all the prime numbers in an array
let originalArray = [1, 2, 3, 4, 5,6];
let notimes=3;
console.log("Input Array :"+originalArray+" and No of Times:"+notimes); 
///Anonymous function   
console.log("Anonymous function");

let rotateArray=function (arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}
console.log(rotateArray(originalArray,notimes).toString());
///IIFE function
console.log("IIFE function");
(function(arr, k){
  const n = arr.length;
  k = k % n;
  console.log(  [...arr.slice(n - k), ...arr.slice(0, n - k)].toString());
 } )(originalArray,notimes);


//#endregion

console.log("---------------------------------------------------------");
console.log("2.Do the below programs in arrow functions:");
console.log("---------------------------------------------------------");
console.log("A)Print odd numbers in an array");

//#region Print odd numbers in an array
/////Arrow Function 
console.log("Arrow Function ");
console.log("Input Array :"+samplearray);//Samplearray getting from anonymous function
var arrOdd= (arrval)=>{
    arrval.forEach((element) => {
        element%2==1?console.log(element):""})
}
arrOdd(samplearray);
//#endregion
console.log("B)Convert all the strings to title caps in a string array");
//#region Convert all the strings to title caps in a string array
console.log("Input Array :"+Stringarray);//Samplearray getting from anonymous function
var arrTitleCaps= (arrval)=>{
    return arrval.map(function (str) {
        return str.split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }).join(' ');
      });
}
console.log("After Title Caps :"+arrTitleCaps(Stringarray));
//#endregion
console.log("C)Sum of all numbers in an array");
//#region Sum of all numbers in an array
console.log("Input Array :"+samplearray);//Samplearray getting from anonymous function
console.log( samplearray.reduce((acc, digit) => acc + parseInt(digit), 0));
//#endregion
console.log("D)Return all the prime numbers in an array");
//#region Return all the prime numbers in an array
console.log("Input Array :"+samplearray);
const arrowPrimesInArray = (arr) => arr.filter((num) => {
  if (num <= 1) return false;
if (num <= 3) return true;
if (num % 2 === 0 || num % 3 === 0) return false;
for (let i = 5; i * i <= num; i += 6) {
if (num % i === 0 || num % (i + 2) === 0) return false;
}
return true;
});
console.log(arrowPrimesInArray(samplearray).toString());
//#endregion
console.log("E)Return all the palindromes in an array");
//#region Return all the palindromes in an array
/////Arrow Function 
console.log("Arrow Function ");
console.log("Input Array :"+StringArray);//Samplearray getting from anonymous function
console.log( StringArray.filter( ( val ) => val ==val.split('').reverse().join('') ?  val : false).toString());
//#endregion