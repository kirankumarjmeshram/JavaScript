//Functions
//function declaration or function defination or function statement
function sum (a,b) {
    return a+b;
};
//Function Expression
const square = function(num) {
    return num * num;
};
// ananymous function
//dont have name 
//can be assingn to variable or can be pass as callback
// function(num) {
//     return num * num;
// }

// First Class function
// n JavaScript, functions are first-class citizens (or first-class functions). 
// This means functions are treated like any other value (such as numbers or strings)

function displaySquare(fn) {
    console.log(fn("Square is " + fn(5)))
}
// displaySquare(square)

//IIFE (Immediately Invoked Function Expression)
(function product(a, b) {
    console.log(a * b);
})(7, 8);//56

(function (x){
    return function(y) {
        console.log(x)
    }
})(5)(3);//5

(function (x){
    return (function(y) {
        console.log(x)
    })(5)
})(3);//3

// here i is block scope variable 
// so every time loop runs it create new block for i
for(let i=0;i<5;i++) {
    setTimeout(
        function () {
            console.log(i)
        }, i*10
    )
}
// 0
// 1
// 2
// 3
// 4

//hoisting of function 
// functions are hoisted completely

var x = 21;
var fun = function () {
    console.log(x);
    var x = 20
}
fun();//undefined
// here in hoisting fn as
// function () {
//     var x = undefined;

//     console.log(x); // undefined
//     x = 20;
// }

// so Local scope → var x exists (currently undefined because of hoisting)
//Global scope → It never reaches here because it already found a local x.

// Params vs Arguments
// params inside function like square(x)=>x*x  here x is params
//arguments are like square(5) here 5 is arguments 

//Rest vs speard operator

function multiply(...nums) { //rest operator , must be last formal parameter
    console.log(nums[0]*nums[1])
}

var arr = [5,6]
multiply(...arr)//here spread operator
//30

//Call back functions
//like eventlistener , map, filter, reduce

// Arow fn
// implecit return =>
// canot have arguments
// this points to global object
const add = (a,b) => a+b ;