// Q4. Currying vs Partial Application
/*
Currying
---------
One argument at a time.
sum(1)(2)(3)

Partial Application
-------------------
Some arguments at a time.

sum(1,2)(3)
sum(1)(2,3)
*/
function sum(a, b, c) {
    return a + b + c;
}
// Partial Application
function partial(fn, ...fixedArgs) {
    return function (...remainingArgs) {
        return fn(...fixedArgs, ...remainingArgs);
    };
}

const partialSum = partial(sum, 10, 20);
console.log(partialSum(30)); // # Output: 60
// Partial Application fixes a few arguments first.
// Remaining arguments are supplied later.


// Currying Example
function currySum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(currySum(10)(20)(30)); // # Output: 60

// Currying accepts one argument at every call.

// Difference

/*
Currying                  Partial Application
One argument              Multiple arguments
sum(1)(2)(3)              sum(1,2)(3)
Function transformation   Function specialization
*/


// Q5. DOM Manipulation

/*
<h1 id="heading"></h1>
*/

function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    };
}

const updateHeading = updateElementText("heading");
updateHeading("Hello JavaScript");


// Create reusable DOM updater.

// Another Example
function changeColor(id) {
    return function (color) {
        document.querySelector("#" + id).style.color = color;
    };
}
const headingColor = changeColor("heading");
headingColor("red");


// Q6. Curry Polyfill
/*
Convert
sum(a,b,c,d)
into
sum(a)(b)(c)(d)
*/

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function (...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

// Original Function
function total(a, b, c, d) {
    return a + b + c + d;
}
const curriedTotal = curry(total);
console.log(curriedTotal(1)(2)(3)(4)); // # Output: 10
console.log(curriedTotal(1,2)(3,4)); // # Output: 10
console.log(curriedTotal(1)(2,3)(4)); // # Output: 10
console.log(curriedTotal(1,2,3,4)); // # Output: 10

// fn.length gives total parameters.
// Keep collecting arguments until enough are received.


// Currying vs Closures
/*
Currying

✔ Function transformation
✔ One argument at a time
✔ Uses Closures internally

Closure
✔ Remembers outer variables
✔ Data Hiding
✔ Module Pattern
✔ Memoization
*/


// Real World Uses

/*
✔ React Event Handlers
const handleClick = id => event => {}
    - Redux
    - Logging
    - API Wrapper
    - Authentication
    - Validation
    - Discount Calculator
    - DOM Manipulation
    - Functional Programming
*/


// Advantages
/*  - Reusable Functions
    - Cleaner Code
    - Avoid Duplicate Arguments
    - Better Readability
    - Function Composition
    - Easy Testing
*/

// Disadvantages
/*
    - Hard to understand initially
    - More nested functions
    - Debugging can be difficult
*/


// Interview Questions

/*
1. What is Currying?
2. Why do we need Currying?
3. Difference between Currying and Partial Application?
4. Difference between Currying and Closures?
5. What is Infinite Currying?
6. Explain evaluate("sum")(4)(2).
7. Explain curry() Polyfill.
8. Why do we use fn.length?
9. Real-world uses of Currying?
10. Can Arrow Functions be Curried?
11. How is Currying used in React?
12. What are advantages and disadvantages of Currying?
*/

// One-Line Definition
// Currying converts a function with multiple arguments
// into a sequence of functions taking one argument at a time.