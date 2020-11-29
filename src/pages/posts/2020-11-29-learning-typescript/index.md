---
path: '/understanding-typescript'
date: '2020-11-28'
title: 'Understanding the Type System, Type Annotations, Type Inference, and Interfaces in TypeScript'
tags: ['typescript', 'fundamentals']
category: 'code'
---

I recently started a new job and picked up TypeScript while onboarding and learning the codebase. Prior to learning TypeScript, I already knew [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) fundamentals. Having a strong understanding of JavaScript was helpful in learning TypeScript and distinguishing what features are JavaScript vs TypeScript.

We can think of TypeScript as JavaScript with type annotations ("extra documentation") added in. Imagine you're coding in JavaScript with your friend, and your friend is there to help catch bugs that might come up because JavaScript doesn't have type enforcement. TypeScript is that friend.

In this blog, we'll go over:

- What is TypeScript?
- Type system
- Type annotation
- Type inference
- Interfaces

## What is TypeScript?

TypeScript is a strongly typed and class-based object-oriented programming language that builds on top of JavaScript. This means that TypeScript is a superset of JavaScript. So we can think of TypeScript as JavaScript with some additional helpful features. TypeScript provides optional static typing and interfaces. TypeScript's type system with type annotation and type inference helps us catch errors during development.

TypeScript does not provide any performance optimization. TypeScript code gets compiled into plain ol' JavaScript and then the browser executes that JavaScript code.

## Type System

A type system is a set of rules that assigns a type to every variable, expression, function, or module in the system. Since TypeScript is statically typed, the compiler checks all variables against their types during development.

TypeScript's type system allows us to specify types with type annotations. The type system also allows TypeScript to infer types with type inference so we don't have to write in the type ourselves. Additionally, setting types is optional, so we can choose when we want and don't want to enforce types.

Every value in TypeScript has a type. We use types everywhere!

These are the main types in TypeScript:

1. Basic built-in types: number, boolean, string, symbol, `void`, `null`, `undefined`
2. User-defined types: functions, classes, arrays, objects, interfaces, enums
3. `any`: a superset of all data types which means `any` can be used for any and all types in the type system

We care about types because:

1. Types are used by the TypeScript compiler to analyze code for errors **during** the development process. This helps us catch bugs while we write code!
2. Types allow other engineers to understand what values are floating around the code base. This also helps with readability and maintenance.

## Type annotation

Type annotation is the code we (the developers) add to tell TypeScript what type a variable refers to. Type annotations help the compiler check our data types during development. Type annotations are optional, so it is not mandatory to add type annotations for our code to run.

Type annotation applies to variables, functions, and objects. We'll go over each of these.

### Type annotation with variables

In the example below in JavaScript, we declare a variable, `turkeys`, with a value of `5`.

```js
const turkeys = 5
```

Here's the syntax in TypeScript for adding a type annotation. After the variable name, we add a colon and the type, `: type` to specify the type of the variable.

```ts
const variableName: type = value
```

Below, we have the same example as above, but written in TypeScript with a type annotation. The colon and number (`: number`) after the declaration is the type annotation. We're telling TypeScript that `turkeys` will only ever be a number.

```ts
// Declaration (const), variable name (turkeys), type annotation (: number), assignment (= 5)
const turkeys: number = 5
```

Here's how we can add a type annotation to an array in TypeScript. `: string[]` is the type annotation that tells TypeScript that the `sides` array will only ever contain strings.

```ts
let sides: string[] = ['mashed potatoes', 'brussel sprouts', 'green beans']
```

### Type annotation with functions

Here's a function, `logNumberOfSides`, written in JavaScript that prints the `numberOfSides`. Note that `console.log()` only prints something in the console, it doesn't actually return anything.

```js
const logNumberOfSides = numberOfSides => {
  console.log(numberOfSides)
}
```

Here's how we would write the above example in TypeScript with type annotations.

After the declaration, we tell TypeScript that `numberOfSides` is a `number` with the type annotation, `(numberOfSides: number)`. `=> void` is the type annotation that tells TypeScript we don't return anything from the function.

```ts
const logNumberOfSides: (numberOfSides: number) => void = numberOfSides => {
  console.log(numberOfSides)
}
```

In this example, we have a similar function. But instead of printing `numberOfSides` to the console, we return `numberOfSides`. Since we return a number, we annotate the return as a `number` with `=> number`.

```ts
const logNumberOfSides: (numberOfSides: number) => number = numberOfSides => {
  return numberOfSides
}
```

We always want to use type annotations for inputs and returns for a function because:

- There's no type inference for function arguments. Type inference is when TypeScript infers what type a variable is. We'll go over type inference shortly.
- If we don't write a type annotation, we can easily make a mistake inside the function and then forget to turn the value or even return the incorrect type because TypeScript won't give us an error during development.

### Type annotation with objects

In the example below, we annotate the object, `holidayDinner`, in-line. Right after the declaration, we add `{ mains: string[] sides: string[] desserts: string[] totalDishes: number }` to specify the type of the object.

```ts
const holidayDinner: {
  mains: string[]
  sides: string[]
  desserts: string[]
  totalDishes: number
} = {
  mains: ['turkey'],
  sides: ['rolls', 'mashed potatoes', 'mac n cheese'],
  desserts: ['pumpkin pie', 'apple pie'],
  totalDishes: 6,
}
```

