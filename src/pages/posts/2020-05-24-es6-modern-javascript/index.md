---
path: '/modern-javascript-es6'
date: '2020-05-25'
title: 'Modern JavaScript: ES6 and Beyond'
tags: ['javascript']
category: 'code'
---

ECMAScript 2015, also known as ES6, introduced _a lot_ of new features to JavaScript. Since then, new features have been released incrementally each year. Features from ES6 and beyond are commonly referred to as Modern JavaScript because of these significant changes. This blog explores a few commonly used ES6, ES7, ES8, ES9, and ES10 features.

## What is ECMAScript

[ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) is a [scripting language specification](https://en.wikipedia.org/wiki/Scripting_language). JavaScript, a programming language, is an implementation of ECMAScript specifications. [ECMA International](https://www.ecma-international.org/) is an association that develops the ES specifications. [TC39](https://tc39.es/), a committee within ECMA International, determines how JavaScript works and what new features it should have. In 2015, there was a huge shift because ES6 was introduced, meaning a lot of new features were released. (The previous release to ES6 was in 2011, ES5.1). And since 2015, TC39 has released new features incrementally each year. As a result, there aren't huge feature releases and huge gaps in time between releases.

In plain English, ES is short for ECMAScript. ES is a standard, kinda like a book of rules. Scripting languages follow ES standards. And JavaScript is a scripting language that follows those ES standards.

## ES6 (2015)

### Variable declaration

The `var` keyword defines a variable globally, or locally to an entire function, regardless of block scope. Variables declared with `var` can be hoisted, reassigned, and redeclared.

The `let` keyword allows for block-scoped variables. Variables declared with `let` cannot be hoisted or redeclared. But _can_ be reassigned.

```js:title=ES5
var name = 'Lisa'
```

```js:title=ES6
let name = 'Lisa'
name = 'Bart' // 'Bart'
let name = 'Maggie' // 'Maggie'
```

- [MDN reference: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

### Constant declaration

The `const` keyword allows for block-scoped variables. Variables declared with `const` cannot be hoisted, redeclared, nor reassigned. But they are mutable.

```js:title=ES6
const name = 'Lisa'
name = 'Bart' // TypeError, cannot reassign constant variable
const name = 'Maggie' // SyntaxError, cannot redeclare constant variable
```

- [MDN reference: const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

### Arrow functions

Arrow function expressions are a syntactically shorter way of writing [regular function expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function). Arrow functions do not have bindings to `this`, shouldn't be used as methods, and cannot be used as constructors.

```js:title=ES5
function sum(a, b) {
  console.log(a + b)
}

const sum = function(a, b) {
  console.log(a + b)
}
```

```js:title=ES6
const sum = (a, b) => {
  console.log(a + b)
}
```

- [MDN reference: arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### Template literals

Template literals allow us to embed expressions in strings with cleaner syntax. Template literals are enclosed by backticks. They can have placeholders indicated with brackets and a dollar sign, like `${variableName}`.

```js
let firstName = 'Lisa'
let lastName = 'Simpson'
```

```js:title=ES5
'Hello, ' + firstName + ' ' + lastName + '.'
// 'Hello, Lisa Simpson.'
```

```js:title=ES6
;`Hello, ${firstName} ${lastName}.`
// 'Hello, Lisa Simpson.'
```

- [MDN reference: template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

### Destructuring

Destructuring allows us to unpack values from arrays, or properties from objects, into distinct variables. Destructuring is heavily used [in React](https://kentcdodds.com/blog/react-hooks-array-destructuring-fundamentals).

Array destructuring:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7]
```

```js:title=ES5
const one = numbers[0]
const two = numbers[1]

console.log(one) // 1
console.log(two) // 2
```

```js:title=ES6
const [one, two, three, ...rest] = numbers

console.log(one) // 1
console.log(two) // 2
console.log(rest) // [3, 4, 5, 6, 7]
```

Object destructuring:

```js
const lisa = {
  age: 8,
  school: 'Springfield Elementary',
}
```

```js:title=ES5
const age = lisa.age
const school = lisa.school

console.log(age) // 8
console.log(school) // 'Springfield Elementary'
```

```js:title=ES6
const { age, school } = lisa

console.log(age) // 8
console.log(school) // 'Springfield Elementary'
```

- [MDN reference: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### Spread syntax

Spread syntax allows iterables like an array expressions or strings to be expanded.

Spread syntax can be used to expand an array.

```js:title=ES6
const family = ['Lisa', 'Bart', 'Maggie', 'Marge', 'Homer']
const pets = ["Santa's Little Helper", 'Snowball']

const theSimpsons = [...family, ...pets]

console.log(theSimpsons)
// ['Lisa', 'Bart', 'Maggie', 'Marge', 'Homer', "Santa's Little Helper", 'Snowball']
```

Spread syntax can be used for function arguments.

```js:title=ES6
const array = [1, 2, 3]
const sumNumbers = (a, b, c) => a + b + c

console.log(sumNumbers(...array)) // 6
```

- [MDN reference: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Array iteration

The `for...of` statement creates a loop iterating over iterable objects like arrays, maps, and sets.

```js
const array = ['Lisa', 'Marge', 'Maggie']
```

```js:title=ES5
for (let i = 0; i < array.length; i++) {
  console.log(array[i]) // 'Lisa', 'Marge', 'Maggie'
}
```

```js:title=ES6
for (i of array) {
  console.log(array[i]) // 'Lisa', 'Marge', 'Maggie'
}
```

- [MDN reference: for...of statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)

### Promises

A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```js:title=ES6
function firstHello() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('First hello!')
      resolve()
    }, 5000)
  })
}

