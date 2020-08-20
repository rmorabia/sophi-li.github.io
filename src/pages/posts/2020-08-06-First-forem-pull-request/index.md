---
path: '/first-forem-open-source-pull-request'
date: '2020-08-06'
title: 'Learnings from my 1st Live Pairing Session & 1st Pull Request to Forem'
tags: ['open-source']
category: 'projects'
---

A few weeks ago, [Nick](https://twitter.com/nickytonline), Senior Software Developer at [DEV](http://dev.to/), tweeted about live pairing on a Forem/DEV issue. I reached out to Nick because I thought it’d be a great opportunity to learn and also make my first contribution to an open source platform I really enjoy using. Together, we live paired on Twitch and worked on refactoring the code for [Forem](https://github.com/forem/forem)'s image upload feature.

In this blog, I’ll talk about what issue we worked on, how the live stream went, and what I learned.

## The Issue

Nick and I worked on converting a Preact class component to a functional component using hooks. We worked on the `<ImageUploader />` component, which allows users to upload images to their DEV blog.

[Preact](https://preactjs.com/) is a lighter version of [React](https://reactjs.org/). Class components are the original way of including state and lifecycle methods. Functional components are plain JavaScript functions that accept props as arguments. [Hooks](https://preactjs.com/guide/v10/hooks/) introduce stateful logic in functional components. Class components and functional components with hooks both introduce state, but hooks allow us to reuse stateful logic without changing our component hierarchy.

You can check out the issue in this [GitHub pull request](https://github.com/forem/forem/pull/9369).

## The Setup and Test Drive

To get set up on my local machine, I followed the [DEV install documentation](https://docs.dev.to/installation/). The documentation is thorough and detailed, so following the instructions was straightforward. The only issue I ran into was Ruby versioning on my local machine.

Before the live stream, Nick and I did a test run to make sure my environment was running properly and our set up would work. Nick patiently helped troubleshoot the Ruby versioning issue with me. After a lot of Googling and StackOverflow, we figured out that I needed to run bash within bash in order to run DEV locally on my machine.

## The Live Stream

Our live stream started off with a couple minutes of our sound unknowingly off on Twitch while we did introductions. It’s only normal that there’s a tech issue, right? 🤪 Once we got that fixed and re-introduced ourselves and the Forem issue, the rest of the live stream ran smoothly.

We converted the image uploader feature from a Preact class component to functional component using the `useState` hook. Since we weren’t making any feature updates, we only needed to refactor the syntax and make sure all the tests were still passing.

Nick did a fantastic job balancing moderating the stream to make sure the audience understood what we were doing while also pairing with me. Similar to my previous pair programming experiences, we discussed our changes and plan, then got to coding. I also shared my thought process out loud as I was coding, which was helpful for letting the audience understand what changes were being made and why. The difference with the Twitch live stream was that I also had extra eyes from the audience, which was great for catching things like typos.

After updating the class component to a functional component with the `useState` hook on the live stream, Nick and I worked on adding a `useReducer` hook to make the code more uniform and easy to understand. After passing all the tests again, I submitted my first [pull request](https://github.com/forem/forem/pull/9369) to Forem’s code base!

## Learnings

This was my first time live pairing and contributing to an open source code project. Here’s a couple of things I learned:

- As a newer developer, getting involved in open source is a great way to help build software you love while also learning how to read and contribute to a large codebase.
- Live pairing is rewarding because it allows you to collaborate and practice thinking out loud. This was especially helpful for me, since I'm currently doing a lot of technical interviews.
- The `useReducer` hook is a great way to manage components with complex state logic. It makes code easier to understand because it centralizes the logic that would otherwise be spread throughout the component.

## How You Can Get Involved

If you want to live pair with Nick on a Forem issue, you can reach out to him on [DEV](https://dev.to/nickytonline) or [Twitter](https://twitter.com/nickytonline). You can also watch his programming videos on [YouTube](https://www.youtube.com/channel/UCBLlEq0co24VFJIMEHNcPOQ?app=desktop) or [Twitch](http://doingdevfordev.com/).

Huge thanks to Nick for live pairing with me and everyone for joining the stream!
