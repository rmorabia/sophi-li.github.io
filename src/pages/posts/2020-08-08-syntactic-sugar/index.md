---
path: '/syntactic-sugar-examples-javascript'
date: '2020-08-08'
title: 'Examples of Syntactic Sugar in JavaScript'
tags: ['javascript']
category: 'code'
---

When I learned how to code, I often heard and read in tutorials, "this is just syntactic sugar", followed by no further explanation. This left me confused and wondering, what is syntactic sugar and what does it do?

Syntactic sugar is a term for a more concise syntax that provides the same functionality for something that already exists. It aims to help make code shorter, therefore, easier to write. No new functionality is introduced.

It's called syntactic sugar because the cleaner syntax makes code more _sweet_ and pleasant to work with. Syntactic sugar was introduced with ES6+ features.

In this blog, we'll go over a few of examples of syntactic sugar in JavaScript:

- `for...of` loop
- Destructuring

## For...of

The `for...of` loop is syntactic sugar the `for` loop.

The `for` loop creates a loop that executes as long as the condition evaluates to `true`. It takes in three optional expressions, the initialization, condition, and final expression.

In this example, we loop over the `aircrafts` array and print each item in the array.

```js
// Create an array of aircrafts
let aircrafts = ['the bus', 'zephyr one', 'quinjet']

// Loop over the entire array of aircrafts
for (let i = 0; i < aircrafts.length; i++) {
  // print the item at index i of the aircrafts array
  console.log(aircrafts[i])
}

// Output:
// 'the bus'
// 'zephyr one'
// 'quinjet'
```

The `for...of` loop achieves the same functionality of `for` loop, but with shorter syntax. It loops over iterables like arrays, strings, and sets.

The syntax looks like this:

```js
for (variable of iterable) {
  // statement that executes for each variable
}
```

In this example, we achieve the same functionality as the example above. We loop over the `aircrafts` array and print out each item of the array. The syntax is shorter using the `for...of` loop.

```js
// Create an array of aircrafts
let aircrafts = ['the bus', 'zephyr one', 'quinjet']

// Loop over the entire array of aircrafts
for (let i of aircrafts) {
  // Print the item at index i of the aircrafts array
  console.log(i)
}

// Output:
// 'the bus'
// 'zephyr one'
// 'quinjet'
```

- [MDN reference: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN reference: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

## Destructuring

Destructuring is syntactic sugar for creating new variables by assigning properties from objects or items from arrays. Destructuring works for both objects and arrays.

Here's how we create new variables from object properties without destructuring. In this example, we have an object `agent`, with three properties. We create a new variable and assign its value to the property we want from the object. For instance, we create the `name` variable with the value `name` from the `agent` object.

If we have more object properties we need to extract, this would get tedious pretty quickly because we'll have to create each new variable one line at a time.

```js
// Create agent object with properties: name, nickname, power
let agent = {
  name: 'daisy',
  nickname: 'quake',
  power: 'vibration',
}

// Create new variables and assign them to properties from the agent object
let name = agent.name
let nickname = agent.nickname
let power = agent.power

console.log(name) // 'daisy'
console.log(nickname) // 'quake'
console.log(power) // 'vibration'
```

Let's look at how destructuring can make extracting object property names easier.

Like the example above, we create and assign the properties of the object, but with one line using destructuring.

```js
// Create agent object with properties: name, nickname, power
let agent = {
  name: 'daisy',
  nickname: 'quake',
  power: 'vibration',
}

// Use destructuring to create new variables and assign them values from the agent object
let { name, nickname, power } = agent

console.log(name) // 'daisy'
console.log(nickname) // 'quake'
console.log(power) // 'vibration'
```

With destructuring, we can also assign new variable names with a value other than the object's key.

In this example, we create a new variable, `superheroName`, and assign it the value `'quake'`, from `agents`' `nickname` property.

```js
// Create new variable superheroName, with the value agent.nickname ('quake')
let { nickname: superheroName } = agent

console.log(superheroName) // 'quake'
```

Destructuring arrays works similarly.

Here, we create new variables from the `agents` array without destructuring. We assign each new variable to a value from the array. Again, with a lot of values, this get tedious pretty quickly.

```js
// Create agents array
let agents = ['coulson', 'may', 'daisy', 'simmons', 'fitz']

// Create new variables and assign them values from the agents array
let coulson = agents[0]
let may = agents[1]
let daisy = agents[2]
let simmons = agents[3]
let fitz = agents[4]

console.log(coulson) // 'coulson'
console.log(may) // 'may'
console.log(daisy) // 'daisy'
console.log(simmons) // 'simmons
console.log(fitz) // 'fitz'
```

In this example, we achieve the same functionality as above using destructuring. We create new variables from the values of the `agents` array in one line.

```js
// Create agents array
let agents = ['coulson', 'may', 'daisy', 'simmons', 'fitz']

// Use destructuring to create new variables from the agents array
let [coulson, may, daisy, simmons, fitz] = agents

console.log(coulson) // 'coulson'
console.log(may) // 'may'
console.log(daisy) // 'daisy'
console.log(simmons) // 'simmons
console.log(fitz) // 'fitz'
```

- [MDN reference: destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Sweet, but not syntactic sugar: Ternary operator

The ternary operator may seem like syntactic sugar for the `if...else` statement. But, it's not. `if...else` is a statement so it doesn't return anything, but the ternary statement is an expression, so does return something.

In an `if...else` statement, if the condition evaluates to `true`, the statement following `if` will run. Otherwise, if the condition evaluates to `false`, then the statement following the `if` condition will be skipped and the `else` statement will run.

In this example, `i` has a value of `2`. `i` is greater than 1. This means the condition evaluates to `true`, and `'I am true'` is printed.

```js
// Set i to 2
let i = 2

// Check condition i > 1
if (i > 1) {
  // Execute if i > 1 is true
  console.log('I am true')
} else {
  // Execute if i > 1 is false
  console.log('I am false')
}

// Output:
// 'I am true'
```

We can achieve this same functionality with the ternary operator.

The ternary operator takes in three operands:

- A condition, which is followed by a question mark, `?`
- An expression to execute if the condition evaluates to `true`, which is followed by a colon, `:`
- An expression to execute if the condition evaluates to `false`

Here's what the syntax looks like put together:

```js
condition ? expressionIfTrue : expressionIfFalse
```

Let's rewrite the same code from our example above, but using the ternary operator.

Here, we are checking for the same condition, if `i` is greater than 1. Again, the condition evaluates to `true`, so `'I am true'` is printed.

```js
// Set i to 2
let i = 2

i > 1 ? console.log('I am true') : console.log('I am false')

// Output:
// 'I am true'
```

- [MDN reference: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- [MDN reference: ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

## Conclusion

In this blog we learned that syntactic sugar is a term for shorter syntax that achieves functionality that already exists. This means syntactic sugar does not provide any new functionality, but it does make code a little sweeter and easier to work with. The `for...of` loop and destructuring are examples of syntactic sugar in JavaScript that help us write concise code.
