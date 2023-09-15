let sampleJson=[  
    {  
        "name": "Ajithkumar",   
        "Age":  28,   
        "Salary":  20000,
        "Address":"Chennai",
        "Married Status":"Single"  
    }, 
    {  
        "name": "AshokKumar",   
        "Age":  29,   
        "Salary":  25000,
        "Address":"Bangalorer",
        "Married Status":"Married"  
    },   
    {  
        "name": "AmarNath",   
        "Age":  30,   
        "Salary":  45000,
        "Address":"Madurai",
        "Married Status":"Married"  
    },   
     {  
        "name": "Ashwin",   
        "Age":  25,   
        "Salary":  35000,
        "Address":"Kanchipuram",
        "Married Status":"Single"  
    },   
]  


console.log("=================TASK-1=============================");
console.log("Sample Json data");
console.log(sampleJson);
console.log("------------------------------------");
console.log("For Loop");
//For loop
for(let i=0;i<sampleJson.length;i++){
console.log("The Employee Name is "+sampleJson[i]["name"]+" his Age now "+sampleJson[i].Age+
" then Address is "+sampleJson[i].Address+" Now he getting salary amount is "
+sampleJson[i].Salary+ " he is "+sampleJson[i]["Married Status"]+" Person" );
}
console.log("------------------------------------");
console.log("For In Loop");
//For IN loop
for (var i in sampleJson){
    console.log("The Employee Name is "+sampleJson[i]["name"]+" his Age now "+sampleJson[i].Age+
" then Address is "+sampleJson[i].Address+" Now he getting salary amount is "
+sampleJson[i].Salary+ " he is "+sampleJson[i]["Married Status"]+" Person" );

 }
 console.log("------------------------------------");
console.log("For of Loop");

//For of loop
for (var index of sampleJson){
    console.log("The Employee Name is "+index["name"]+" his Age now "+index.Age+
" then Address is "+index.Address+" Now he getting salary amount is "
+index.Salary+ " he is "+index["Married Status"]+" Person" );  
 }
 console.log("------------------------------------");
 console.log("ForEach Loop");
//ForEach loop
 sampleJson.forEach((element)=> 
 console.log("The Employee Name is "+element["name"]+" his Age now "+element.Age+
 " then Address is "+element.Address+" Now he getting salary amount is "
 +element.Salary+ " he is "+element["Married Status"]+" Person" )
 
 )


 console.log("=================TASK-2=============================");
 console.log("MY Resume Json Formate");
 //Json Resume
 let MyResume=[{
    "Personal Details":{
    "Name":"AJITHKUMAR D R",
    "Father’s Name": "Radhakrishnan.D.G",
    "Date of Birth ":"19TH April 1995",
    "Age":26,
    "Marital status":"Single",
    "Gender":"Male",
    "Languages Known":"English, Tamil",
    "Permanent Address":"NO: 4 Venkatasamy Cross st, Srinivasan Nagar, New Perungalathur,Chennai 600063",
    "Nationality":"Indian"
},
"Academic Qualification":{
"Master of Computer Application":{
    "Percentage":"80%",
    "Year of Passing ":2019,
    "Institution":"Guru Nanak College, Chennai."
},
"Bachelor of Computer Application":{
    "Percentage":"70%",
    "Year of Passing ":2016,
    "Institution":"Annai College of Arts and Science, Kumbakonam."
},
"HSC":{
    "Percentage":"49%",
    "Year of Passing ":2013,
    "Institution":" A.R.R Municipal Higher Secondary School, Kumbakonam"
},
"SSLC":{
    "Percentage":"62%",
    "Year of Passing ":2011,
    "Institution":"Town High Secondary School, Kumbakonam."
},

},
"Technical Skill":{

    "Languages & Skills":"C#, ASP.NET, SQL,HTML,CSS, JavaScript, Bootstrap,Ajax",
    "Office Tools":"MicroSoft Visual Studio,SQL Server Management, MS Word, MS Power Point, Typewriting (English) lower"
},
"Work Experience ":{
"Companys":{
    "Company Name":"Industrial Soft Solutions & System,",
    "Address":"10/4 39th Street, Thillai Ganga Nagar, Nanganallur, Chennai-600061.",
    "Work From":"From 1St Nov 2020 to Current Date "
},
"Working Projects":{
"DDBM":{
    "Project Name":"Digital Data Boards",
    "Over View":"Real-time data collection system across several processes, like cutting, washing, sewing, finishing combined with real-time dash boards/ hourly production    boards.",
    "Languages":"SQL ,Asp.Net,HTML,JavaScript,Bootstrap,CSS,AJAX "
},
"FAMS":{
    "Project Name":"Fixed Asset Management System",
    "Over View":"Machinery maintenance and tracking software combined with spare parts control. Tracks the location and condition of the machines 24 hours/364.",
    "Languages":"SQL ,Asp.Net,HTML,JavaScript,Bootstrap,CSS,AJAX "
}

}


}

 }]

 console.log(MyResume);
 