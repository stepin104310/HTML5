// Closure = (function()..)- IIFE(immediately invoke function expression)
(function greet(user){
    console.log('Great day', user)
})("sachin");

//Callback option
setTimeout(function(){
    console.log('This is a demo')
},3000)

setInterval(() => {
    console.log("happy learning")
}, 3000);

// var greet = function()
// {
//     console.log('greet dat')
// }

// var greet = ()=>{
//     console.log('great day')
// }