---
path: '/javascript-objects'
date: '2020-10-13'
title: 'Understanding Objects in JavaScript'
tags: ['javascript', 'fundamentals']
category: 'code'
---

An **object** is one of JavaScript's data types. Objects consist of a collection of _key:value_ pairs. The _key_ in _key_:value is also known as _name_. So _key:value_ and _name:value_ both refer to the same thing. For consistency, we'll use key:value in this blog.

The key:value pairs hold **properties** and **methods**. Properties hold primitive data types, such as strings, numbers, other objects, and Booleans. Methods are actions that can be performed on the object. Object methods are object properties that contain a function.

Objects are a foundational part of programming in JavaScript. They allow us to group similar properties together into one unit. For example, a todo list application may store its data consisting of tasks and notes in objects.

In this blog, we'll go over:

- Creating an object
- Understanding properties and methods
- Accessing object properties
- Adding object properties
- Modifying object properties
- Removing object properties and methods
- Looping through objects

## Creating an Object

There are two ways to create an object:

1. **Object literals** using curly braces `{}`
2. **Object constructors** using the `new` keyword

Using _object literals_, the syntax looks like this when we create an empty object:

```js
const objectLiteral = {}
```

Using _object constructors_, the syntax looks like this when we create an empty object:

```js
const objectConstructor = new Object()
```

Let's take a look at creating an object with some more stuff inside the object.

Here, we create the `city` object using the _object literal_ approach:

```js
// Create city object using an object literal
let city = {
  name: 'San Francisco',
  landmarks: ['Golden Gate Bridge', 'Coit Tower', 'Lombard Street'],
  fog: 'Karl',
  greet: function() {
    console.log(`Welcome to ${this.name}`)
  },
}

console.log(city)
// {name: 'San Francisco', landmarks: Array(3), fog: 'Karl', greet: ƒ}
```

Here, we create the `city` object using the _object constructor_ approach:

```js
// Create object constructor function, which will serve as our blueprint. Yes, City is spelled with a capital C.
function City(name, landmarks, fog, greet) {
  this.name = name
  this.landmarks = landmarks
  this.fog = fog
  this.greet = greet
}

// Create object, city, with properties and methods from the City blueprint.
let city = new City(
  'San Francisco',
  ['Golden Gate Bridge', 'Coit Tower', 'Lombard Street'],
  'Karl',
  function() {
    console.log(`Welcome to ${this.name}`)
  }
)

console.log(city)
// City {name: "San Francisco", landmarks: Array(3), fog: "Karl", greet: ƒ}
```

In both examples above, we created an object, `city`.

`city` has three properties: `name`, `landmarks`, `fog`.

`city` has one method: `greet`, which is a function. In the `greet` function, `this` refers to the current object, `city`. So `${this.name}` refers to `'San Francisco'`. The backticks, dollar sign, and curly braces `${}` are [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) in JavaScript.

Using object literals, `{}`, is the more common and preferred method of creating an object because it's quicker to write due to the shorter syntax.

## Properties and Methods

Object **properties** are the characteristics of an object. Properties can contain any data type.

A **method** is an object property that has a function as its value. A method is a task that an object can perform.

Let's revisit our earlier example object, `city`:

- `name`, `landmarks`, and `fog` from the `city` are **properties** of the object, `city`.
- `greet` is a **method** of the object, `city`.

```js
// Create city object
let city = {
  // Object properties:
  name: 'San Francisco',
  landmarks: ['Golden Gate Bridge', 'Coit Tower', 'Lombard Street'],
  fog: 'Karl',
  // Object method:
  greet: function() {
    console.log(`Welcome to ${this.name}`)
  },
}
```

## Accessing Object Properties

There are two ways to access object properties:

1. Dot notation: `objectName.property`
2. Bracket notation: `objectName[property]`

Again, let's revisit our object, `city`.

