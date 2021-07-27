import React from 'react'
import PropTypes from 'prop-types'

import { useConfiguration } from '@components/Configuration'
import ToastCore from './ToastCore'

const Toast = ({ type, text, dismiss, ...props }) => {
  const { toastTypesConfig } = useConfiguration()

  return (
    <ToastCore
      {...props}
      {...toastTypesConfig[type]}
      text={text}
      dismiss={dismiss}
    />
  )
}
Toast.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired
}

export default Toast
