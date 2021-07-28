import React from 'react'
import { to, useTransition } from 'react-spring'

import { useConfiguration } from '@components/Configuration'

import useNotifications from './useNotifications'
import useDirections from './useDirections'
import AnimatedToast from './AnimatedToast'

const ToastsList = () => {
  const notifications = useNotifications()
  const { internalSpacing } = useConfiguration()
  const [xDir, yDir] = useDirections()

  const height = `6em`

  const transitions = useTransition(
    notifications.map((notification, index) => ({
      ...notification,
      yOffset: `calc(${
        yDir * index
      } * (${height} + ${internalSpacing}) + ${Math.min(yDir * 100, 0)}%)`
    })),
    {
      from: { position: 'absolute', opacity: 0, xOffset: 1 },
      enter: ({ yOffset }) => ({ opacity: 1, xOffset: 0, yOffset }),
      update: ({ yOffset }) => ({ yOffset }),
      leave: { opacity: 0, xOffset: 1, height: 0 },
      keys: (notification) => notification.id
    }
  )

  return transitions(
    ({ xOffset, yOffset, ...style }, { id, type, text, dismiss }) => (
      <AnimatedToast
        key={id}
        style={{
          transform: to(
            [xOffset, yOffset],
            (x, y) =>
              `translate3d(calc(${x * xDir} * 150% - ${Math.max(
                xDir * 100,
                0
              )}%), ${y}, 0)`
          ),
          ...style
        }}
        type={type}
        text={text}
        dismiss={() => dismiss()}
      />
    )
  )
}

export default ToastsList
