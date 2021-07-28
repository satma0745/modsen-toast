import React from 'react'
import { animated, useTransition } from 'react-spring'

import Toast from '@components/Toast'
import { useConfiguration } from '@components/Configuration'

import useNotifications from './useNotifications'

const direction = (side) => {
  switch (side) {
    case 'right':
      return 1
    case 'left':
      return -1
    default:
      throw new Error('Unsupported side option.')
  }
}

const AnimatedToast = animated(Toast)

const ToastsList = () => {
  const notifications = useNotifications()

  const { slidingSide } = useConfiguration()
  const dir = direction(slidingSide)

  const transitions = useTransition(notifications, {
    from: { opacity: 0, x: 1 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 1 }
  })

  return transitions(({ x, ...style }, { id, type, text, dismiss }) => (
    <AnimatedToast
      key={id}
      style={{
        transform: x.to((v) => `translateX(calc(${v * dir} * 150%))`),
        ...style
      }}
      type={type}
      text={text}
      dismiss={() => dismiss()}
    />
  ))
}

export default ToastsList
