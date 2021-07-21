import React from 'react'
import Toast from './Toast'

import { useNotifications } from '../data'

const ToastStack = () => {
  const [notifications] = useNotifications()

  return (
    <div>
      {notifications.map(({ id, type, text }) => (
        <Toast key={id} type={type} text={text} />
      ))}
    </div>
  )
}

export default ToastStack
