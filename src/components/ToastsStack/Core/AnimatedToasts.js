import React from 'react'
import PropTypes from 'prop-types'
import { useTransition, animated } from 'react-spring'

import Toast from '../../Toast'

const translate = (side) => {
  switch (side) {
    case 'right':
      return 'translateX(150%)'
    case 'left':
      return 'translateX(-150%)'
    default:
      return 'translate(0%)'
  }
}

const AnimatedToast = animated(Toast)

const AnimatedToasts = ({ notifications, slideFrom, slideTo }) => {
  const transitions = useTransition(notifications, {
    from: { opacity: 0, transform: translate(slideFrom) },
    enter: { opacity: 1, transform: translate() },
    leave: { opacity: 0, transform: translate(slideTo) }
  })

  return transitions((style, { id, type, text, dismiss }) => (
    <AnimatedToast
      key={id}
      style={style}
      type={type}
      text={text}
      dismiss={() => dismiss()}
    />
  ))
}
AnimatedToasts.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      type: PropTypes.string,
      text: PropTypes.string,
      dismiss: PropTypes.func
    })
  ).isRequired,
  slideFrom: PropTypes.oneOf(['right', 'left']),
  slideTo: PropTypes.oneOf(['right', 'left'])
}

export default AnimatedToasts