If we declare a variable on one line and then initialize it later, we'll need to add the type annotation where we declare the variable because type inference won't kick in.

```ts
// Declare holidayDinner with type annotation
const holidayDinner: {
  mains: string[]
  sides: string[]
  desserts: string[]
  totalDishes: number
}

// Initialize holidayDinner
holidayDinner = {
  mains: ['turkey'],
  sides: ['rolls', 'mashed potatoes', 'mac n cheese'],
  desserts: ['pumpkin pie', 'apple pie'],
  totalDishes: 6,
}
```

Let's wrap this type annotation section up with when we should use type annotations:

1. When we declare a variable on one line and then initialize it later in another line.
2. When we want a variable to have a type that can't be inferred.
3. When a function returns a type of `any` and we need to clarify the value. We should always avoid `any` because it basically doesn't provide any value to us.

## Type Inference

Type inference is when TypeScript infers what type a variable is. Type inference kicks in when we do not add a type annotation.

In this example, we do not add a type annotation. Because type inference kicks in with TypeScript, `turkeys` will be inferred to be a `number`.

```js
const turkeys = 5
// Type inference will infer this to be const turkeys: number = 5
```

Type inference also works when variables are initialized with multiple types.

```js
const sides = ['mashed potatoes', true, 'brussel sprouts', 'green beans']
// Type inference will infer this to be const sides: (string|boolean)[] = ['mashed potatoes', true, 'brussel sprouts', 'green beans']
```

With the above example, we'll need to make sure that `sides` will only ever hold null or string values. If we add other types to the array, we'll get an error from TypeScript.

```ts
// Type inference will infer sides to have type (string|boolean)[]
const sides = ['mashed potatoes', true, 'brussel sprouts', 'green beans']

sides.push(2)
// We'll get an error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

So if we wanted to add another type in `sides` after it's been declared and initialized, we'd need to add a type annotation instead of letting type inference infer the type when `sides` is initialized. Here's how we can push the number `2` to the `sides` array.

```ts
const sides: (string | boolean | number)[] = [
  'mashed potatoes',
  true,
  'brussel sprouts',
  'green beans',
]

sides.push(2)

console.log(sides)
// ['mashed potatoes', true, 'brussel sprouts', 'green beans', 2]
```

Here's when we should use type inference:

- Always! Let's let TypeScript do the work for us when we can.
- Whenever there's a variable declaration and initialization on one line.

## Interfaces

An interface allows us to define the structure of an object in TypeScript. So when we create an interface, we are creating a new custom type that we define ourselves. The interface is used as a type just like a string, boolean, etc type.

TypeScript iterates through all properties of the interface to make sure that the object has all the same properties with the same type. We can also make a field optional by adding a `?` after the property name in the declaration.

In this example, we create an interface, `Dinner`, which is our new custom type that we define. For the type annotation, we'll pass in the `Dinner` interface with the syntax `: Dinner` after `holidayDinner`. This tells TypeScript that we expect `holidayDinner`'s shape to follow the shape of the `Dinner` interface.

```ts
// Create Dinner interface
interface Dinner {
  mains: string[]
  sides?: string[]
  desserts?: string[]
  totalDishes: number
}

// Declaration variableName: interfaceType = {....
const holidayDinner: Dinner = {
  mains: ['turkey'],
  sides: ['rolls', 'mashed potatoes', 'mac n cheese'],
  desserts: ['apple pie', 'pumpkin pie'],
  totalDishes: 6,
}
```

Continuing with the `Dinner` interface example, we've also marked the properties `sides` and `desserts` optional with the `?`. This means we can leave those properties out without getting an error. Additionally, if we provide an object that doesn't match the interface, TypeScript will give us an error.

Below, we create the object, `regularDinner`, with the `Dinner` interface as the type. TypeScript won't give us an error about not having the `sides` or `desserts` properties because we made those optional. However, TypeScript will give us an error for the `totalDishes` property because it is a string, which does not match the number type we defined in the `Dinner` interface. TypeScript will also give us an error about the `drink` property. This is because `regularDinner` must follow the shape of `Dinner`, and the `drink` property is not defined in `Dinner`.

```ts
// sides and desserts properties are optional so we can leave them out
const regularDinner: Dinner = {
  mains: ['ramen'],
  // We'll get an error for the totalDishes property: Type 'string' is not assignable to type 'number'.
  totalDishes: 'a lot',
  // We'll get an error for the drink property: Type '{ mains: string[]; totalDishes: number; drink: string; }' is not assignable to type 'Dinner'.
  // Object literal may only specify known properties, and 'drink' does not exist in type 'Dinner'.
  drink: 'boba',
}
```

## Conclusion

In this blog, we covered type systems, type annotations, type inference, and type interfaces. A type system is the set of rules that assigns a type to variables in a system. Adding a type annotation is when we tell TypeScript what type a variable has. Type inference is TypeScript inferring what type a variable has. Type interfaces are types that we define to describe an object's shape. You now know how to use some core parts of TypeScript and the benefits of these features!

Learn more about TypeScript:

- [Typescript: The Complete Developer's Guide [2020] by Stephen Grider](https://www.udemy.com/share/101WXkBUETd15WTH4=/)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Type inference](https://www.typescriptlang.org/docs/handbook/type-inference.html)
- [Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
