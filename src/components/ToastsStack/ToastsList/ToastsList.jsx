import React from 'react'
import { animated } from 'react-spring'

import Toast from '@components/Toast'
import { useConfiguration } from '@components/Configuration'

import useSlidingTransition from './useSlidingTransition'
import useNotifications from './useNotifications'

const AnimatedToast = animated(Toast)

const ToastsList = () => {
  const notifications = useNotifications()

  const { slidingSide } = useConfiguration()
  const transitions = useSlidingTransition(notifications, slidingSide)

  return transitions((style, { id, type, text, dismiss }) => (
    <AnimatedToast
      key={id}
      style={style}
      type={type}
      text={text}
      dismiss={() => dismiss()}
    />
  ))
}

export default ToastsList
