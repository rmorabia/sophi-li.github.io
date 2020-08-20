---
path: '/javascript-looping'
date: '2020-06-27'
title: 'Looping in JavaScript'
tags: ['javascript', 'fundamentals']
category: 'code'
---

In programming, loops are used to automate repetitive tasks.

In this blog, we'll go over the following ways to loop in JavaScript:

- for
- forEach
- for...of
- for...in
- while

## `for` loop

The `for` loop takes in three optional expressions, the **initialization**, **condition**, and **final expression**.

The **initialization** is an expression or variable declaration, typically used to to initialize a counter variable before the loop begins. It often looks like a variation of this: `let i = 0`.

The **condition** is an expression that is evaluated before the loop begins. When the condition returns `true`, the statement inside the for loop executes. When the condition returns false, the statement inside the loop does not execute. If the condition is left out, then the condition expression automatically evaluates to `true`. The condition usually looks like: `i < n`, `i > n`, `i === n`, or any expression that evaluates to`true` or `false`.

The **final expression** is evaluated at the end of each loop. It's usually used to increment the counter variable. It often looks like this: `i++`.

The syntax looks like this:

```js
for (initialization; condition; final expression) {
    // statement, code in here executes when condition returns true
}
```

Let's take a look at the following example to understand the syntax. We initialize the `for` loop with `i = 0`, meaning we start the loop at 0. We set the condition to `i < 3`, so as long as `i` is less than 3, we'll run the `console.log(i)` statement. For the final expression, we use `i++` to increment the counter variable `i`.

Let's break it down step-by-step:

- `i` starts out at 0. 0 is less than 3, so our condition returns `true`. We print 0 because `i` has the value to 0. We've reached the end of our loop, so we add 1 to `i`, The value of `i` is now 1.
- `i` is now equal to 1. 1 is less than 3, so our condition returns `true`. We print 1 because `i` has the value of 1. We've reached the end of our loop, so we add 1 to `i`. The value of `i` is now 2.
- `i` is now equal to 2. 2 is less than 3, so our condition returns `true`. We print 2 because `i` has the value of 2. We've reached the end of our loop, so we add 1 to `i`. The value of `i` is now 3.
- `i` is now equal to 3. 3 is not less than 3, so our condition returns `false`. We do not print `i`. The `for` loop ends.

```js
for (let i = 0; i < 3; i++) {
  console.log(i)
}

// output:
// 0
// 1
// 2
```

In the following example, we print out all the elements of the `tools` array using a `for` loop. We initialize the `for` loop with `let i = 0` (the counter variable), so the loop starts at 0. We set the condition to the length of `tools`, which is 3. As long as `i` is less than 3, the loop will run. And the final expression is `i++`, which means `i` increments by 1 (adds one to itself) after each loop.

```js
const tools = ['axe', 'shovel', 'slingshot']

for (let i = 0; i < tools.length; i++) {
  console.log(tools[i])
}

// output:
// axe
// shovel
// slingshot
```

## `forEach` loop

The `forEach` method executes a function for each element in an array.

The syntax looks like this:

```js
arr.forEach(callback)
```

In this example, we use `forEach` to print out each item in the `tools` array.

```js
const tools = ['axe', 'shovel', 'slingshot']

tools.forEach(tool => console.log(tool))

// output:
// axe
// shovel
// slingshot
```

We can achieve the same output as above using a `for` loop, like in the example below. Both methods return the same values, but the `forEach` syntax is more concise.

```js
const tools = ['axe', 'shovel', 'slingshot']

for (let i = 0; i < tools.length; i++) {
  console.log(i)
}

// output:
// axe
// shovel
// slingshot
```

With `forEach`, we can't break the loop, we have to execute a function for all the elements in the iterable. But with a `for` loop, we can break a loop with the condition expression. In this example, we print only the first and second elements in `tools`. We set the condition to `i < tools.length - 1`, so the condition returns `true` when `i` is less than 2.

```js
const tools = ['axe', 'shovel', 'slingshot']

for (let i = 0; i < tools.length - 1; i++) {
  console.log(i)
}

// output:
// axe
// shovel
```

## `for...of` loop

