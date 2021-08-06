import React from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { useConfiguration } from '@components/Configuration'

import useTransition from '../transition'
import SpacedToast from './SpacedToast'
import ToastContainer from './ToastContainer'

const ToastsList = ({ notifications }) => {
  const configuration = useConfiguration()
  const {
    transitionDuration,
    collapseDuration,
    verticalPosition,
    internalSpacing
  } = configuration

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
              position={verticalPosition}
              spacing={internalSpacing}
              {...notification}
            />
          )}
        </Transition>
      ))}
    </ToastContainer>
  )
}
ToastsList.propTypes = {
  notifications: PropTypes.array.isRequired
}

export default ToastsList