function secondHello() {
  console.log('Second hello!!')
}

console.log(firstHello().then(secondHello))
// Promise pending <-- promise pends for 5 seconds
// First hello!
// Second hello!!
```

- [MDN reference: Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## ES7 (2016)

### Array.prototype.includes()

The `includes()` method returns `true` if an array includes a certain specified value, and returns `false` if it doesn't.

```js:title=ES7
const simpsons = ['Lisa', 'Bart', 'Maggie', 'Marge', 'Homer']

simpsons.includes('Lisa') // returns true

simpsons.includes('Ned') // returns false
```

- [MDN reference: includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

### Exponentiation Operator

The exponentiation operator (\*\*) returns the result of the first operand raised to the power of the second operand.

The exponentiation operator is right-associative. For example, `2 ** 3 ** 3` is equal to `2 ** (3 ** 3)`

```js:title=ES6
Math.pow(2, 3) // 8
```

```js:title=ES7
2 ** 3 // 8

2 ** (3 ** 3) // 134217728
```

- [MDN reference: Exponentiation (\*\*)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

## ES 8 (2017)

### Object.values()

The `Object.values()` method takes in an object as an argument and returns an array of the object's values. The values are returned in the same order as if invoked by a `for...in` loop.

```js:title=ES8
const character = {
  name: 'Lisa',
  age: 8,
  school: 'Springfield Elementary',
}

console.log(Object.values(character))
// ['Lisa', 8, 'Springfield Elementary']
```

- [MDN reference: Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values)

### Object.entries()

The `Object.entries()` method takes in an object as an argument and returns an array with arrays of key-value pairs. The values are returned in the same order as if invoked by a `for...in` loop.

```js:title=ES8
const character = {
  name: 'Lisa',
  age: 8,
  school: 'Springfield Elementary',
}

console.log(Object.entries(character))
// [[name: 'Lisa'], [age: 8], [school: 'Springfield Elementary']]
```

- [MDN reference: Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)

### String.prototype.padEnd()

The `padEnd()` method pads the end of a given string with another string until it reaches the specified length. The other string may repeat multiple times if needed.

```js:title=ES8
'The'.padEnd(10) // 'The       '
'The'.padEnd(10, ' Simpsons') // 'The Simpso'
'The'.padEnd(12, ' Simpsons') // 'The Simpsons'
'The'.padEnd(15, ' Simpsons') // 'The Simpsons Si'
```

- [MDN reference: String.prototype.padEnd()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)

### String.prototype.padStart()

The `padStart()` method pads the start of a given string with another string until it reaches the specified length. The other string may repeat multiple times if needed.

```js:title=ES8
'Simpsons'.padStart(10) // '  Simpsons'
'Simpsons'.padStart(10, 'The ') // 'ThSimpsons'
'Simpsons'.padStart(12, 'The ') // 'The Simpsons'
'Simpsons'.padStart(15, 'The ') // 'The TheSimpsons'
```

- [MDN reference: String.prototype.padStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)

### Trailing commas

A trailing comma is the last comma at the end of the last element. It comes in handy if you need to add a new line without modifying the previous last line since it already has a comma. The trailing comma also makes version-control diffs cleaner.

```js:title=ES8
const character = {
  name: 'Lisa',
  age: 8,
  school: 'Springfield Elementary',
}
```

- [MDN reference: Trailing commas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

### Async functions (async/await)

Async/await is syntactic sugar on top of promises. This makes asynchronous code easier to read and write.

An async function knows it might expect an `await` keyword to invoke asynchronous code. An async function also returns a promise rather than directly returning a value. The `async` keyword in front of a function turns the function into an [async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) function.

The `await` keyword only works inside async functions. The `await` keyword is used to pause code on a line with a promise until the promise is fufilled. Meanwhile, the rest of the code continues to execute.

Here's what the syntax looks like:

```js:title=ES8
async function hello() {
  return (greeting = await Promise.resolve('Hello'))
}
```

Here's an example that illustrates the power of async/await:

```js:title=ES8
function delayedHello() {
  return new Promise(res => {
    setTimeout(() => res(console.log('A delayed hello!')), 5000)
  })
}

