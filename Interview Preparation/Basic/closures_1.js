// Closure

/*
Closure = Function + Lexical Environment

A closure is a function that remembers variables
from its outer scope even after the outer function
has finished execution.
*/
/**
1. What is Closure?
2. Closure Scope Chain
3. Q1: What will be logged to console? (Variable Shadowing)
4. Q2: Write a function that would allow you to do this
5. Q3: Time Optimization
6. Q4: Block Scope and setTimeout in Closure
7. Q5: How would you use a Closure to create a Private Counter?
8. Q6: What is Module Pattern?
9. Q7: Make this run only once
10.Q8: Once Polyfill
11.Q9: Memoize Polyfill
12.Q10: Difference between Closure and Scope
 */


function outer() {
    let name = "Mozilla";

    function inner() {
        console.log(name); // # Output: Mozilla
    }

    return inner; // # Returns closure
}

const fn = outer();
fn(); // # Output: Mozilla

// Answer: inner() remembers variable "name".


// Closure Scope Chain

/*
Closure can access
1. Local Scope
2. Outer Scope
3. Global Scope
*/

let company = "Google";

function parent() {
    let language = "JavaScript";

    return function(version) {
        console.log(version); // # Output: 2026
        console.log(language); // # Output: JavaScript
        console.log(company); // # Output: Google
    };
}

parent()(2026);

// Answer:
// Local → Outer → Global


// Q1. Variable Shadowing

let count = 0;

(function () {
    if (count === 0) {
        let count = 1;
        console.log(count); // # Output: 1
    }
    console.log(count); // # Output: 0
})();

// Answer:
// 1
// 0
// Inner variable hides outer variable (Shadowing).


// Another Example

let a = 100;

function demo() {
    let a = 50;
    console.log(a); // # Output: 50
}

demo();
console.log(a); // # Output: 100

// Illegal Shadowing

/*
let x = 10;

{
    var x = 20; // # Error
}
*/


// Q2. Function Factory

function createBase(base) {
    return function(num) {
        return base + num; // # Returns base + num
    };
}

const addSix = createBase(6);

console.log(addSix(10)); // # Output: 16
console.log(addSix(21)); // # Output: 27

// Answer:
// Closure remembers base = 6.

function multiplyBy(num) {
    return function(value) {
        return num * value;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // # Output: 10
console.log(triple(5)); // # Output: 15


// Q3. Time Optimization

function find() {
    const cache = [];

    for (let i = 0; i < 1000000; i++) {
        cache[i] = i * i;
    }

    return function(index) {
        return cache[index];
    };
}

const square = find();

console.log(square(6)); // # Output: 36
console.log(square(100)); // # Output: 10000

// Answer:
// Heavy calculation runs only once.
// Closure stores cache in memory.
// Used in Memoization, Cache and Optimization.


// Without Closure

function normal(index) {
    const arr = [];

    for (let i = 0; i < 1000000; i++) {
        arr[i] = i * i;
    }

    return arr[index];
}

console.log(normal(6)); // # Output: 36


// Q4. setTimeout + Closure

for (var i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // # Output: 3 3 3
    }, 1000);
}

// Answer:
// var has function scope.
// All callbacks share same variable.


// Using let

for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // # Output: 0 1 2
    }, 1000);
}

// Answer:
// let creates a new variable for every iteration.


// Using Closure

for (var i = 0; i < 3; i++) {
    (function(x) {
        setTimeout(function () {
            console.log(x); // # Output: 0 1 2
        }, 1000);
    })(i);
}

// Answer:
// Each closure stores its own x.
// Output:
// 0
// 1
// 2