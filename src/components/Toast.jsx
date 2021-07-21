import React from 'react'

const Toast = ({ type, text }) => (
  <div>
    <p>
      {type}: {text}
    </p>
  </div>
)

export default Toast
