---
path: '/javascript-var-let-const'
date: '2020-05-27'
title: 'JavaScript: var, let, const'
tags: ['javascript']
category: 'code'
---

There are three keywords used to declare variables in JavaScript: `var`, `let`, `const`.

Before [ES6 was introduced in 2015](https://sophiali.dev/modern-javascript-es6), `var` was the only way to declare a variable. With the release of ES6, `let` and `const` were introduced to solve the issue of hoisting.

This blog explores the differences between `var`, `let`, `const`, and when to use them.

Code along with me while going through this blog to drill in these concepts and build your muscle memory.

## `var` vs `let` vs `const` comparison

Here's a table with an overview of the differences between the three ways to declare variables in JavaScript.

| Keyword | Scope  | Hoisting | Can be Reassigned | Can be Redeclared |
| :------ | :----- | :------- | :---------------- | ----------------- |
| var     | global | yes      | yes               | yes               |
| let     | block  | no       | yes               | no                |
| const   | block  | no       | no                | no                |

- [Table by Tania Rascia](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

## Declaring a variable

Variables are like storage containers that hold stuff inside. And these storage containers are given names.

To use a variable in JavaScript, it needs to be declared. There are three ways to declare a variable in JavaScript, with the keywords `var`, `let`, or `const`.

The following code declares the variables `bird`, `mammal`, `fish`, with the keywords `var`, `let`, `const`, respectively.

```js
var bird
let mammal
const fish
```

To store stuff inside a variable, the variable needs to be initialized with the `=` operator.

The following code initializes the variables with a string value. `hummingbird` is stored in the `bird` variable. `bear` is stored in the `mammal` variable. `clownfish` is stored in the `fish` variable.

```js
var bird = 'hummingbird'
let mammal = 'bear'
const fish = 'clownfish'
```

## Scope

Scope is where a variable can be accessed based on where the code is written.

In JavaScript, there are two types of scope, global scope and local scope.

- Global scope: Variables accessible anywhere
- Local scope: Variables accessible only inside the function where the variable is declared

For nested functions, child scopes have access to parent scopes, but parent scopes do not have access to child scopes.

Variables declared with `var` are globally scoped, accessible everywhere. Variables declared with `let` and `const` are locally scoped, accessible only inside its function block.

The following example demonstrates global scope with `var`.

```js
let findingNemo = true
var status = 'missing'

if (findingNemo) {
  var status = 'found' // The status of found is hoisted with var, so it's accessible globally.
  console.log(status)
}

console.log(status)

// Output:
// found
// found
```

The following example demonstrates local scope with `let`.

```js
let findingNemo = true
var status = 'missing'

if (findingNemo) {
  let status = 'found' // The status of found is not hoisted with let, so it is not accessible globally. It is only accessed in the if block.
  console.log(status)
}

console.log(status)

// Output:
// found
// missing
```

## Hoisting

Hoisting is when variables are assigned to the value of `undefined` during the creation phase of the [execution context](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0).

The execution context is the environment where our code is running. In JavaScript, the execution context has two phases: the creation phase followed by the execution phase.

The creation phase is the first part of the execution phase, it happens before any code is executed. This is when the JavaScript interpreter puts all variables and functions into memory space with the value of `undefined`.

`var` allows for hoisting. This might lead variables to return `undefined` unintentionally. Hoisting may lead to unpredicted results, which is why it's recommended to only declare variables with `let` and `const`.

`let` and `const` do not allow for hoisting. When a variable is used before it is declared, an error is thrown.

Variables declared with `var` **are** hoisted. In the following example, when `bird` is logged before `bird` is declared, it logs undefined.

```js
console.log(bird)
var bird = 'hummingbird'
console.log(bird)

// Output:
// undefined
// hummingbird
```

Variables declared with `let` **are not** hoisted. In the following example, when `mammal` is logged before `mammal` is declared, it logs a ReferenceError because `mammal` is not defined.

```js
console.log(mammal)
let mammal = 'bear'
console.log(mammal)

// Output:
// Uncaught ReferenceError: mammal is not defined
// bear
```

Variables declared with `const` **are not** hoisted. In the following example, when `fish` is console logged before `fish` is declared, it logs a ReferenceError because `fish` is not defined.

```js
console.log(fish)
const fish = 'clownfish'
console.log(fish)

// Output:
// Uncaught ReferenceError: fish is not defined
// clownfish
```

## Reassignment

Reassigning a variable means replacing the stuff inside the variable with new stuff. Variables can be reassigned.

Variables declared with `var` **can** be reassigned. In the following example, the value `hummingbird` is replaced with `parrot`.

```js
var bird = 'hummingbird'
console.log(bird)
// hummingbird

bird = 'parrot'
console.log(bird)
// parrot
```

Variables declared with `let` **can** also be reassigned. In the following example, the value `bear` is replaced with `horse`.

```js
let mammal = 'bear'
console.log(mammal)
// bear

mammal = 'horse'
console.log(mammal)
// horse
```

Variables declared with `const` **cannot** be reassigned. In the following example, we cannot replace the value `clownfish` with `guppy`.

```js
const fish = 'clownfish'
fish = 'guppy'
// TypeError: Assignment to constant variable
```

Altough variables declared with `const` can't be reassigned, it doesn't mean they are immutable. We can still change the properties of objects declared with `const`.

The `const` keyword is often used as an indicator that the variable should not be reassigned or modified. The `let` keyword is the preferred method for indicating that a variable can be modified.

In the following example, we mutate the `fishtank` object to update the `guppy` property.

```js
const fishtank = {
  clownfish: 3,
  guppy: 5,
}

console.log(fishtank)
// { clownfish: 3, guppy: 5 }

fishtank.guppy = 10

console.log(fishtank)
// { clownfish: 3, guppy: 10 }
```

## Redeclaring

Redeclaring a variable means to declare a new variable with the same name as a variable that has already been declared.

Variables declared with `var` **can** be redeclared. In the following example, we redeclare `bird` with the value of `parrot`.

```js
var bird = 'hummingbird'
var bird = 'parrot'
console.log(bird)
// parrot
```

Variables declared with `let` and `const` **cannot** be redeclared. In the following examples, we cannot redeclare `mammal` or `fish`.

```js
let mammal = 'bear'
let mammal = 'horse'
// SyntaxError: Identifier 'mammal' has already been declared
```

```js
const fish = 'clownfish'
const fish = 'guppy'
// SyntaxError: Identifier 'fish' has already been declared
```

## Conclusion

And there we have it! This blog goes over the differences between `var`, `let`, and `const`. Now you know how variables are declared in JavaScript and why you should stick with `let` and `const`.

If any of this was confusing or you're looking for more reading, here are some more resources:

- [MDN reference: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [MDN reference: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN reference: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Understanding Variables, Scope, and Hoisting in JavaScript by Tania Rascia](https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript)
- [JavaScript Variables by Flaviocopes](https://flaviocopes.com/javascript-variables/)
- [Stack Overflow: What is the scope of variables in JavaScript?](https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript)
- [Why you shouldn’t reassign values in JavaScript by Zell](https://zellwk.com/blog/dont-reassign/)
