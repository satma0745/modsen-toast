import React from 'react'
import PropTypes from 'prop-types'

import ToastCore from './ToastCore'
import toastTypeConfig from './toastTypeConfig'

const Toast = ({ type, text, dismiss, ...props }) => (
  <ToastCore
    {...props}
    {...toastTypeConfig(type)}
    text={text}
    dismiss={dismiss}
  />
)
Toast.propTypes = {
  type: PropTypes.oneOf(['Error', 'Info', 'Success', 'Warning']),
  text: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired
}
Toast.defaultProps = {
  type: 'Info'
}

export default Toast
