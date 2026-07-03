# JavaScript Scope, Variable Shadowing, `let`, `var`, and `const`

## Table of Contents

- [Scope](#scope)
- [Variable Shadowing](#variable-shadowing)
- [`let`, `var`, and `const`](#let-var-and-const)
- [Quick Revision](#quick-revision)

---

# Scope

## What is Scope?

**Scope** in JavaScript determines **where variables, functions, and objects are accessible** in your code.

There are four types of scope:

- Global Scope
- Function Scope
- Block Scope
- Lexical Scope

## 1. Global Scope

Variables declared outside any function or block belong to the global scope.

```javascript
let name = "Alice";

function greet() {
  console.log(name);
}

greet(); // Alice
console.log(name); // Alice
```

---

## 2. Function Scope

Variables declared inside a function (`var`, `let`, or `const`) are accessible only within that function.

```javascript
function test() {
  let age = 25;
  console.log(age);
}

test();

console.log(age); // ❌ ReferenceError
```

---

## 3. Block Scope

`let` and `const` are block-scoped.

```javascript
if (true) {
  let x = 10;
  const y = 20;

  console.log(x);
  console.log(y);
}

console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
```

### `var` is NOT Block Scoped

```javascript
if (true) {
  var a = 100;
}

console.log(a); // 100
```

---

## 4. Lexical Scope

JavaScript uses **lexical (static) scoping**, meaning an inner function can access variables from its outer function.

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer(); // Hello
```

---

# Variable Shadowing

## Definition

Variable shadowing occurs when a variable declared in an **inner scope** has the **same name** as a variable declared in an **outer scope**.

The inner variable **shadows (hides)** the outer variable within its own scope.

## 1. Basic Shadowing

```javascript
let name = "John";

function greet() {
  let name = "Alice";
  console.log(name);
}

greet();
console.log(name);

// Output:
// Alice
// John
```

---

## 2. Block Shadowing

```javascript
let x = 10;

if (true) {
  let x = 20;
  console.log(x);
}

console.log(x);

// Output:
// 20
// 10
```

---

## 3. Shadowing with `var`

```javascript
var a = 5;

function test() {
  var a = 10;
  console.log(a);
}

test();
console.log(a);

// Output:
// 10
// 5
```

---

## 4. `let` Shadowing `var`

```javascript
var num = 100;

if (true) {
  let num = 200;
  console.log(num);
}

console.log(num);

// Output:
// 200
// 100
```

---

## 5. Illegal Shadowing

A `var` declaration **cannot** shadow a `let` or `const` declaration in the same function/global scope.

```javascript
let a = 10;

{
  var a = 20; // ❌ SyntaxError
}
```

---

## 6. Legal Shadowing

```javascript
var a = 10;

{
  let a = 20;
  console.log(a);
}

console.log(a);

// Output:
// 20
// 10
```

---

## 7. Nested Function Shadowing

```javascript
let message = "Outer";

function outer() {
  let message = "Middle";

  function inner() {
    let message = "Inner";
    console.log(message);
  }

  inner();
}

outer();

// Output:
// Inner
```

---

## Shadowing Summary

| Scenario                                  | Valid      |
| ----------------------------------------- | ---------- |
| `let` shadows `let`                   | ✅         |
| `let` shadows `var`                   | ✅         |
| `const` shadows `let`                 | ✅         |
| `var` shadows `var`                   | ✅         |
| `var` shadows outer `let` / `const` | ❌ Illegal |

---

# `let`, `var`, and `const`

## Comparison Table

| Feature             | `var`  | `let` | `const` |
| ------------------- | -------- | ------- | --------- |
| Scope               | Function | Block   | Block     |
| Redeclaration       | ✅       | ❌      | ❌        |
| Reassignment        | ✅       | ✅      | ❌        |
| Hoisted             | ✅       | ✅      | ✅        |
| Temporal Dead Zone  | ❌       | ✅      | ✅        |
| Must be initialized | ❌       | ❌      | ✅        |

---

## Scope

### `var`

```javascript
if (true) {
  var a = 10;
}

console.log(a); // 10
```

- Function scoped
- Global scoped when declared outside a function

### `let` and `const`

```javascript
if (true) {
  let b = 20;
  const c = 30;
}

console.log(b); // ❌
console.log(c); // ❌
```

---

## `var` vs `let` in Loops

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// 3
// 3
// 3
```

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// 0
// 1
// 2
```

---

## Redeclaration

```javascript
var x = 10;
var x = 20; // ✅

let y = 10;
// let y = 20; ❌

const z = 10;
// const z = 20; ❌
```

---

## Reassignment

```javascript
var a = 10;
a = 15;

let b = 20;
b = 25;

const c = 30;
// c = 35; ❌
```

---

## Hoisting

### `var`

```javascript
console.log(a); // undefined

var a = 10;
```

### `let`

```javascript
console.log(b); // ❌ ReferenceError

let b = 20;
```

### `const`

```javascript
console.log(c); // ❌ ReferenceError

const c = 30;
```

### Temporal Dead Zone (TDZ))

> `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration.
>
> The **Temporal Dead Zone (TDZ)** is the time between entering a scope and the execution of a `let` or `const` declaration, during which the variable cannot be accessed.

---

## Initialization

```javascript
var a;
console.log(a); // undefined

let b;
console.log(b); // undefined

// const c; ❌ SyntaxError
const c = 10;
```

`const` must be initialized when declared.

---

## `const` with Objects

`const` prevents **reassignment**, not **mutation**.

```javascript
const person = {
  name: "John"
};

person.name = "Alice"; // ✅ Allowed

// person = {}; ❌ TypeError
```

---

# Quick Revision

- `var` → Function scoped
- `let` → Block scoped
- `const` → Block scoped and cannot be reassigned
- `var` can be redeclared
- `let` and `const` cannot be redeclared
- `const` must be initialized
- All three are hoisted
- `let` and `const` have a Temporal Dead Zone (TDZ)
- Shadowing means an inner variable hides an outer variable
- Illegal shadowing occurs when `var` attempts to shadow `let` or `const`
