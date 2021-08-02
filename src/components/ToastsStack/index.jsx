import React from 'react'
import PropTypes from 'prop-types'

import { ConfigurationProvider } from '@components/Configuration'

import ToastsList from './ToastsList'
import ToastsPortal from './ToastsPortal'
import ErrorBoundary from './ErrorBoundary'

const ToastsStack = ({
  position,
  parentNode,
  edgeDistance,
  internalSpacing,
  notificationLifetime,
  transition,
  toastTypesConfig,
  limit,
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
      limit={limit}
    >
      <ToastsPortal {...props}>
        <ToastsList />
      </ToastsPortal>
    </ConfigurationProvider>
  </ErrorBoundary>
)
ToastsStack.propTypes = {
  position: PropTypes.string,
  parentNode: PropTypes.func,
  edgeDistance: PropTypes.string,
  internalSpacing: PropTypes.string,
  notificationLifetime: PropTypes.number,
  transition: PropTypes.string,
  toastTypesConfig: PropTypes.object,
  limit: PropTypes.number
}
ToastsStack.defaultProps = {
  position: 'top-left',
  parentNode: () => document.querySelector('#root'),
  edgeDistance: '2rem',
  internalSpacing: '1rem',
  notificationLifetime: 3000,
  transition: 'slide',
  toastTypesConfig: {},
  limit: 3
}

export default ToastsStack
