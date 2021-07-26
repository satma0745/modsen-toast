import React from 'react'
import PropTypes from 'prop-types'
import { animated } from 'react-spring'

import Toast from '@components/Toast'
import { useConfiguration } from '@components/Configuration'

import useSlidingTransition from './useSlidingTransition'

const AnimatedToast = animated(Toast)

const AnimatedToasts = ({ notifications }) => {
  const { slidingSide } = useConfiguration()
  const transitions = useSlidingTransition(notifications, slidingSide)

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
  ).isRequired
}

export default AnimatedToasts
