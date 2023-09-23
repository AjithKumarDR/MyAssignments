var request = new XMLHttpRequest();
// console.log(request);
//open a connection
request.open('GET','https://restcountries.com/v3.1/all');
//sending a connection
request.send();
//page load
request.onload = function(){
    // console.log("Page loaded")
var data = JSON.parse(request.response)
console.log(data);
console.log("---------------------------------------------------------------------------------------");
console.log("A)Get all the countries from Asia continent /region using Filter function");
console.log("---------------------------------------------------------------------------------------");
var Asia_continent_region = data.filter((index)=> index.continents=="Asia"||index.region=="Asia")
let Asiacountries=[]
Asia_continent_region.forEach(val => {
    console.log("Asia continent /region countries:"+val.name.common);
    Asiacountries.push(val.name.common);   
});
console.log("Output in array:");
console.log(Asiacountries);
console.log("---------------------------------------------------------------------------------------");
console.log("B)Get all the countries with a population of less than 2 lakhs using Filter function");
console.log("---------------------------------------------------------------------------------------");
var countries_less_than_2 = data.filter((index)=> index.population<=200000 )
let populationcountries=[]
countries_less_than_2.forEach(val => {
    var element = {}
    element.countries = val.name.common; 
    element.population = val.population;
    populationcountries.push(element);  
    console.log("countries: "+val.name.common +" & population: "+val.population); 
});
console.log("Output in Objeect:");
console.log(populationcountries);

console.log("---------------------------------------------------------------------------------------");
console.log("C)Print the following details name, capital, flag using forEach function");
console.log("---------------------------------------------------------------------------------------");
let following_details=[]

data.forEach(val => {
    var element = {}
    element.name = val.name.common; 
    
    element.capital = val.capital;
    element.flag = val.flag;
    following_details.push(element);  
    console.log("name: "+val.name.common +" & capital: "+val.capital +" & flag: "+val.flag); 
});
console.log("Output in Objeect:");
console.log(following_details);


console.log("---------------------------------------------------------------------------------------");
console.log("D)Print the total population of countries using reduce function");
console.log("---------------------------------------------------------------------------------------");

var Total_population = data.reduce((acc,val)=> acc+val.population,0) 
console.log("Total population of countries is : "+Total_population); //15

console.log("---------------------------------------------------------------------------------------");
console.log("E)Print the country which uses US Dollars as currency.");
console.log("---------------------------------------------------------------------------------------");

let US_Dollars_country=[]
data.forEach(val => {
    val.currencies!= undefined?val.currencies.USD!= undefined?
    console.log(val.name.common )& 
    US_Dollars_country.push(val.name.common): false : false   
});
console.log("Output in Array:");
console.log(US_Dollars_country); 


}