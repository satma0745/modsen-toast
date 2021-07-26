import React from 'react'

import { useConfiguration } from '@components/Configuration'

import Container from './Container'
import AnimatedToasts from './AnimatedToasts'
import useNotifications from './useNotifications'

const ToastStack = (props) => {
  const { internalSpacing, edgeDistance, direction } = useConfiguration()
  const notifications = useNotifications()

  return (
    <Container
      internalSpacing={internalSpacing}
      edgeDistance={edgeDistance}
      direction={direction}
      {...props}
    >
      <AnimatedToasts notifications={notifications} />
    </Container>
  )
}

export default ToastStack
