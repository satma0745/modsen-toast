import React from 'react'
import PropTypes from 'prop-types'

import Surface from './Surface'
import Content from './Content'
import DismissButton from './DismissButton'

const ToastCore = ({ fgColor, bgColor, icon, text, dismiss, ...props }) => (
  <Surface color={bgColor} {...props}>
    <Content icon={icon} color={fgColor} text={text} />
    <DismissButton color={fgColor} onClick={() => dismiss()} />
  </Surface>
)
ToastCore.propTypes = {
  fgColor: PropTypes.string,
  bgColor: PropTypes.string,
  icon: PropTypes.func,
  text: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired
}
ToastCore.defaultProps = {
  fgColor: '#000',
  bgColor: '#fff',
  icon: undefined
}

export default ToastCore
