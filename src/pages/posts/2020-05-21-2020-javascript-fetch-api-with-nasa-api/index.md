---
path: '/javascript-fetch-api-with-nasa-api'
date: '2020-05-21'
title: 'How to Use the JavaScript Fetch API to Get Data from NASA’s APOD API'
tags: ['javascript']
excerpt: ''
---

## Prerequisites

- Basic knowledge of HTML & CSS
- Basic knowledge of programming with JavaScript
- Basic knowledge of DOM manipulation

## What is the Fetch API

The Fetch API

## Register for a NASA API key

An API key is a unique identifier, also often called a token, used to authenticate a user or project. It's typically a string of letters and numbers. Register for a free [NASA API key](https://api.nasa.gov/). After you sign up, you'll get an email with your API key. Keep that handy because we'll need it later.

## Set up HTML file

Let's set up our HTML file, `index.html`.

This is what my boilerplate HTML looks like.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>NASA's Astronomy Picture of the Day</title>
  </head>
  <body></body>
</html>
```

Inside the `body` tags, we'll be using the `container`, `title`, `date`, `picture`, and `explanation` id attributes to display our data later.

The `container` and `picture-explanation-container` class attributes are used for styling.

```html
<body>
  <main class="container">
    <h1>NASA's Astronomy Picture of the Day</h1>
    <h2 id="title"></h2>
    <p id="date"></p>
    <section class="picture-explanation-container">
      <img src="" id="picture" alt="astronomy image by NASA" />
      <p id="explanation"></p>
    </section>
  </main>

  <script type="text/javascript" src="config.js"></script>
  <script src="app.js"></script>
</body>
```

Next, let's link our `style.css`, `app.js`, and `config.js` (we'll get to `config.js` in a bit) files.

```html
<html lang="en">
  <head>
    ...
    <link rel="stylesheet" href="style.css" />
    <title>NASA's Astronomy Picture of the Day</title>
  </head>
  <body>
    ...
    <script type="text/javascript" src="config.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

Here's the full code for our `index.html` file.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>NASA's Astronomy Picture of the Day</title>
  </head>
  <body>
    <main class="container">
      <h1>NASA's Astronomy Picture of the Day</h1>
      <h2 id="title"></h2>
      <p id="date"></p>
      <section class="picture-explanation-container">
        <img src="" id="picture" alt="astronomy image by NASA" />
        <p id="explanation"></p>
      </section>
    </main>

    <script type="text/javascript" src="config.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

## Set up CSS file

Because the focus of this project is not on CSS, check out my CSS file on GitHub, or add your own styles!

## Save your API securely

Save your API key in a `config.js` file to keep it secure if we push our code to GitHub or another version control platform.

Our `config.js` file will look like this.

```js:title=example-file.js
const config = {
  NASA_API_KEY: 'asdfghjkl;123456', // Save your NASA API key here
}
```

You'll be able to access your API key in your `app.js` file using `config.NASA_API_KEY`.

Add `config.js` to another file called `.gitignore`. Files listed in `.gitignore` will not be tracked by Git.

Our `.gitignore` file will simply look like this.

````

config.js

````

## Get Data from NASA’s APOD API

```js
const url = 'https://api.nasa.gov/planetary/apod?api_key='

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${config.NASA_API_KEY}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
  } catch (error) {
    console.log(error)
  }
}

fetchNASAData()
```

## Display the Data on our Browser

```js
const url = 'https://api.nasa.gov/planetary/apod?api_key='

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${config.NASA_API_KEY}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
    displayData(data)
  } catch (error) {
    console.log(error)
  }
}

const displayData = data => {
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}

fetchNASAData()
```

Fetch returns a promise
We handle API response using then() and catch()
