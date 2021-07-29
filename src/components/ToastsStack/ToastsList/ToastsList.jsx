import React from 'react'
import { animated } from 'react-spring'

import Toast from '@components/Toast'
import useSlidingAnimation from '@animations/sliding'

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
  const animation = useSlidingAnimation(notifications, ({ id }) => id, '6em')

  return animation(AnimatedToast)
}

export default ToastsList
