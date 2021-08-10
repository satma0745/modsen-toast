import React from 'react'
import { Transition } from 'react-transition-group'

import { useConfiguration, useNotifications, useTransition } from '@hooks'

import SpacedToast from './SpacedToast'
import ToastContainer from './ToastContainer'

const ToastsList = () => {
  const configuration = useConfiguration()
  const { transitionDuration, collapseDuration } = configuration

  const notifications = useNotifications()
  const { toastTransition, collapseTransition } = useTransition(configuration)

  return (
    <ToastContainer>
      {notifications.map((notification) => (
        <Transition
          key={notification.id}
          timeout={{ enter: 0, exit: transitionDuration + collapseDuration }}
          onExiting={collapseTransition}
        >
          {(transitionStage) => (
            <SpacedToast
              style={toastTransition[transitionStage]}
              position={configuration.verticalPosition}
              spacing={configuration.internalSpacing}
              {...notification}
            />
          )}
        </Transition>
      ))}
    </ToastContainer>
  )
}

export default ToastsList
