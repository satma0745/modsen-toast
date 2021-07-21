import React from 'react'
import Toast from './Toast'

import { useNotifications } from '../data'

const ToastStack = () => {
  const [notifications] = useNotifications()

  return (
    <div>
      {notifications.map(({ id, type, text, dismiss }) => (
        <Toast key={id} type={type} text={text} dismiss={() => dismiss()} />
      ))}
    </div>
  )
}

export default ToastStack
