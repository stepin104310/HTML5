var stud ={
    name : "Ram",
    Id:20,
    hobbies: ['music','sports'],
    address:{
        city : 'ban','state': 'KARNATAKA'
    }
}

var jsonstring = JSON.stringify(stud);
console.log(jsonstring);
var jsobj = JSON.parse(jsonstring);
console.log(jsobj);