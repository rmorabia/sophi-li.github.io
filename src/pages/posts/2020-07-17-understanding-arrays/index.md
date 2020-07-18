---
path: '/javascript-arrays'
date: '2020-07-17'
title: 'Understanding Arrays in JavaScript'
tags: ['javascript', 'fundamentals']
categories: 'code'
---

An array in JavaScript is an ordered collection of data.

Arrays are ordered by numbered indices starting at `0`. These indices are used to access elements in arrays. Arrays help condense and organize our code because they allow us to store multiple values in one variable. This means arrays contain values that we can iterate (loop) over.

Arrays are mutable, which means we can add, remove, and modify array values. Arrays can hold different types of data such as numbers, strings, objects, booleans, etc.

In this blog, we'll go over:

- How Arrays Help Consolidate Code
- Creating Arrays
- Indexing Arrays
- Accessing Items in Arrays
- Finding the Length of Arrays
- Adding Items to Arrays
- Removing Items in Arrays
- Modifying Items in Arrays
- Looping Through Arrays

## How Arrays Help Consolidate Code

Let's take a look at how arrays help us condense and organize code.

In the following example, we assign three different animals to three different variables. If we want to store more animals, we'd have to declare and initialize each animal one by one. That would get tedious and difficult to keep track of pretty quickly.

```js
const animal1 = 'cat'
const animal2 = 'panda'
const animal3 = 'sloth'
```

We can instead consolidate all of our animals into an array called `animals`. In the example below, we have one variable, `animals`, with three elements, `cat`, `panda`, and `sloth`.

```js
let animals = ['cat', 'panda', 'sloth']
```

## Creating Arrays

There are two ways to create an array:

1. Bracket notation using `[]`
2. Array constructor using the `new` keyword

Both bracket notation and the constructor method create an array.

Let's take a look at both methods.

First, let's use brackets `[]` to create the `animals` variable, an array containing the elements, `cat`, `panda`, and `sloth`. We can print `animals` in the console to show the array of animals, `["cat", "panda", "sloth"]`.

```js
let animals = ['cat', 'panda', 'sloth']

console.log(animals)
// ["cat", "panda", "sloth"]
```

Next, let's use the `new` keyword to create the `animals` variable, an array containing the elements, `cat`, `panda`, and `sloth`. The result of using the `new` keyword is the same as using brackets `[]`.

```js
let animals = new Array('cat', 'panda', 'sloth')

console.log(animals)
// ['cat', 'panda', 'sloth']
```

Bracket `[]` notation is the prefered and easier way to create an array because the constructor method can lead to unintended outcomes. For example, when working with numbers.

If we want to put the integer `3` in an array using the constructor method, it'll give us three `undefined` elements instead of `[3]`.

```js
let numberOfAnimals = new Array(3)

console.log(numberOfAnimals)
// [undefined, undefined, undefined]
```

If we want to put the integer `3` in an array using bracket syntax, we get what we expected, `[3]`.

```js
let numberOfAnimals = [3]

console.log(numberOfAnimals)
// [3]
```

Arrays can also hold more than just strings. Arrays can hold different types of data such as numbers, strings, object, etc.

```js
let pets = ['cat', 2, 'panda', 1, 'sloth', 8, { cute: true }]
```

## Indexing Arrays

Elements in arrays are ordered sequentially by indexes. Each element in an array has an index. Indexes are integer values starting from `0`.

Let's revisit our `animals` array again.

```js
let animals = ['cat', 'panda', 'sloth']
```

Here's what our `animals` array looks like with their respective indexes:

| cat | panda | sloth |
| :-: | :---: | :---: |
|  0  |   1   |   2   |

- `cat` is the 1st **element** in the array, and `cat`'s **index** is 0.
- `panda` is the 2nd **element** in the array, and `panda`'s **index** is 1.
- `sloth` is the 3rd **element** in the array, and `sloth`'s **index** is 2.