```js
let city = {
  name: 'San Francisco',
  landmarks: ['Golden Gate Bridge', 'Coit Tower', 'Lombard Street'],
  fog: 'Karl',
  greet: function() {
    console.log(`Welcome to ${this.name}`)
  },
}
```

Below, we use dot notation to access the `name` property from the object, `city`. We also use bracket notation to access the `landmarks` property.

```js
// Use dotation to access name property
city.name
// "San Francisco"

// Use bracket notation to access landmarks property
city['landmarks']
// ["Golden Gate Bridge", "Coit Tower", "Lombard Street"],
```

We use the same syntax to access an object's method. Here we call the `greet` method from `city` using dot notation and bracket notation. Dot notation is preferred.

```js
// Call the greet function using dot notation
city.greet()
// Welcome to San Francisco

// Call the greet function using bracket notation
city['greet']()
// Welcome to San Francisco
```

## Adding Object Properties

JavaScript objects are mutable (can be changed). We can assign new values with the assignment operator, `=`.

In this example, we add a new property, `nickname` to `city`. When we print `city`, we see the new property added.

```js
// Add nickname property using the assignment operator, =
city.nickname = 'The City'

console.log(city)
// {name: "San Francisco", landmarks: Array(3), fog: "Karl", nickname: "The City", greet: ƒ}
```

## Modifying Object Properties

To modify an object property, we use dot or bracket notation along with the `=` operator to assign a new value.

In this example, we first use dot notation to change the value of `nickname` to `'San Fran'`. When we print out `city`, we confirm that the nickname property has indeed been updated. But, no one actually calls San Francisco, San Fran. So let's use bracket notation to update `nickname` to `'SF'`.

```js
// Update nickname to San Fran
city.nickname = 'San Fran'

console.log(city)
// {name: "San Francisco", landmarks: Array(3), fog: "Karl", nickname: "San Fran", greet: ƒ, …}

// Update nickname to SF
city['nickname'] = 'SF'

console.log(city)
// {name: "San Francisco", landmarks: Array(3), fog: "Karl", nickname: "SF", greet: ƒ, …}
```

## Removing Object Properties

To remove an object property, we use the `delete` keyword.

`fog` isn't actually a good property to have on the `city` object because not all cities have fog. This means having the `fog` property is not good for code reusability. Let's make the `city` object more general by removing the `fog` property with the `delete` keyword. `true` will be printed when `fog` is deleted. Then let's print `city` to see that `fog` is no longer a property of `city`.

```js
// Delete the fog property
delete city.fog
// Output:
// true

console.log(city)
// {name: "San Francisco", landmarks: Array(3), nickname: "The City", greet: ƒ}
```

## Looping Through Objects

The `for...in` loop is used to iterate over properties of an object.

We can use the `for...in` loop to traverse over the object and print both the **key** and **value**. In this example, we loop through `city` and print out its key and value. `key` refers to the key, and `city[key]` refers to the value.

```js
// Loop over city and print the keys and values
for (let key in city) {
  console.log(`${key}: ${city[key]}`)
}

// Output:
// name: San Francisco
// landmarks: Golden Gate Bridge,Coit Tower,Lombard Street
// nickname: SF
// greet: function () {
//     console.log(`Welcome to ${this.name}`);
//   }
```

## Conclusion

Objects are a fundamental part of organizing code and functionality in JavaScript.

Here's a recap of what we learned in this blog,

- Create objects with bracket notation {} or object constructors using the `new` keyword
- Object properties are characteristics of an object, while methods are functions that an object can execute
- Access properties and methods with dot notation `.` or bracket notation `[]`
- Add properties with the assignment operator `=`
- Modify properties and methods by accessing them with either dot or bracket notation and then using the assignment operator to assign a new value
- Delete properties and methods using the `delete` keyword
- Loop through objects with the `for...in` loop

For further reading, check out these articles:

- [MDN reference: objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [MDN reference: object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- [MDN reference: working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
