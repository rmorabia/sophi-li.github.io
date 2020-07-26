---
path: '/javascript-array-methods'
date: '2020-07-24'
title: 'How to Use JavaScript Array Methods'
tags: ['javascript', 'fundamentals']
categories: 'code'
---

An array in JavaScript is an ordered collection of data. Arrays are indexed starting at `0`, are mutable, can contain multiple values, can hold multiple data types, and can be iterated upon.

JavaScript has built-in methods that help make working with arrays easier. For example, methods that help with accessing items in arrays, mutating arrays, and iterating over arrays,

To get the most out of this blog, it'll be helpful to have a basic understanding of how arrays are indexed, how to modify array elements, and how to loop over arrays. You can review these concepts in, [Understanding Arrays in JavaScript](https://sophiali.dev/javascript-arrays).

In this blog, we'll go over how to use some commonly used array methods.

Note that the proper way to write out methods is with `Array.prototype.method()`. But to keep things simple, we'll write it out as just `method()`.

## join

The `join()` method joins all elements of an array into a string.

An argument can be given to specify what separator should be used between each array element.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Join the elements with ' - '
console.log(flowers.join(' - '))
// 'daisies - roses - cosmos - lilies'
```

If no arguments are specified, then the output will be comma separated without whitespaces in between.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Join the elements without a specified separator
console.log(flowers.join())
// 'daisies,roses,cosmos,lilies'
```

