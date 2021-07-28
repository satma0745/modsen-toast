import React from 'react'
import { animated } from 'react-spring'

import Toast from '@components/Toast'

const AnimatedToast = animated(({ style, ...props }) => (
  <div style={style}>
    <Toast {...props} />
  </div>
))

export default AnimatedToast
