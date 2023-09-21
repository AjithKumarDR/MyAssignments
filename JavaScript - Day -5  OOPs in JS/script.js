class Movies {
constructor(Title,Studio,Ratting="PG"){
    this.title=Title;
    this.studio=Studio;
    this.rating=Ratting; 
    
}
getPGMovies= function(){
    if(this.rating=="PG"){
        return(this.title)
    }
    
}
}


console.log("1St Assignment:-");
console.log("-----------------------------------------------------------------------------------------------");
const Mov=new Movies("Avatar","Lightstorm Entertainment","PG­13");
console.log("a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.");
console.log(Mov);
console.log("b) The constructor for the class Movie will set the class property rating to PG as default when no rating is provided.");
const Mov1=new Movies("Oppenheimer","Emma Thomas Charles Roven");
console.log("Values:Oppenheimer & Emma Thomas Charles Roven");
console.log(Mov1);
console.log("c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of PG. You may assume the input array is full of Movie instances. The returned array need not be full.");
let samarray=[
    ["Jailer","Kalanithi Maran","PG­13"],
    ["Vikram","R Mahendran","R"],
    ["Maaveeran","Red Giant Movies","PG"],
    ["Maamannan","Mari Selvaraj","PG"],
    ["Good Night","Yuvaraj Ganesan"]
]

let moviepgs =samarray.filter((val) =>{
    const Mov= new Movies(val[0],val[1],val[2]);
     return Mov.getPGMovies()
})
console.log("Sample Array:");
console.log(samarray);
console.log("Output Array:");
console.log(moviepgs);

console.log("d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”");
const Mov3=new Movies("Casino Royale","Eon Productions","PG­13");
console.log(Mov3);
console.log("-----------------------------------------------------------------------------------------------");
console.log("2nd Assignment:-");
console.log("-----------------------------------------------------------------------------------------------");

class Circle {
    
    
    constructor(radius=1.0,color="Red"){
        this.Radius  =radius;
        this.Color=color;    
    }
    getradius=function(){

        return this.Radius 
    }
    getColor=function(){

        return this.Color 
    }
    setRadius=function(radius){

         this.Radius =radius
    }
    setColor=function(color){

        this.Color =color
   }
   toString = function () {
    return "Radius: " + this.Radius + " Color: " + this.Color;
    }
    getArea = function () {
    return (2 * (Math.PI) * this.Radius);
    }
    getCircumference = function () {
        return (2 * this.Radius);
    }
   
}

// class constructor with no param
const c1 = new Circle()
console.log("Constructor with no params: ")
console.log( c1.toString())
// class constructor with single param
const c2 = new Circle(5.5);
console.log("Constructor with one param: 5.5");
console.log(c2.toString());
// class constructor with Double param and get radius
const c3 = new Circle(2.5, 'Yellow');
console.log("getRadius: " + c3.getradius());
//  Set radius
c3.setRadius(4.3);
console.log("setRadius: 4.3 " );
console.log("Radius value after setRadius: " + c3.getradius());
//  Get Colour
console.log("getColor: " + c3.getColor());
//  Set Colour
c3.setColor("Blue");
console.log(" setColor: Blue" );
console.log("Color Value after setColor: " + c3.getColor());
//  Get String value
console.log(c3.toString());
//  Get Area Calculation
console.log("Area: " + c3.getArea());
//  Set Circumference
console.log("Circumference: " + c3.getCircumference());
console.log("-----------------------------------------------------------------------------------------------");
console.log("3nd Assignment:-");
console.log("-----------------------------------------------------------------------------------------------");
class Person {
    constructor(Name,Age,Workig,Salary,Address,Native,Language,Marrige_Status){
        this.name=Name;
        this.age=Age;
        this.workig=Workig; 
        this.salary=Salary; 
        this.address=Address;
        this.native=Native;
        this.language=Language;
        this.marrige_status=Marrige_Status;
    }
    getPersonDetails= function(){
        return("This Person Name is "+this.name+" and he Worked in "+this.workig+" and age is "+
        this.age+ " his getting salary amount is "+this.salary+" this person stay in "+this.address
        +" His Native place "+this.native+" and he speak languages is "+this.language+" his married Status is "+
       this.marrige_status) 
        }
    }
    console.log("Write a “person” class to hold all the details.");

    // Store and get person details
const Personinfo = new Person("AjithkumarDR",28,"industrial soft solutions & system",
"20000","New Perungalathur,chennai","Kumbakonam","Tamil & English","Single")
console.log(Personinfo.getPersonDetails());

console.log("-----------------------------------------------------------------------------------------------");
console.log("4nd Assignment:-");
console.log("-----------------------------------------------------------------------------------------------");

class UberPrice {
    constructor(baseFare, costPerMinute, costPerMile,distanceInMiles,timeInMinutes, surgeMultiplier=1) {
      this.baseFare = baseFare;
      this.costPerMinute = costPerMinute;
      this.costPerMile = costPerMile;
      this.surgeMultiplier = surgeMultiplier ;
      this.DistanceInMiles = distanceInMiles ;
      this.TimeInMinutes = timeInMinutes ;
    }
   getridedetails=function(){
    return("The Ride Base Fare is "+this.baseFare+ " and Cost Per Mintue is "+
    this.costPerMinute+" and Cost of Per Mile "+this.costPerMile+" Then Surage Multiple is "+this.surgeMultiplier
    + " Travel Distance per miles is " +this.DistanceInMiles+" And Travel Duration is "+ 
    this.TimeInMinutes+" Mins")
   }
    calculatePrice( ) {
      // Calculate the fare without surge pricing.
      const fareWithoutSurge = this.baseFare + (this.costPerMinute * this.TimeInMinutes) +
        (this.costPerMile * this.DistanceInMiles);
  
      // Apply surge pricing.
      const totalFare = fareWithoutSurge * this.surgeMultiplier;
  
      return totalFare;
    }  
    setDistination=function(distanceInMiles,timeInMinutes){

        this.DistanceInMiles = distanceInMiles ;
      this.TimeInMinutes = timeInMinutes ;
   }
   
  }
  
  // Example usage:
  const calculator = new UberPrice(2.5, 0.3, 1.5,5, 15); // Base fare, cost per minute, cost per mile
  console.log("Uber Price: ");
  console.log(calculator.getridedetails()); 
  console.log("Uber Price calculatePrice: ");
  const estimatedPrice = calculator.calculatePrice();
  console.log(`Estimated Uber Price: $${estimatedPrice}/-`);
  console.log("Changed Distination :  ");
  calculator.setDistination(3,10)
  console.log(calculator.getridedetails()); 
 
  const CurrentestimatedPrice = calculator.calculatePrice();
  console.log(`Current Estimated Uber Price: $${CurrentestimatedPrice}/-`);