To find the index of a certain element, we use the [`indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method. `indexOf` returns the first index where the element is found, or returns `-1` if the element is not found.

Here, we use `indexOf` to find the index of `'panda'` in our `animals` array.

```js
// Print the index of 'panda', 1
console.log(animals.indexOf('panda'))
// 1

// Print -1 because 'dragon' is not in the `animals` array
console.log(animals.indexOf('dragon'))
// -1
```

## Accessing Items in Arrays

Arrays are ordered elements with indexes.

To access an element, we put the index number inside brackets `[]` after the variable name. The syntax looks like this, `variableName[indexNumber]`.

For example, to access the first element, we use the syntax, `variableName[0]`.

Let's take a look at this in action. To access the first element, `cat`, in `animals`, we use the syntax, `animals[0]`.

```js
let animals = ['cat', 'panda', 'sloth']

console.log(animals[0])
// 'cat'

console.log(animals[1])
// 'panda'

console.log(animals[2])
// 'sloth'
```

If we try to access an index that doesn't exist, we get `undefined`. In this example, index `4` doesn't exist, so `undefined` is printed when we try to access `animals[4]`.

```js
let animals = ['cat', 'panda', 'sloth']
console.log(animals[4])
// undefined
```

Arrays can also be nested, meaning an array can be stored within an array. Just like before, we access elements in nested arrays with the syntax `variableName[indexNumber]`, but with an additional `[indexNumber]` to access the index within the initial array. So the syntax for accessing an element in an array within an array looks like this, `variableName[indexNumber][indexNumber]`.

Let's take a look at this nested array, `nestedAnimals`.

```js
let nestedAnimals = [
  ['blue whale', 'blue jay'],
  ['red panda', 'red ants', 'red fox'],
]
```

Before we write the code to access and print out some animals, let's break down what the indexes are.

Here's the first level elements with their respective indexes.

| `["blue whale", "blue jay"]` | `["red panda", "red ants", "red fox"]` |
| :--------------------------: | :------------------------------------: |
|              0               |                   1                    |

We can go a level further and break each index down so each element in the array has its own index.

| `"blue whale"` | `"blue jay"` |
| :------------: | :----------: |
|       0        |      1       |

| `"red panda"` | `"red ants"` | `"red fox"` |
| :-----------: | :----------: | :---------: |
|       0       |      1       |      2      |

Now let's take a look at the code and print out `'blue whale'`. `'blue whale'` is in the array of index `0` of `nestedAnimals`. Index `0` contains the array `["blue whale", "blue jay"],`. `'blue whale'` is index `0` of index `0`. So to access `'blue whale'`, we use the syntax, `nestedAnimals[0][0]`.

The same applies for `'red ants'`. `'red ants'` is in index `1` of index `1`'s array. So `nestedAnimals[1][1]` accesses `'red ants'`.

```js
// Print the 0th index of the 0th index
console.log(nestedAnimals[0][0])
// 'blue whale'

// Print the 1st index of the 1st index
console.log(nestedAnimals[1][1])
// "red ants"
```

## Finding the Length of Arrays

To find the length of an array, we use the [`length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) property.

Here, we use the `length` property on `animals` to get a length of `3`.

```js
let animals = ['cat', 'panda', 'sloth']

// Print the length of animals
console.log(animals.length)
// 3
```

## Adding Items to Arrays

To add an item to the **end** of an array, we use the [`push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method.

```js
// Append 'sea otter' to the end of the array
let animals = ['cat', 'panda', 'sloth']
animals.push('sea otter')

console.log(animals)
// ['cat', 'panda', 'sloth', 'sea otter'];
```

To add an item to the **beginning** of the array, we use the [`unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) method.

```js
// Append 'koala' to the beginning of the array
let animals = ['cat', 'panda', 'sloth']
animals.unshift('koala')

console.log(animals)
// ['koala', 'cat', 'panda', 'sloth',];
```

We can also specify which index we want a new element to be added to by using the assignment `=` operator. If the index of the new element is greater than the length of the array, `undefined` will be added until the specified index is reached.

```js
// Append  'zebra' to index 6 of the array
let animals = ['cat', 'panda', 'sloth']
animals[6] = 'zebra'

// undefined is appended until we hit index 6, where we append 'zebra'
console.log(animals)
// ['cat', 'panda', 'sloth', undefined, undefined, undefined, 'zebra'];
```

If we set the length to a size larger than the array, it'll append values of `undefined` to the end of the array until it hits the new length.

