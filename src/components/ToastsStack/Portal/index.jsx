import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { useConfiguration } from '@components/Configuration'
import ToastStack from '../Core'
import PositioningWrapper from './PositioningWrapper'

const Toasts = (props) => {
  const {
    parentNode,
    position,
    internalSpacing,
    edgeDistance,
    notificationLifetime
  } = useConfiguration()

  useEffect(() => {
    const oldPosition = parentNode.style.position
    parentNode.style.position = 'relative'

    return () => {
      parentNode.style.position = oldPosition
    }
  }, [parentNode])

  return ReactDOM.createPortal(
    <PositioningWrapper {...props} position={position}>
      <ToastStack
        internalSpacing={internalSpacing}
        edgeDistance={edgeDistance}
        notificationLifetime={notificationLifetime}
      />
    </PositioningWrapper>,
    parentNode
  )
}

export default Toasts
