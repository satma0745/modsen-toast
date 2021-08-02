import React from 'react'
import PropTypes from 'prop-types'

import Surface from './Surface'
import Content from './Content'
import DismissButton from './DismissButton'

const defaultToastConfig = {
  fgColor: '#000',
  bgColor: '#fff'
}

const ToastCore = ({
  type,
  title,
  message,
  dismiss,
  toastTypesConfig,
  ...props
}) => {
  const toastTypeConfig = toastTypesConfig[type]
  const { fgColor, bgColor, icon } = toastTypeConfig ?? defaultToastConfig

  return (
    <Surface color={bgColor} {...props}>
      <Content icon={icon} color={fgColor} title={title} message={message} />
      <DismissButton color={fgColor} onClick={() => dismiss()} />
    </Surface>
  )
}
ToastCore.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired,
  toastTypesConfig: PropTypes.object.isRequired
}

export default ToastCore