async function logHello() {
  await delayedHello()
}

console.log('Before logHello')
logHello()
console.log('After logHello')

// Before logHello
// After logHello
// A delayed hello! <-- logs after 5 seconds has passed
```

- [MDN reference: async/await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)

## ES9 (2018)

### Promise.prototype.finally()

The `finally()` method always executes no matter what, whether the Promise is resolved or rejected.

```js:title=ES9
const hello = () => {
  console.log('hello')
}

try {
  hello()
} catch (error) {
  console.log(error)
} finally {
  console.log('all done!')
}
// hello
// all done! <-- logs when promise is resolved

try {
  functionDoesNotExist()
} catch (error) {
  console.log(error)
} finally {
  console.log('all done!')
}
// ReferenceError: functionDoesNotExist is not defined
// all done <-- logs when promise is rejected
```

- [MDN reference: Promise.prototype.finally()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
- [Interesting note on returns with finally()](https://stackoverflow.com/questions/3837994/why-does-a-return-in-finally-override-try)

## ES10 (2019)

### Array.flat()

The `flat()` method creates a new array with all sub-arrays elements concatenated into it. It has an optional argument, depth, with default 1. Depth specifies how deep the nested array should be flattened.

```js:title=ES10
const array = [1, 2, 3, [4, 5]]
console.log(array.flat())
// [1, 2, 3, 4, 5]

const array2 = [1, 2, [3, [4, 5]]]

console.log(array2.flat())
// [1, 2, 3, [4, 5]]

console.log(array2.flat(2))
// [1, 2, 3, 4, 5]
```

- [MDN reference: Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

### Array.flatMap()

The `flat.map()` method maps each element using a mapping function, then flattens the result into a new array. It's the same as using `map()`, then `flat()` with a depth of 1.

```js:title=ES10-map()-then-flat()
const array = [1, 2, 3, 4, 5]

console.log(array.map(x => [x * 2]))
// [[2], [4], [6], [8], [10]]

console.log(array.map(x => [x * 2]).flat())
// [2, 4, 6, 8, 10]
```

```js:title=ES10-flatMap()
const array = [1, 2, 3, 4, 5]

console.log(array.flatMap(x => [x * 2]))
// [2, 4, 6, 8, 10]
```

- [MDN reference: Array.prototype.flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

### Object.fromEntries()

The `Object.fromEntries()` method transforms a list of key-value pairs into an object.

```js:title=ES10
const lisaArray = [
  ['grade', 2],
  ['school', 'Springfield Elementary'],
]

console.log(Object.fromEntries(lisaArray))
// {grade: 2, school: "Springfield Elementary"}

const lisaMap = new Map([
  ['grade', 2],
  ['school', 'Springfield Elementary'],
])

console.log(Object.fromEntries(lisaMap))
// {grade: 2, school: "Springfield Elementary"}
```

- [MDN reference: Object.fromEntries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)

### TrimStart()

The `trimStart()` method removes whitespace from the beginning of a string.

```js:title=ES10
const simpsons = '    The Simpsons    '

console.log(simpsons.trimStart())
// 'The Simpsons     '
```

- [MDN reference: String.prototype.trimStart()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)

### TrimEnd()

The `trimEnd()` method removes whitespace from the end of a string.

```js:title=ES10
const simpsons = '    The Simpsons    '

console.log(simpsons.trimEnd())
// '    The Simpsons'
```

- [MDN reference: String.prototype.trimEnd()](https://www.google.com/search?q=trimend&oq=trimend&aqs=chrome..69i57j0l7.777j0j4&sourceid=chrome&ie=UTF-8)

### Optional Catch Binding

In `try... catch`, the error parameter is now optional.

```js:title=ES10
try {
  // do something
} catch (err) {
  // handle error
}
```

```js:title=ES10
try {
  // do something
} catch {
  // handle error
}
```

- [MDN reference: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Conclusion

And there we have it! You now know how to use a lot of commonly used ES6+ JavaScript features. Test your JavaScript knowledge with some [JavaScript questions by Lydia Hallie](https://github.com/lydiahallie/javascript-questions).
