---
path: '/javascript-slice-splice'
date: '2020-06-18'
title: 'JavaScript: slice vs splice'
tags: ['javascript']
categories: 'code'
---

`slice` and `splice` are two handy JavaScript methods for working with arrays.
Because they sound so similar, I always get the two mixed up. So I made a [mnemonic](https://en.wikipedia.org/wiki/Mnemonic) to help me remember the differences.

This blog explores the differences between `slice` and `splice` and how I remember them.

## `slice` vs `splice` comparison

Here's a table with an overview of the differences between the `slice` and `splice` array methods:

| Method | Mutation        | Arguments                                    | Use                                     | Return output                           |
| :----- | :-------------- | :------------------------------------------- | :-------------------------------------- | :-------------------------------------- |
| Slice  | does not mutate | start, end                                   | make shallow copy of the original array | returns the copied array                |
| Splice | mutates         | start, delete count, n items to replace with | add or remove from the original array   | returns removed elements in a new array |

## `slice()`

The `slice` array method makes a shallow copy of the sliced array and returns the copied array. It does not mutate the original array.

This is what the syntax looks like:

```js
arr.slice(start, end)
// The returned copied array excludes the end index
```

Here's slice in action:

```js
const arr = ['alex', 'justin', 'max', 'harper', 'mason']

arr.slice(2) // copy everything after and including the 2nd index, 'max'
// returns ['max', 'harper', 'mason']

arr.slice(2, 4) // copy everything after the second index up to the 3rd index
// returns ['max', 'harper']

arr.slice(2, 5) // copy everything after the second index up to the 4th index
// returns [ 'max', 'harper', 'mason' ]

console.log(arr) // arr is not mutated
// ['alex', 'justin', 'max', 'harper', 'mason']
```

- [MDN reference: Array.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

`slice` is a string method too. Similar to the array method, the `slice` method for strings also slices a section of the string and returns it. It does not mutate the original string.

Here's `slice` in action for strings:

```js
const str = 'Everything is not what it seems'
str.slice(3) // copy everything after and including the 3rd index, 'r'
// returns 'rything is not what it seems'

str.slice(-5) // copy elements from the last index to the left 5 indices
// returns 'seems'

str.slice(-17, -6) // copy specified elements based on the indices counting from the end of the string
// returns 'not what it'

console.log(str) // str is not mutated
// 'Everything is not what it seems'
```

- [MDN reference: String.prototype.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## `splice()`

`splice` mutates the original array and returns the removed elements in a new array. It also optionally removes a specified number of elements or inserts elements with specified values.

This is what the syntax looks like:

```js
arr.splice(start, deleteCount [optional], newElem [optional], newElem [optional], ...)
```

Here's `splice` in action in a few different examples:

**Ex 1**: Remove all elements starting at the 1st index

```js
const arr = ['alex', 'justin', 'max', 'harper', 'mason']
arr.splice(1) // remove 'justin' and beyond. no elements are added
// returns ['justin', 'max', 'harper', 'mason']

console.log(arr) // arr is mutated
// ['alex']
```

**Ex 2**: Remove all elements starting at the 2nd index, and insert 2 elements

```js
const arr = ['alex', 'justin', 'max', 'harper', 'mason']
arr.splice(2, 2) // remove 'max' and 'harper'. no elements are added
// returns ['max', 'harper']

console.log(arr) // arr is mutated
// ['alex', 'justin', 'mason']
```

**Ex 3**: Insert 1 element at the 2nd index without removing any elements

```js
const arr = ['alex', 'justin', 'max', 'harper', 'mason']

arr.splice(2, 0, 'juliet') // insert 'juliet' at 2nd index. no elements are removed
// returns []

console.log(arr) // arr is mutated
// ['alex', 'justin', 'juliet', 'max', 'harper', 'mason']
```

**Ex 4**: Insert 2 elements at the 3rd index and delete 1 element

```js
const arr = ['alex', 'justin', 'max', 'harper', 'mason']

arr.splice(3, 1, 'juliet', 'zeke') // remove 'harper'. insert 'juliet' and 'zeke' at 3rd index
// returns ['harper']

console.log(arr) // arr is mutated
// ['alex', 'justin', 'max', 'juliet', 'zeke', 'mason']
```

- [MDN reference splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

## Remembering `slice` vs `splice`

I remember the difference between `slice` and `splice` using a mnemonic. `splice` has an extra letter, 'p', compared to `slice`. Because of the extra letter, I associate the **additional** letter to `splice`'s use of **adding** or removing from the original array. And because `splice` can add and remove stuff to the original array, that means that it also _mutates_ the original array.

## Conclusion

And there we have it! This blog goes over the differences between `slice` and `splice`. You now know that `slice` makes a shallow copy of the original array, while `splice` mutates the original array and optionally adds or removes elements. And you're equipped with a handy mnemonic, that `splice` compared to `slice` has an additional letter, 'p', which helps you remember that `splice` mutates and optionally adds or removes from the original array.
