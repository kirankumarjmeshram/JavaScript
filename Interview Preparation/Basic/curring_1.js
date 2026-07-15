// Currying in JavaScript
/*
Currying is a technique where a function
takes one argument at a time instead of
taking all arguments together.

Normal Function
f(a,b,c)

Curried Function
f(a)(b)(c)
*/

// Why Currying?
/*  - Reuse functions
    - Avoid passing same arguments repeatedly
    - Function specialization
    - Cleaner code
    - Used in React, Redux, Functional Programming
*/


// Normal Function
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(2, 6, 1)); // # Output: 9

// Curried Function
function curriedSum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(curriedSum(2)(6)(1)); // # Output: 9

// Each function takes one argument.
// Final function returns the result.

// Q1. sum(2)(6)(1)
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(add(2)(6)(1)); // # Output: 9
console.log(add(5)(10)(15)); // # Output: 30
// add(2)
// returns function waiting for b
// returns function waiting for c
// returns final sum


// Another Example
function multiply(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}
console.log(multiply(2)(3)(4)); // # Output: 24

// Q2. evaluate("sum")(4)(2)
function evaluate(operation) {
    return function (a) {
        return function (b) {
            switch (operation) {
                case "sum":
                    return a + b;
                case "subtract":
                    return a - b;
                case "multiply":
                    return a * b;
                case "divide":
                    return a / b;
                default:
                    return "Invalid Operation";
            }
        };
    };
}

console.log(evaluate("sum")(4)(2)); // # Output: 6
console.log(evaluate("subtract")(4)(2)); // # Output: 2
console.log(evaluate("multiply")(4)(2)); // # Output: 8
console.log(evaluate("divide")(4)(2)); // # Output: 2
// First function selects operation.
// Second takes first number.
// Third takes second number.

// Another Example
const sum = evaluate("sum");
const multiplyNumbers = evaluate("multiply");
console.log(sum(20)(30)); // # Output: 50
console.log(multiplyNumbers(5)(10)); // # Output: 50
// Reuse same function multiple times.


// Q3. Infinite Currying
/*
Requirement
sum(1)(2)(3)(4)(5)()
*/
function infiniteSum(a) {
    return function (b) {
        if (b !== undefined) {
            return infiniteSum(a + b);
        }
        return a;
    };
}
console.log(infiniteSum(1)(2)(3)(4)()); // # Output: 10
console.log(infiniteSum(5)(5)(5)()); // # Output: 15
console.log(infiniteSum(10)(20)(30)(40)()); // # Output: 100
// Keep returning functions until
// an empty call () is made.

// Another Version
function addNumbers(a) {
    return function (b) {
        return b ? addNumbers(a + b) : a;
    };
}
console.log(addNumbers(1)(2)(3)(4)(5)()); // # Output: 15


// Advantages of Currying
/*  - Better Reusability
    - Cleaner Code
    - Function Composition
    - Function Specialization
    - Avoid Duplicate Arguments
    - Functional Programming
*/

// Real Example
function discount(discountPercent) {
    return function (price) {
        return price - price * discountPercent / 100;
    };
}

const studentDiscount = discount(20);
const employeeDiscount = discount(10);

console.log(studentDiscount(1000)); // # Output: 800
console.log(studentDiscount(500)); // # Output: 400
console.log(employeeDiscount(1000)); // # Output: 900


// Create specialized functions once
// and reuse everywhere.
// Interview Notes
/*
Currying -> One argument at a time
    Uses
    - React
    - Redux
    - Event Handlers
    - Functional Programming
    - Reusable Functions
    - Function Composition
*/