The `for...of` statement loops over [iterables](https://javascript.info/iterable) like arrays, strings, and sets. We can't use a `for...of` loop for objects because objects aren't iterable.

The `for...of` loop was introduced in ES6 as a new feature in [Modern JavaScript](https://sophiali.dev/modern-javascript-es6).

The syntax looks like this:

```js
for (variable of iterable) {
  // statement, code that executes for each variable
}
```

In this example, we use the `for...of` statement to loop over an array and print the elements of `villagers`.

```js
const villagers = ['fauna', 'mitzi', 'becky']

for (villager of villagers) {
  console.log(villager)
}

// output:
// fauna
// mitzi
// becky
```

In this example, we use the `for...of` statement to loop over a string and print the characters of `mayor`.

```js
const mayor = 'Isabelle'

for (char of mayor) {
  console.log(char)
}

// output:
// I
// s
// a
// b
// e
// l
// l
// e
```

In this example, we use the `for...of` statement to loop over a set and print the values of `pockets`.

```js
const pockets = new Set(['clownfish', 'coral', 'shovel', 'clownfish'])

console.log(pockets)
// {"clownfish", "coral", "shovel"}

for (item of pockets) {
  console.log(item)
}

// output:
// clownfish
// coral
// shovel
```

## `for...in` loop

The `for...in` statement loops over properties of an object. The `for...in` loop was introduced in ES8 as a new feature in [Modern JavaScript](https://sophiali.dev/modern-javascript-es6).

The syntax looks like this:

```js
for (variable in object) {
  // statement, code that executes for each variable
}
```

In this example, we use the `for...in` loop to print out the _key:value_ pairs of the object, `town`. `fish` is a _key_, and `clownfish` is a _value_. We access the _key_ with `item`, and access the _value_ by indexing into `town` using the syntax, `town[item]`.

```js
const town = { fish: 'clownfish', flower: 'windflower', fruit: 'apple' }

for (let item in town) {
  console.log(`${item}: ${town[item]}`)
}

// output
// fish: clownfish
// flower: windflower
// fruit: apple
```

## `while` loop

`while` loops run as long as the **condition** returns `true`. Unlike the `for` loop, the `while` loop is conditionally based. This means we don't need to know beforehand how many times the loop will run.

The syntax looks like this:

```js
while (condition) {
  // code here executes if condition is true
}
```

Let's take a look at the example below. We declare and initialize `day` with the value of 1. The **condition** is set to `day < 4`, so the loop will end when `day` has the value of 4. When the **condition** returns `true`, we print the string `"It's day ${day}"`. `${day}` is [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) syntax for the variable `day`. At the end of each loop, we increment `day` by 1. This is to make sure our **condition** will eventually return `false` and not run an infinite loop.

```js
let day = 1

while (day < 4) {
  console.log(`It's day ${day}.`)
  day++
}

// output:
// It's day 1.
// It's day 2.
// It's day 3.
```

In the following example, we use a `while` loop to iterate over an array of objects and print out values of the object. We declare and initialize `i` with the value of 0. The **condition** is set to `i < flowers.length`, so we loop through the length of the array, which is 3. When the **condition** returns `true`, we print out values of the objects in the array. We use the syntax `flowers[i]` to index into the array, and dot notation, `flowers[i].quantity` to access the value of the specified key. And before the loop ends, we increment `i` with `i++`.

```js
const flowers = [
  { flower: 'rose', quantity: 3, color: 'gold' },
  { flower: 'windflower', quantity: 5, color: 'purple' },
  { flower: 'cosmo', quantity: 2, color: 'black' },
]

let i = 0
while (i < flowers.length) {
  console.log(
    `I planted ${flowers[i].quantity} ${flowers[i].color} ${flowers[i].flower}s.`
  )
  i++
}

// output
// I planted 3 gold roses.
// I planted 5 purple windflowers.
// I planted 2 black cosmos.
```

## Conclusion

Loopity doop doop and there we have it! You now know how to automate repetitive tasks in JavaScript using `for`, `forEach`, `for...of`, `for...in`, and `while` loops.

For more details, check out the MDN docs:

- [MDN reference: for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [MDN reference: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [MDN reference: for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- [MDN reference: for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [MDN reference: while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [MDN reference: loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
