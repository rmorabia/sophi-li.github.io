import React, { useState, useEffect } from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState('')
  const [instructions, setInstructions] = useState('')
  const email = 'sophiali124@gmail.com'

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccessMessage('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [copySuccessMessage])

  function copyEmail() {
    navigator.clipboard.writeText(email)
    setCopySuccessMessage(`${email} copied to clipboard`)
    setInstructions('')
  }

  function showInstruction() {
    if (copySuccessMessage) {
      return
    }
    setInstructions(`click to copy ${email}`)
  }

  function hideInstruction() {
    setInstructions('')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.instructions}>
        {copySuccessMessage} {instructions}
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
