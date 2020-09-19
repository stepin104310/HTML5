var nam='Raju'
var city = 'Bangalore';
var msg='Have a good day.'+
        'welcome to jS';
var details = nam+' is from '+city; 
console.log(details);
console.log(nam,'is from',city)
console.log(msg);
{
        const a=20;
}
// console.log(a);

//using backticks
var msg=`Have a good day.
          welcome to jS`;

//template strings
var details = `${nam} is from ${city}`; 
console.log(details);
console.log(`${nam} is from ${city}`);
console.log(msg);

let price = 90;
let quantity =45;
console.log(`Total cost is, ${price*quantity}`);
console.log('Total cost is',(price*quantity));