import React, { useState, useEffect } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const [copySuccess, setCopySuccess] = useState('')
  const [instructions, setInstructions] = useState('')
  const emailToCopy = 'sophiali.wy@gmail.com'

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [copySuccess])

  function copyEmail() {
    navigator.clipboard.writeText(emailToCopy)
    setCopySuccess('sophiali.wy@gmail.com copied to clipboard')
    setInstructions('')
  }

  function showInstruction() {
    if (copySuccess === 'sophiali.wy@gmail.com copied to clipboard') {
      return
    }
    setInstructions('click to copy sophiali.wy@gmail.com')
  }

  function hideInstruction() {
    setInstructions('')
  }

  return (
    <footer>
      <div className={styles.instructions}>
        {copySuccess} {instructions}
      </div>
      <ul className={styles.ulContainer}>
        <li className={styles.footerLink}>
          <a
            className={styles.aTag}
            onClick={copyEmail}
            onMouseOver={showInstruction}
            onMouseOut={hideInstruction}
          >
            Email
          </a>
        </li>

        <li className={styles.footerLink}>
          <a
            href="https://github.com/sophi-li"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aTag}
          >
            GitHub
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://twitter.com/sophia_wyl"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aTag}
          >
            Twitter
          </a>
        </li>
        <li className={styles.footerLink}>
          <a
            href="https://www.linkedin.com/in/sophiali124/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aTag}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
