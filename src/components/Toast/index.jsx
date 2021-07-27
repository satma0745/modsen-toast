import React from 'react'
import PropTypes from 'prop-types'

import { useConfiguration } from '@components/Configuration'

import Surface from './Surface'
import Content from './Content'
import DismissButton from './DismissButton'

const defaultToastConfig = {
  fgColor: '#000',
  bgColor: '#fff'
}

const ToastCore = ({ type, text, dismiss, ...props }) => {
  const { toastTypesConfig } = useConfiguration()
  const toastTypeConfig = toastTypesConfig[type]
  const { fgColor, bgColor, icon } = toastTypeConfig ?? defaultToastConfig

  return (
    <Surface color={bgColor} {...props}>
      <Content icon={icon} color={fgColor} text={text} />
      <DismissButton color={fgColor} onClick={() => dismiss()} />
    </Surface>
  )
}
ToastCore.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired
}

export default ToastCore
