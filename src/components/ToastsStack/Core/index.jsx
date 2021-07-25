import React from 'react'
import PropTypes from 'prop-types'

import useNotifications from '@data/useNotifications'

import Container from './Container'
import AnimatedToasts from './AnimatedToasts'

const ToastStack = ({
  toastsDirection,
  slideFrom,
  slideTo,
  internalSpacing,
  edgeDistance,
  ...props
}) => {
  const [notifications] = useNotifications()

  return (
    <Container
      direction={toastsDirection}
      internalSpacing={internalSpacing}
      edgeDistance={edgeDistance}
      {...props}
    >
      <AnimatedToasts
        notifications={notifications}
        slideFrom={slideFrom}
        slideTo={slideTo}
      />
    </Container>
  )
}
ToastStack.propTypes = {
  toastsDirection: PropTypes.oneOf(['top-down', 'down-top']).isRequired,
  slideFrom: PropTypes.string.isRequired,
  slideTo: PropTypes.string.isRequired,
  internalSpacing: PropTypes.string.isRequired,
  edgeDistance: PropTypes.string.isRequired
}

export default ToastStack
