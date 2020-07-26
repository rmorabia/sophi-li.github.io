---
path: '/javascript-fetch-api-with-nasa-api'
date: '2020-05-21'
title: 'How to Use the JavaScript Fetch API to Get Data from the NASA APOD API'
tags: ['javascript', 'api']
category: 'code'
---

Working with APIs is a large part of software development. And part of that is fetching data from an API!

This tutorial walks us through how to use the Fetch API to get data from the NASA Astronomy Picture of the Day (APOD) API and display it on our browser. To keep things simple, we're using only vanilla JavaScript.

If you're interested in learning how to use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) or how to work with the [NASA APOD API](https://api.nasa.gov/), this tutorial might be what you're looking for.

I highly recommend coding along (not copying and pasting) while going through this tutorial to drill these concepts in and build your muscle memory.

- [View source code on GitHub](https://github.com/sophi-li/fetch)

## Prerequisites

- Basic knowledge of HTML & CSS
- Basic knowledge of programming with JavaScript
- Basic knowledge of DOM manipulation
- Basic understanding of what an API is

## What is the Fetch API

The [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is promise based API for fetching resources through asynchronous HTTP requests in the brwoser.

In plain English, this means I can use `fetch()` to get stuff (data) from an API and then do stuff to the data I pulled.

The `fetch()` method takes in one required argument, the path to the resource you want to fetch. It returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) as a response to our request. If the response is in [JavaScript Object Notation (JSON)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) format, we use the [`json()`](https://developer.mozilla.org/en-US/docs/Web/API/Body/json) method to parse the text and return a JavaScript object.

Here's what the syntax can look like:

```js
fetch(url) // replace url with your API endpoint
  .then(response => response.json()) // use .json() to parse your JSON data
  .then(data => console.log(data)) // do stuff with your parsed data
  .catch(error => console.log(error)) // handle any errors
```

## Register for a NASA API key

An API key is a unique identifier, also often called a token, used to authenticate a user or project. It's typically a string of letters and numbers. Register for a free [NASA API key](https://api.nasa.gov/). After you sign up, you'll get an email with your API key. Keep that handy because we'll need it later.

## Set up HTML file

Let's set up our HTML file, `index.html`.

This is what my boilerplate HTML looks like.

<!-- ```html:title=index.html -->

```nothing:title=index.html
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

Inside the `body` tag, we'll use the `container`, `title`, `date`, `picture`, and `explanation` ID attributes to display our data later.

The `container` and `picture-explanation-container` class attributes are used for styling.

```nothing:title=index.html
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

Next, let's link our `style.css`, `app.js`, and `config.js` files. We'll get to what the `config.js` is used for in a bit.

```nothing:title=index.html
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

```nothing:title=index.html
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

Here's what my CSS looks like. I won't dive into how all of this works since this tutorial focuses on fetching and displaying data. Feel free to style your project to your liking!

```css:title=style.css
* {
  font-family: Arial, Helvetica, sans-serif;
  color: #222;
}

.container {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2rem;
}

.picture-explanation-container {
  display: flex;
}

#picture {
  width: 50%;
  margin-right: 1rem;
}

#explanation {
  letter-spacing: 0px;
  line-height: 20px;
}
```

## Save your API securely

Save your API key in a `config.js` file to keep it secure if you push your code to GitHub or another version control platform. You'll be able to access your API key in your `app.js` file later using `config.NASA_API_KEY`.

```js:title=config.js
const config = {
  NASA_API_KEY: 'asdfghjkl;123456', // Save your NASA API key here
}
```

Next, create another text file called `.gitignore` and add `config.js` to its contents. Files listed in `.gitignore` will not be tracked by Git.

```js:title=.gitignore
config.js
```

## Get Data from NASA’s APOD API

Now let's fetch data from the NASA APOD API.

The endpoint for the APOD API is 'https://api.nasa.gov/planetary/apod?api_key=' followed by our API key. So let's declare `url` with the endpoint and `api_key` with `config.NASA_API_KEY`. A few steps above, we previously saved our API key in the `config.js` file and this is how we access it.

```js:title=app.js
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY
```

Next, let's write a function to fetch the data. Since the `fetch()` method is promise based, we can use [async/await](https://javascript.info/async-await) syntax.

We make a request using the `fetch()` method with `${url}${api_key}` for our path.

`${variable_name}` is ES6 template literal syntax which lets us concatenate `url` and `api_key`. `${url}${api_key}` is the same as using the syntax `url + api_key`.

The APOD API returns data in JSON format, so let's use the `.json()` method to parse the response into a JavaScript object.

We'll save the JavaScript object in the `data` variable.

Then let's console log `data` which returns the parsed data as a JavaScript object to make sure it's working as we expect.

And lastly, let's catch and console log any errors.

```js:title=app.js
const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    console.log('NASA APOD data', data)
  } catch (error) {
    console.log(error)
  }
}

fetchNASAData()
```

## Display the Data on our Browser

Now that we've successfully fetched our data, let's display the title, date, picture, and explanation on our browser with some DOM manipulation.

Let's write a function, `displayData` which updates the DOM with data from our response object.

`displayData` takes in an argument, `data`. This is where we'll pass in the response `data` variable which contains the JavaScript object.

Then we'll grab an element by its ID with the `getElementById()` method and update the node with it's respective data value using the `textContent()` method.

For example, the following line updates the `title` element with our response object's title.

```js
document.getElementById('title').textContent = data.title
```

Our `displayData` function updates the title, date, picture, and explanation elements with the respective values from the response object.

```js:title=app.js
const displayData = data => {
  document.getElementById('title').textContent = data.title
  document.getElementById('date').textContent = data.date
  document.getElementById('picture').src = data.hdurl
  document.getElementById('explanation').textContent = data.explanation
}
```

Now that we have our `displayData` function to update the DOM, let's make sure we call that function after we parse the JSON response. We'll pass in `data` to `displayData()`.

```js:title=app.js
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
  try {
    const response = await fetch(`${url}${api_key}`)
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

## Conclusion

And there we have it! In this tutorial, we fetched data from the NASA APOD API and updated the DOM to display our pulled data on the browser.

For more practice fetching data from an API, the [Dog API](https://thedogapi.com/) or my [Bread Puns API](https://my-bao-client3.herokuapp.com/) are two fun ones. For further practice updating the DOM, try displaying other other values from the APOD API's response data.

You now know how to successfully pull data from an API using the `fetch()` method and display the response on your browser. 🚀
