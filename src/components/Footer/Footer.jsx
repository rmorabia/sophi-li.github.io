import React from 'react'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.linkList}>
      <li>
        <a href="mailto:sophiali.wy@gmail.com">Email</a>
      </li>
      <li>
        <a
          href="https://github.com/sophi-li"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/sophia_wyl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/sophiali124/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
