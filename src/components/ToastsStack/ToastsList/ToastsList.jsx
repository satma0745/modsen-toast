import React from 'react'
import { animated } from 'react-spring'

import Toast from '@components/Toast'
import useTransition from '@transition'

import useNotifications from './useNotifications'

const AnimatedToast = animated(({ style, toastProps }) => (
  <div style={style}>
    <Toast {...toastProps} />
  </div>
))

const ToastsList = () => {
  const notifications = useNotifications()
  const transition = useTransition(notifications, ({ id }) => id)

  return transition(AnimatedToast)
}

export default ToastsList
