import React from 'react'
import {Alert} from 'react-bootstrap'
function Message({ variant, children }) {
  return (
    <Alert>
         <Alert variant={variant}>
            {children}
        </Alert>
    </Alert>
  )
}

export default Message
