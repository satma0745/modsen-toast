import React from 'react'
import { animated } from 'react-spring'

import Toast from '@components/Toast'
import useTransition from '@transition'

import useNotifications from './useNotifications'

const AnimatedToast = animated(
  ({ style, payload: { type, text, dismiss } }) => (
    <div style={style}>
      <Toast type={type} text={text} dismiss={dismiss} />
    </div>
  )
)

const ToastsList = () => {
  const notifications = useNotifications()
  const transition = useTransition(notifications, ({ id }) => id)

  return transition(AnimatedToast)
}

export default ToastsList