- [MDN reference: join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## concat

The `concat()` method merges two or more arrays, and returns a new array. It does not mutate the original arrays.

In the example below, we combine `flowers1` and `flowers2` into a new array, `allFlowers`.

```js
// Create two arrays of  flowers
let flowers1 = ['daisies', 'roses', 'cosmos', 'lilies']
let flowers2 = ['hyacinths', 'mums', 'pansies']

// Concatenate flowers1 and flowers2
let allFlowers = flowers1.concat(flowers2)

console.log(allFlowers)
// ['daisies', 'roses', 'cosmos', 'lilies', 'hyacinths', 'mums', 'pansies']
```

- [MDN reference: concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## includes

The `includes()` method returns `true` if an array contains a certain value, and `false` if the array does not contain the value.

In this example, we check if the `'roses'` and `'orchids'` are in the `flowers` array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies', 'roses']

// 'roses' is in the 'flowers' array, so it prints true
console.log(flowers.includes('roses'))
// true

// 'orchids' is not in the 'flowers' array, so it prints false
console.log(flowers.includes('orchids'))
// false
```

- [MDN reference: includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## slice

The `slice()` method removes part of the original array and returns the copied array. `slice()` takes in a start and an end argument. The returned copied array excludes the end index. It does not mutate the original array.

In this example, we remove `'roses'` and `'cosmos'` from `flowers`.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Remove 2 elements at index 1 (index 3 is not included in the removal)
let slicedFlowers = flowers.slice(1, 3)

console.log(slicedFlowers)
// ['roses', 'cosmos']

// flowers is not mutated
console.log(flowers)
// ['daisies', 'roses', 'cosmos', 'lilies']
```

- [MDN reference: slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## splice

The `splice()` method mutates contents of an array by removing existing elements. `splice()` also optionally adds new elements in place.

In this example, we remove all the elements from `flowers` starting at the 1st index.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Remove all elements starting at index 1, 'roses'
flowers.splice(1)

console.log(flowers)
// ['daisies']
```

`splice()` also optionally removes a specified number of elements and inserts elements with specified values.

In this example, we remove 1 element at index 2 and insert `'mums'` in replacement.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Remove 1 element at index 2 ('cosmos'), and insert 'mums' at index 2
flowers.splice(2, 1, 'mums')

console.log(flowers)
// ['daisies',  roses', 'mums', 'lilies']
```

- [MDN reference: splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## indexOf

The `indexOf()` method searches an array starting at the beginning of the array. It returns the first index where the specified element is found. It returns -1 if the element is not found.

In the example below, `'roses'` is listed twice in `animals`. We use `indexOf()` to find the first instance of `'roses'`.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies', 'roses']

// Print the index of 'cosmos', 2
console.log(flowers.indexOf('roses'))
// 2

// Print -1 because 'orchids' is not in the animals array
console.log(flowers.indexOf('orchids'))
// -1
```

- [MDN reference: indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## lastIndexOf

The `lastIndexOf()` method searches an array **backwards** and returns the first index where the element is found. It returns -1 if the element is not found.

In the example below, `roses` is listed twice in `animals`. We use `lastIndexOf` to return the first instance it is found based off of starting the search from the **end** of the array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies', 'roses']

// Start the search from the end of the array, print the index of the first instance of 'roses', 4
console.log(flowers.lastIndexOf('roses'))
// 4

// Print -1, 'orchids' is not in the array
console.log(flowers.lastIndexOf('orchids'))
// -1

// Start the search from index 3 ('lilies'), print the first instance of 'roses, 1
console.log(flowers.lastIndexOf('roses', 3))
// 1
```

- [MDN reference: lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

## toString

The `toString()` method returns an array as a string.

In the following example, we turn the `flowers` array into a string.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies', 'roses']

console.log(flowers.toString())
// 'daisies,roses,cosmos,lilies,roses'
```

`toString()` also works the same way with arrays containing different types of values.

```js
let flowerNumbers = ['daisies', 1, 'roses', 6, 'cosmos', 4]

console.log(flowerNumbers.toString())
// 'daisies,1,roses,6,cosmos,4'
```

- [MDN reference: toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/tostring)

## pop

The `pop()` method removes the last element of an array and returns that element. `pop()` mutates the original array.

In this example, we remove the last element, `'lilies'`.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Remove and print the last element, 'lilies'
console.log(flowers.pop())
// 'lilies'

// flowers is mutated
console.log(flowers)
// ['daisies', 'roses', 'cosmos']
```

- [MDN reference: pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

## push

The `push()` method adds element(s) to the end of an array and returns the new length of the array. `push()` mutates the original array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies', 'roses']

// Add 'hyacinths' to the end of the array and return the array's new length
console.log(flowers.push('hyacinths'))
// 6

// flowers is mutated to include 'hyacinths' at the end of the array
console.log(flowers)
// ['daisies', 'roses', 'cosmos', 'lilies', 'roses', 'hyacinths']
```

We can also push multiple elements to the end of an array with `push()`.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies', 'roses']

// Add 'hyacinths', 'mums', 'pansies' to the end of the array and return the array's new length
console.log(flowers.push('hyacinths', 'mums', 'pansies'))
// 8

// flowers is mutated to include the new values at the end of the array
console.log(flowers)
// ['daisies', 'roses', 'cosmos', 'lilies', 'roses', 'hyacinths', 'mums', 'pansies']
```

- [MDN reference: push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## unshift

The `unshift()` method adds element(s) to the beginning of the array and returns the length of the new array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Add 'hyacinths' to the beginning of the array and return the length of the new array
console.log(flowers.unshift('hyacinths'))
// 5

// flowers is mutated to include the new values at the beginning of the array
console.log(flowers)
// ['hyacinths', 'daisies', 'roses', 'cosmos', 'lilies']
```

We can also add multiple elements to the beginning of an array with `unshift()`.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

console.log(flowers.unshift('hyacinths', 'mums', 'pansies'))
// 7

console.log(flowers)
// ['hyacinths', 'mums', 'pansies', 'daisies', 'roses', 'cosmos', 'lilies']
```

- [MDN reference: unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

## reverse

The `reverse()` method does what its name suggests, it reverses an array, in place.

In this example, we reverse the `flowers` array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Reverse the flowers array
console.log(flowers.reverse())
// ['lilies', 'cosmos', 'roses', 'daisies']
```

- [MDN reference: reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

## sort

The `sort()` method sorts the elements of an array in place and returns the sorted array.

In this example, we sort the `flowers` array alphabetically.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Sort flowers alphabetically
flowers.sort()

console.log(flowers)
// ['cosmos', 'daisies', 'lilies', 'roses']
```

`sort()` is based on the first unicode character. It will sort uppercase elements before lowercase elements.

In this example, we spell `Rose` with an uppercase R in the `animals` array and use the `sort()` method.

```js
let flowers = ['daisies', 'Roses', 'cosmos', 'lilies']

// Sort flowers alphabetically
flowers.sort()

console.log(flowers)
// ['Roses', 'cosmos', 'daisies', 'lilies']
```

Additionally, the `sort()` method sorts numbers by its first character, not by the number's value. We can also pass in a function as a parameter to compare the elements.

This is how we can sort numbers by their value.

```js
let numbers = [8, 3, 7, 5]
numbers.sort((a, b) => a - b)

console.log(numbers)
// [3, 5, 7, 8]
```

- [MDN reference: sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

## forEach

The `forEach()` method calls a function for each element in an array. Note, we can't break a `forEach()` loop like we could in a `for` loop.

In this example, we loop through and print the elements of the `flowers` array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

flowers.forEach(element => console.log(element))

// 'daises'
// 'roses'
// 'cosmos'
// 'lilies'
```

- [MDN reference: forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

## map

The `map()` method performs a function on each element in an array and creates a new array from the results of the function. The `map()` method does not mutate the original array.

The `map()` method is similar to the `forEach()` method, but `map()` creates a new array while `forEach()` does not.

In this example, we loop through and print the elements of the `flowers` array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']

flowers.map(element => console.log(element))

// 'daises'
// 'roses'
// 'cosmos'
// 'lilies'
```

We can also use `map()` to mutate the values and save them in a new array.

```js
let flowers = ['daisies', 'roses', 'cosmos', 'lilies']
let beautifulFlowers = flowers.map(element => `${element} are beautiful`)

console.log(beautifulFlowers)
// ['daisies are beautiful', 'roses are beautiful', 'cosmos are beautiful', 'lilies are beautiful']
```

- [MDN reference: map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## reduce

The `reduce()` performs a function from left to right on each array element to return a single value. It takes in two parameters, the total and current value. `reduce()` does not mutate the original array.

In this example, we find the sum of all the numbers in the array.

```js
let numbers = [1, 2, 3, 4, 5]

// Sum all the numbers in the array
let sum = numbers.reduce((a, b) => a + b)

console.log(sum)
// 15
```

- [MDN reference: reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## filter

The `filter()` method creates a new array with all elements that pass the test specified in the function.

In this example, we filter for elements that have a length greater than 6.

```js
const flowers = ['daisies', 'roses', 'cosmos', 'lilies']

// Filter flowers array for elements with a length greater than 6
const result = flowers.filter(i => i.length > 6)

console.log(result)
// ['daisies']
```

- [MDN reference: filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Conclusion

In this blog, we went over how to access elements in arrays, modify arrays, and loop over arrays using array methods.

To recap, these are the methods we've gone over in this blog:

| Method      | Description                                                                                              |
| :---------- | :------------------------------------------------------------------------------------------------------- |
| join        | joins all elements of an array into a string.                                                            |
| concat      | merges two or more arrays, and returns a new array                                                       |
| slice       | removes part of the original array and returns the copied array                                          |
| splice      | mutates the contents of an array by removing or replacing existing elements                              |
| indexOf     | searches an array and returns the first index where the specified element is found                       |
| lastIndexOf | searches an array backwards and returns the first index where the element is found                       |
| toString    | returns an array as a string                                                                             |
| pop         | removes the last element of an array and returns that element                                            |
| push        | adds element(s) to the end of an array and returns the new length of the array                           |
| unshift     | adds element(s) to the beginning of the array and returns the length of the new array                    |
| reverse     | reverses an array in place                                                                               |
| sort        | sorts the elements of an array in place and returns the sorted array                                     |
| forEach     | calls a function for each element in an array                                                            |
| map         | performs a function on each element in an array and creates a new array from the results of the function |
| reduce      | performs a function from left to right on each array element to return a single value                    |
| filter      | creates a new array with all elements that pass the test specified in the function.                      |

You now know how to use a lot of JavaScript array methods to help make working with arrays easier.
