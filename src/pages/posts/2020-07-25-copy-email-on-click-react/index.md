---
path: '/copy-email-address-on-click-react'
date: '2020-07-25'
title: 'How to Copy an Email Address on Click in React'
tags: ['react', 'snippets']
category: 'code'
---

I added a feature to my website that allows visitors to copy my email address with a click. I prefer the user experience of this feature over using `mailto:`, which opens up the visitor's default email app.

Here's how the feature works:

- When a visitor hovers over the text, "Email", instructions are displayed. The instructions let them know that clicking the text will copy my email address.
- If the visitor does not click and hovers away, the instructions are no longer displayed.
- If the visitor clicks the text, my email address is saved to their clipboard and a success message is displayed. The success message lets them know that the email has been successfully copied to their clipboard.
- The success message disappears after five seconds from clicking the text.

You can give this feature a try by scrolling to the footer of [my website](https://sophiali.dev/) and clicking the text, "Email". You'll then be able to paste my email address to any email app of your choice.

Here's the JSX code:

```js
import React, { useState, useEffect } from 'react'

const EmailCopy = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState('')
  const [instructions, setInstructions] = useState('')
  const email = 'email@domain.com'

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
    <nav>
      <p>
        {copySuccessMessage} {instructions}
      </p>
      <p
        onClick={copyEmail}
        onMouseOver={showInstruction}
        onMouseOut={hideInstruction}
      >
        Email
      </p>
    </nav>
  )
}

export default EmailCopy
```

Here's how the code works:

- On hover, `showInstruction()` is executed and `instructions` is displayed as long as `copySuccessMessage` is not already displayed.
- On hover out, `hideInstruction()` is executed and `instructions` is cleared.
- On click, `copyEmail()` is executed. `copyEmail()` copies the email address to the visitor's clipboard, updates `copySuccessMessage` to display a success message, and clears `instructions`.
- The `useEffect` hook runs whenever `copySuccessMessage` changes. The `setTimeOut()` method clears `copySuccessMessage` after five seconds has passed.

You can view the full code with styling for my website's copy email address on click feature in my [GitHub repository](https://github.com/sophi-li/sophi-li.github.io/tree/master/src/components/Footer).
