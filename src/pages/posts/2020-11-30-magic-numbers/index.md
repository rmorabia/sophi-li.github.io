---
path: '/magic-number-programming'
date: '2020-11-30'
title: 'What is a Magic Number in Programming?'
tags: ['code']
category: 'code'
---

While onboarding and learning a new codebase, I was recently introduced to the concept of a magic number.

In programming, a magic number is a direct usage of a number in code with no explanation of what the number means. You should avoid using magic numbers in your code because the number by itself does not provide any meaning to what it is being used for. The solution to the ambiguity of magic numbers is to make them named constants.

These are the benefits of declaring magic numbers as named constants:

- It gives the number meaning so anyone can read it and know what the number is used for.
- You only have to update the constant once if the number is used throughout code in multiple places.
- It helps with readability and maintainability.

[ESLint](https://eslint.org/) has [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers) built in to help catch magic numbers.

Let's take a look at a magic number in action. In this example, we have `breadPuns`, an array of strings. We call Lodash's [`samplesize`](https://lodash.com/docs/4.17.15#sampleSize) and pass in `breadPuns` and `4`. Looking at this code, it's not obvious that the number `4` is the number of `breadPuns` we want to return.

```js
// import Lodash
import _ from 'lodash'

// Declare and initiate breadPuns, an array of strings
const breadPuns = [
  "I hope these bread puns aren't falling flat...",
  "I'm on a roll!",
  "You're adoughable!",
  "Wanna a slice of this? It's the yeast I could do.",
  "I'm all doughed out.",
  'Loaf it!',
  "You're just what I knead!",
  'That toast is toastally delicious!',
  'Stop loafing around!',
  'Are these bread buns rising to the occasion?',
  'You look loafly today!',
]

// Call sampleSize on breadPuns and 4 (magic number)
_.sampleSize(breadPuns, 4)
```

Since the magic number, `4`, doesn't provide us with any meaning, let's make it a named constant, `NUM_SUGGESTED_PUNS`. This let's anyone reading the code know that `4` represents the number of suggested puns we want to return.

```js
// Declare and initiate the magic number, 4, as a named constant
const NUM_SUGGESTED_PUNS = 4

_.sampleSize(breadPuns, NUM_SUGGESTED_PUNS)
```

Let's add another array, `cheesePuns`. This time, we call `sampleSize` twice, on `breadPuns` and `cheesePuns`. We also pass in `NUM_SUGGESTED_PUNS` both times. Now, `NUM_SUGGESTED_PUNS` is used twice in our code. Let's say we want to return 5 puns instead of 4 puns. We can easily update `NUM_SUGGESTED_PUNS` to equal 5. Since the number is in a named constant, we only need to make one change for code that is used twice.

Imagine if `NUM_SUGGESTED_PUNS` is used more than twice in our code. We'll still only need to update it once if we decide to change the value. Easy brie-zy.

```js
// Declare and initiate cheesePuns, an array of strings
const cheesePuns = [
  "This may sound cheesy, I think you're grate.",
  'Oh no! I cut myself, it was sharp cheddar.',
  "I hope you're having a gouda day.",
  "I'm mature for my age.",
  'Whisper words of wisdom, let it brie.',
  'You make me melt.',
  'I would be so provolone without you.',
  'To brie, or not to brie.',
  "Hey, you're looking sharp.",
]

// Update named constant to 5
const NUM_SUGGESTED_PUNS = 5

_.sampleSize(breadPuns, NUM_SUGGESTED_PUNS)
_.sampleSize(cheesePuns, NUM_SUGGESTED_PUNS)
```

## Conclusion

You now know that you should use a named constant when you have numbers without meaning floating around in your codebase. It'll help with readability and maintainability!

Resources:

- [ESLint no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)
- [Lodash](https://lodash.com/)
- [Lodash `samplesize` documentation](https://lodash.com/docs/4.17.15#sampleSize)
- [Lodash's sampleSize function](https://github.com/lodash/lodash/blob/master/sampleSize.js)
