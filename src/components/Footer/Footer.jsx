import React from 'react'
import styles from './Footer.module.css'

const Footer = () => (
  <footer>
    <ul className={styles.ulContainer}>
      <li className={styles.footerLink}>
        <a href="mailto:sophiali.wy@gmail.com">Email</a>
      </li>
      <li className={styles.footerLink}>
        <a
          href="https://github.com/sophi-li"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li className={styles.footerLink}>
        <a
          href="https://twitter.com/sophia_wyl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </li>
      <li className={styles.footerLink}>
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
