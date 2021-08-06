import React from 'react'
import { Transition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { useConfiguration } from '@components/Configuration'

import { makeTransition, makeCollapse } from '../transition'
import SpacedToast from './SpacedToast'
import ToastContainer from './ToastContainer'

const ToastsList = ({ notifications }) => {
  const configuration = useConfiguration()
  const transitionStyle = makeTransition(configuration)

  return (
    <ToastContainer>
      {notifications.map((notification) => (
        <Transition
          key={notification.id}
          timeout={{ enter: 0, exit: 1500 }}
          onExiting={makeCollapse({ delay: 1000, duration: 500 })}
        >
          {(transitionStage) => (
            <SpacedToast
              style={transitionStyle[transitionStage]}
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
ToastsList.propTypes = {
  notifications: PropTypes.array.isRequired
}

export default ToastsList
