import React from 'react'
import PropTypes from 'prop-types'

import { useNotifications } from '../../../data'

import Container from './Container'
import AnimatedToasts from './AnimatedToasts'

const ToastStack = ({ toastsDirection, slideFrom, slideTo, ...props }) => {
  const [notifications] = useNotifications()

  return (
    <Container direction={toastsDirection} {...props}>
      <AnimatedToasts
        notifications={notifications}
        slideFrom={slideFrom}
        slideTo={slideTo}
      />
    </Container>
  )
}
ToastStack.propTypes = {
  toastsDirection: PropTypes.oneOf(['top-down', 'down-top']),
  slideFrom: PropTypes.string,
  slideTo: PropTypes.string
}
ToastStack.defaultProps = {
  toastsDirection: 'top-down'
}

export default ToastStack
