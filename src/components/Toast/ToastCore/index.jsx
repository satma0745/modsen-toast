import React from 'react'
import PropTypes from 'prop-types'

import dismissIcon from '../assets/dismiss.svg'

import Surface from './Surface'
import { DismissButton, Content, Icon, Text } from './InnerElements'

const ToastCore = ({ fgColor, bgColor, icon, text, dismiss, ...props }) => (
  <Surface color={bgColor} {...props}>
    <Content>
      <Icon src={icon} />
      <Text color={fgColor}>{text}</Text>
    </Content>

    <DismissButton src={dismissIcon} onClick={() => dismiss()} />
  </Surface>
)
ToastCore.propTypes = {
  fgColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dismiss: PropTypes.func.isRequired
}

export default ToastCore
