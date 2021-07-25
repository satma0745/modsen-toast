import React from 'react'
import PropTypes from 'prop-types'

import Container from './Container'
import AnimatedToasts from './AnimatedToasts'
import useNotifications from './useNotifications'

const ToastStack = ({
  toastsDirection,
  slideFrom,
  slideTo,
  internalSpacing,
  edgeDistance,
  notificationLifetime,
  ...props
}) => {
  const notifications = useNotifications({ notificationLifetime })

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
  edgeDistance: PropTypes.string.isRequired,
  notificationLifetime: PropTypes.number
}
ToastStack.defaultProps = {
  notificationLifetime: undefined
}

export default ToastStack
