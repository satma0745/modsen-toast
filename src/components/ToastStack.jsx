import React from 'react'
import Toast from './Toast'

const ToastStack = ({ notifications }) => (
  <div>
    {notifications.map(({ id, type, text }) => (
      <Toast key={id} type={type} text={text} />
    ))}
  </div>
)

export default ToastStack
