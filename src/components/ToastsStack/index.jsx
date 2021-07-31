import React from 'react'
import PropTypes from 'prop-types'

import { ConfigurationProvider } from '@components/Configuration'

import ToastsList from './ToastsList'
import ToastsPortal from './ToastsPortal'
import ErrorBoundary from './ErrorBoundary'

const ToastsStack = ({
  preferences: {
    position,
    parentNode,
    edgeDistance,
    internalSpacing,
    notificationLifetime,
    transition,
    toastTypesConfig
  },
  ...props
}) => (
  <ErrorBoundary>
    <ConfigurationProvider
      position={position}
      parentNode={parentNode}
      edgeDistance={edgeDistance}
      internalSpacing={internalSpacing}
      notificationLifetime={notificationLifetime}
      transition={transition}
      toastTypesConfig={toastTypesConfig}
    >
      <ToastsPortal {...props}>
        <ToastsList />
      </ToastsPortal>
    </ConfigurationProvider>
  </ErrorBoundary>
)
ToastsStack.propTypes = {
  preferences: PropTypes.object
}
ToastsStack.defaultProps = {
  preferences: {}
}

export default ToastsStack
