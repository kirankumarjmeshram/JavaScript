// Q5. Private Counter
function counter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        value() {
            return count;
        }
    };
}

const c = counter();

c.increment();
c.increment();

console.log(c.value()); // # Output: 2

// Answer:
// count is private.
// Accessible only through returned methods.


// Q6. Module Pattern

const Module = (function () {

    function privateMethod() {
        console.log("Private"); // # Output: Private
    }

    return {
        publicMethod() {
            console.log("Public"); // # Output: Public
            privateMethod();
        }
    };

})();

Module.publicMethod();

// Module.privateMethod(); // # Error

// Answer:
// Module Pattern hides private members
// and exposes only public methods.


// Q7. Make this run only once

function likeVideo() {

    let called = false;

    return function () {

        if (called) {
            console.log("Already Subscribed"); // # Output: Already Subscribed
            return;
        }

        called = true;
        console.log("Subscribed"); // # Output: Subscribed
    };
}

const subscribe = likeVideo();

subscribe();
subscribe();
subscribe();

// Output:
// Subscribed
// Already Subscribed
// Already Subscribed

// Answer:
// Closure remembers "called".


/*------------------------------------------------*/


// Q8. Once Polyfill

function once(fn, context) {

    let result;

    return function (...args) {

        if (fn) {
            result = fn.apply(context || this, args);
            fn = null;
        }

        return result;
    };
}

const hello = once((a, b) => {
    console.log("Hello", a, b);
});

hello(1, 2); // # Output: Hello 1 2
hello(5, 6); // # No Output
hello(10, 20); // # No Output

// Answer:
// Function executes only once.
// Remaining calls return previous result.


// Q9. Memoize Polyfill

function memoize(fn) {

    const cache = {};

    return function (...args) {

        const key = JSON.stringify(args);

        if (!cache[key]) {
            cache[key] = fn(...args);
        }

        return cache[key];
    };
}

function multiply(a, b) {

    console.log("Calculating...");

    for (let i = 0; i < 100000000; i++) {}

    return a * b;
}

const fastMultiply = memoize(multiply);

console.time("First");
console.log(fastMultiply(10, 20)); // # Output: 200
console.timeEnd("First");

console.time("Second");
console.log(fastMultiply(10, 20)); // # Output: 200
console.timeEnd("Second");

// Answer:
// First call -> Calculates
// Second call -> Returns cached value.


// Another Example

const factorial = memoize(function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
});

console.log(factorial(5)); // # Output: 120
console.log(factorial(5)); // # Output: 120 (Cached)


// Q10. Closure vs Scope

/*
Scope
-----
Defines where variables are accessible.

Closure
-------
Remembers outer variables after
outer function execution.

Difference

Scope
- Controls accessibility.
- Exists naturally.

Closure
- Retains variables.
- Keeps outer scope alive.
*/


// Example

function test() {
    let x = 10;
}
// console.log(x); // # Error
function outerFn() {
    let x = 10;

    return function () {
        console.log(x); // # Output: 10
    };
}

outerFn()();


// Interview Uses

/*
✔ Data Hiding
✔ Private Variables
✔ Memoization
✔ Module Pattern
✔ Function Factory
✔ Currying
✔ Event Listeners
✔ setTimeout
✔ setInterval
✔ React Hooks
✔ Callbacks
✔ API Caching
*/


// Frequently Asked Interview Questions

/*
1. What is Closure?
2. Why do Closures exist?
3. What is Lexical Scope?
4. Difference between Scope and Closure?
5. Explain Variable Shadowing.
6. var vs let in Closures?
7. Why does setTimeout print 3 3 3?
8. How to print 0 1 2 using var?
9. What is Module Pattern?
10. What is Memoization?
11. What is Once Polyfill?
12. How does Closure help in Data Hiding?
13. Real-world use cases of Closure?
*/


// One-Line Interview Definition

// Closure = Function + Lexical Environment
// A closure remembers variables from its outer scope
// even after the outer function has finished execution.