import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { useConfiguration } from '@hooks'
import PositioningWrapper from './PositioningWrapper'

const ToastsPortal = ({ children, ...props }) => {
  const { parentNode } = useConfiguration()

  useEffect(() => {
    const oldPosition = parentNode.style.position
    parentNode.style.position = 'relative'

    return () => {
      parentNode.style.position = oldPosition
    }
  }, [parentNode])

  return ReactDOM.createPortal(
    <PositioningWrapper {...props}>{children}</PositioningWrapper>,
    parentNode
  )
}

export default ToastsPortal
