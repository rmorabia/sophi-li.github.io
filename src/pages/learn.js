import React from 'react'

import styles from './learn.module.css'

import Layout from '../layout'

const Learn = () => (
  <Layout>
    <section>
      <h1>Learning in Public</h1>
      <p>
        My current focus is on front-end development and data structures +
        algorithms for interviewing. Learning in public inspired by{' '}
        <a
          href="https://www.taniarascia.com/learn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tania Rascia
        </a>
        .
      </p>
      <h2>JavaScript</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Fetch vs axios
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Promises, async/await
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Scope, closures, this
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          ES6
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled /> MVC
          - Model View Controller
        </li>
      </ul>

      <h2>Document Object Model (DOM)</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          The DOM
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Traversing the DOM
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Manipulating the DOM
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Events
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Local Storage
        </li>
      </ul>

      <h2>HTML</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Semantic HTML
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Accessibility
        </li>
      </ul>

      <h2>CSS</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Flexbox
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          CSS reset
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          CSS Responsiveness
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Bootstrap
        </li>
      </ul>

      <h2>React</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          JSX
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Class vs functional components
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          State vs props
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Lifecycle Methods
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Hooks
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          React Router
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Context
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Redux
        </li>
      </ul>

      <h2>Testing</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input type="checkbox" disabled /> JavaScript Unit Tests
        </li>
      </ul>

      <h2>Tools/Frameworks</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Command Line
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Git
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Static Site Generators
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Express
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          <a
            href="https://sophiali.dev/how-to-deploy-monorepo-to-heroku"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploying to Heroku
          </a>
        </li>
      </ul>

      <h2>Algorithms</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Complexity (Big O notation)
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Size complexity
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Time complexity
        </li>

        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Searching
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Binary search
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Recursion
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Sorting
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Bubble
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Insertion
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Selection
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Merge
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Heap
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Quick
        </li>
      </ul>

      <h2>Data Structures</h2>
      <ul className={styles.ulContainers}>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Arrays
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Linked lists
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Singly linked lists
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Doubly linked lists
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Stack
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Queue
        </li>
        <li>
          <input
            className={styles.taskListItem}
            type="checkbox"
            checked
            disabled
          />{' '}
          Hash tables
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Trees
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Heap
        </li>
        <li>
          <input className={styles.taskListItem} type="checkbox" disabled />{' '}
          Graph
        </li>
      </ul>
    </section>
  </Layout>
)

export default Learn
