import React from 'react'
import PropTypes from 'prop-types'

import { ConfigurationProvider } from '@components/Configuration'

import ToastsList from './ToastsList'
import ToastsPresentation from './ToastsPresentation'
import ToastsPortal from './ToastsPortal'
import ErrorBoundary from './ErrorBoundary'

const ToastsStack = ({ preferences, ...props }) => (
  <ErrorBoundary>
    <ConfigurationProvider preferences={preferences}>
      <ToastsPortal>
        <ToastsPresentation {...props}>
          <ToastsList />
        </ToastsPresentation>
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
