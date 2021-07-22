import React from 'react'
import PropTypes from 'prop-types'

import Toast from '../../Toast'
import { useNotifications } from '../../../data'

import Container from './Container'

const ToastStack = ({ direction, ...props }) => {
  const [notifications] = useNotifications()

  return (
    <Container direction={direction} {...props}>
      {notifications.map(({ id, type, text, dismiss }) => (
        <Toast key={id} type={type} text={text} dismiss={() => dismiss()} />
      ))}
    </Container>
  )
}
ToastStack.propTypes = {
  direction: PropTypes.oneOf(['top-down', 'down-top'])
}
ToastStack.defaultProps = {
  direction: 'top-down'
}

export default ToastStack
