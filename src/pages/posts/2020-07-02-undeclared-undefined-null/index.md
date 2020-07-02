---
path: '/javascript-undeclared-undefined-null'
date: '2020-07-02'
title: 'Understanding undeclared, undefined, and null in JavaScript'
tags: ['javascript', 'fundamentals']
categories: 'code'
---

When I learned JavaScript, I often got undeclared, `undefined`, and `null` mixed up. At some point, I thought they meant the same thing. Surprise, they don't actually mean the same thing!

In this blog, we'll walk through what undeclared, `undefined`, and `null` mean.

## undeclared

Before we dive into what undeclared means, let's first go over what it means to declare and initialize a variable. When we declare and initialize a variable, we are creating a variable and storing something inside the variable. Variables are declared using the keywords `let` and `const`, and initialized with the `=` operator. The syntax looks like this, `let snack = 'popcorn'`. Note that we can declare a variable without initializing it. The syntax would look like this, `let snack`.

A variable is undeclared when it has not been declared or initialized.
It means the variable does not exist because it has not been created.

In the following example, we print `snack`. We get a reference error because `snack` is undeclared. `snack` has not been created and does not exist.

```js
console.log(snack)
// ReferenceError: snack is not defined
```

Let's say we expected `snack` to exist and want to fix the error. To fix it, we need to declare `snack` with the keyword `let`. In the example below, `snack` is now declared, but `undefined` is printed because we didn't assign `snack` a value.

```js
let snack
console.log(snack)
// undefined
```

## undefined

`undefined` is one of JavaScript's [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). A variable is `undefined` when the variable has been declared, but not assigned a value. It doesn't mean that the variable does not exist. It means that the variable exists because it has been created, but does not have a value.

In the following example, we declare `snack` and print `snack`. As expected, we get `undefined` because we did not give `snack` a value. So we assign `snack` to the value of "popcorn", using the `=` operator. Now, when we print `snack`, "popcorn" is returned.

```js
let snack
console.log(snack)
// undefined
snack = 'popcorn'
console.log(snack)
// popcorn
```

It's also important to note that `undefined` is treated as a [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) value. In this example, the [`if` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) prints, "undefined is falsy", because the condition evaluates to `false`.

```js
if (undefined) {
  console.log('inside the true block')
} else {
  console.log('undefined is falsy')
}
// undefined is falsy
```

## null

`null` is one of JavaScript's [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). The value `null` is used for purposefully setting something to empty, the absence of a value. When `null` is used, it means a variable is declared and has a value of `null`.

In the following example, `snack` is declared and initialized with a value of `null`. We're intentionally setting `snack`'s value to nothing. So when we print `snack`, `null` is returned.

```js
const snack = null
console.log(snack)
// null
```

It's also important to note that `null` is also treated as a falsy value. In this example, the [`if` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) prints, "null is falsy", because the condition evaluates to `false`.

```js
if (null) {
  console.log('inside the true block')
} else {
  console.log('null is falsy')
}
// null is falsy
```

## Conclusion

To recap what we've learned in this blog:

- a variable is undeclared when the variable has not been created
- a variable is `undefined` when the variable is declared, but does not have a value
- a variable is `null` when the variable is declared, and has a value of nothing, the absence of a value

For more details, check out the MDN docs:

- [MDN reference: undeclared](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Undeclared_var)
- [MDN reference: null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)
- [MDN reference: undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)
