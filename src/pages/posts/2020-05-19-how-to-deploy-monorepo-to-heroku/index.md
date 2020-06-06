---
path: '/how-to-deploy-monorepo-to-heroku'
date: '2020-05-19'
title: 'How to Deploy a React App and Node.js/Express Backend API to Heroku From a Monorepo'
tags: ['react', 'node', 'deployment']
category: 'code'
---

I spent an entire day figuring out how to deploy my project to Heroku from a monorepo. This didn't need to take an entire day. These are the steps I took to deploy my project and wish I knew from the start.

## Prerequisites

- [Heroku account](https://signup.heroku.com/)
- [Command line usage](https://www.taniarascia.com/how-to-use-the-command-line-for-apple-macos-and-linux/)
- A project in a monorepo with client and backend folders

## What is Heroku?

[Heroku](https://www.heroku.com/about) is a cloud platform that developers use to deploy, manage, and scale apps.

## What is a Monorepo?

A [monorepo](https://en.wikipedia.org/wiki/Monorepo) is a single repository that houses all code and assets for a project.

## My Monorepo Set Up

This is what my monorepo looks like:

```shell
/breadpun-api
    /backend
    /client
```

I have two folders, (1) backend and (2) client in a folder called breadpun-api.

The backend folder contains code for a Breadpun API built with Node.js/Express.

The client folder contains code for a React app that fetches and displays data from the Breadpun API.

See the [monorepo on Github](https://github.com/sophi-li/breadpun-api).

## How to Deploy

### 1. Download the [Heroku Command Line Interface (CLI)](https://devcenter.heroku.com/articles/heroku-cli).

I used [npm](https://www.npmjs.com/get-npm) to download Heroku. If you use npm, you'll need to have [node and npm installed](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/).

Run this command to install Heroku with npm:

```shell
npm install -g heroku
```

### 2. Login to Heroku using the Heroku CLI

Run this command to login to Heroku from your terminal:

```shell
heroku login
```

You'll be redirected from your terminal to login through the browser. After logging in in the browser, your terminal will show that you're logged in.

### 3. Create Heroku apps for backend and client folders

[`heroku apps:create`](https://devcenter.heroku.com/articles/creating-apps) creates a new Heroku application and a git remote. The command takes one argument:

1. app name, for example, `my-bao-server`

```shell
heroku apps:create [name]
```

Run the following command to create a new app for your backend:

```shell
heroku apps:create my-bao-server
```

The [Heroku buildpack](https://github.com/mars/create-react-app-buildpack?fbclid=IwAR3wKqnphyxs-s7pMogM4nu98694Rt-jwh1GOLxoOSyoq_2kkURIBzg2RwY) deploys a React UI as a static web site. Run the following command to create a new app for your client:

```shell
heroku apps:create my-bao-client3 --buildpack mars/create-react-app
```

### 4. Inspect your remote apps

Run the following command to see your connected remotes:

```shell
git remote -v
```

### 5. Create two new remotes for your client and server

The `git remote add` adds new remotes. The command takes two arguments:

1. remote name, for example, `heroku-server`
2. remote URL, for example, `heroku-client`

```shell
git remote add [remote name] [remote url]
```

Run the following commands to create new remotes:

```shell
git remote add heroku-server https://git.heroku.com/my-bao-server
git remote add heroku-client https://git.heroku.com/my-bao-client3
```

### 6. Push sub folders to remotes to deploy

[`git subtree`](https://www.atlassian.com/git/tutorials/git-subtree) lets you nest one repository inside another as a sub-directory.

Run the following commands from your parent directory to add, commit, and push your changes:

```shell
git add .
git commit -m "init commit"
git subtree push --prefix backend heroku-server master
git subtree push --prefix client heroku-client master
```

### 7. Log errors, if any

Run the following command to see error messages:

```shell
heroku logs
```

### 8. Redeploy after any updates

Run the following commands from your parent directory to add, commit, and push your updates:

```shell
git add .
git commit -m "add updates"
git subtree push --prefix backend heroku-server master
git subtree push --prefix client heroku-client master
```

## Conclusion

It is possible to deploy a React app and Node.js/Express backend API to Heroku from a monorepo. And also not take an entire day to figure it out. 🤪

For reference, here's the:

- Deployed client: https://my-bao-client3.herokuapp.com/
- Deployed backend: https://my-bao-server.herokuapp.com/api/breadpuns
- [Breadpuns API GitHub repository](https://github.com/sophi-li/breadpun-api)

## Resources:

- [Deploying client and server code to heroku from a single git repo by Karolis Stulgys](https://medium.com/karolis-stulgys/deploy-client-and-server-code-to-heroku-from-a-single-git-repo-44c5b65da10a)
- [Heroku Buildpack for create-react-app](https://github.com/mars/create-react-app-buildpack?fbclid=IwAR3wKqnphyxs-s7pMogM4nu98694Rt-jwh1GOLxoOSyoq_2kkURIBzg2RwY)
