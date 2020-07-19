import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  // const [copySuccess, setCopySuccess] = useState('')
  // const [instructions, setInstructions] = useState('')
  // const emailToCopy = 'sophiali.wy@gmail.com'

  // function copyEmail() {
  //   navigator.clipboard.writeText(emailToCopy)
  //   setCopySuccess('sophiali.wy@gmail.com copied to clipboard')
  //   setInstructions('')
  // }

  // function showInstruction() {
  //   if (copySuccess === 'sophiali.wy@gmail.com copied to clipboard') {
  //     return
  //   }
  //   setInstructions('click to copy sophiali.wy@gmail.com')
  // }

  // function hideInstruction() {
  //   setInstructions('')
  // }

  return (
    <footer>
      {/* <p>
        {' '}
        {copySuccess} {instructions}{' '}
      </p> */}
      <ul className={styles.ulContainer}>
        <li
          className={styles.footerLink}
          // onClick={copyEmail}
          // onMouseOver={showInstruction}
          // onMouseOut={hideInstruction}
        >
          <a className={styles.aTag} href="mailto:sophiali.wy@gmail.com">
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