```js
// Append undefined two times to the end of the array until the length is 5
let animals = ['cat', 'panda', 'sloth']
animals.length = 5

console.log(animals)
// ['cat', 'panda', 'sloth', undefined, undefined]
```

## Removing Items in Arrays

To remove the **last** element in an array, we use the [`pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) method.

```js
// Remove the last element, 'sloth'
let animals = ['cat', 'panda', 'sloth']
animals.pop()

console.log(animals)
// ['cat', 'panda'];
```

To remove the **first** element of an array, we use the [`shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) method.

```js
// Remove the first element, 'cat'
let animals = ['cat', 'panda', 'sloth']
animals.shift()

console.log(animals)
// ['panda', 'sloth']
```

To remove an element by index position, we use the [`splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method. The first parameter specifies the index where we should start removing, and the second paramater specifies how many elements we should delete.

In this example, `splice` mutates the `animal` array. It removes one element at index `1`. so `'panda'` is removed. The array now only contains `'cat'` and `'sloth'`.

```js
// Remove 1 element at index 1, 'panda'
let animals = ['cat', 'panda', 'sloth']

animals.splice(1, 1)

console.log(animals)
// ['cat', 'sloth']
```

To remove an element by index position without mutating the original array, we can use [`slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice). The first parameter specifies the start and the second parameter specifies the end. The end is exclusive because the end index is not included.

```js
// Remove 1 element at index 1, and end at index 2 (index 2 is not included)
let animals = ['cat', 'panda', 'sloth']
let slicedAnimal = animals.slice(1, 2)
console.log(slicedAnimal)
// 'panda'

// Animals is not mutated
console.log(animals)
// ["cat", "panda", "sloth"]
```

Another way to remove elements is to set the length of the array to a lesser value.

```js
// Set length to 2, which removes 'sloth'
let animals = ['cat', 'panda', 'sloth']
animals.length = 2

console.log(animals)
// ['cat', 'panda']
```

## Modifying Items in Arrays

To modify an element's value in an array, we specify the index inside brackets `[]` and the assignment `=` operator to assign an updated value. The syntax looks like, `variableName[indexToModify] = 'newValue'`.

```js
// Modify the value of index 0 ('cat') to 'dog'
let animals = ['cat', 'panda', 'sloth']
animals[0] = 'dog'

console.log(animals)
// ['dog', 'panda', 'sloth']
```

We can also modify a value using the `splice` method. The first parameter specifies which index we should start modifying, the second parameter specifies how many elements we should remove, and the third and further parameters specifies what element(s) we should add.

```js
// Replace 1 element at index 2 ('sloth') with 'wolf'
let animals = ['cat', 'panda', 'sloth']
animals.splice(2, 1, 'wolf')

console.log(animals)
// ['cat', 'panda', 'wolf']
```

```js
// Replace 1 element at index 1 ('panda') with 'wolf' and 'lion'
let animals = ['cat', 'panda', 'sloth']
animals.splice(1, 1, 'wolf', 'lion')

console.log(animals)
// ['cat', 'wolf', 'lion', 'sloth']
```

## Looping Through Arrays

We can loop through an array using a [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for). To loop through an entire array, we can use the `length` method to easily determine how many times we should loop.

In this example, we loop through the array and print each element to the console.

```js
let animals = ['cat', 'panda', 'sloth']

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i])
}

// output:
// cat
// panda
// sloth
```

The [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement also loops over arrays.

Similar to above, in this example, we also loop through the array and print each element to the console. The syntax using a `for...of` loop is shorter and cleaner.

```js
let animals = ['cat', 'panda', 'sloth']

for (let i of animals) {
  console.log(i)
}

// output:
// cat
// panda
// sloth
```

## Conclusion

In this blog, we learned:

- How arrays help condense and organize code.
- How to create arrays using bracket `[]` notation.
- How arrays are indexed starting at `0`.
- How to access items using `[indexNumber]`.
- How to find the length of an array using the `length` method.
- How to add items using `push`, `unshift`, the `=` operator, and the `length` method.
- How to remove items using `pop`, `shift`, `splice`, and `slice`.
- How to modify items using the `=` operator and `splice`.
- How to loop through arrays using `for` and `for...of` loops.

Arrays are a fundamental part of programming in JavaScript. You now know how to work with them!
