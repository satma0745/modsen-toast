import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import ToastStack from './ToastStack'

const configureParentNodeStyling = (parentNode) => {
  const oldPosition = parentNode.style.position
  parentNode.style.position = 'relative'

  const undo = () => {
    parentNode.style.position = oldPosition
  }
  return undo
}

const positioningStyle = (position) => {
  switch (position) {
    case 'top-right':
      return { top: 0, right: 0 }
    case 'bottom-right':
      return { bottom: 0, right: 0 }
    case 'bottom-left':
      return { bottom: 0, left: 0 }
    case 'top-left':
      return { top: 0, left: 0 }
  }
}

const PositioningWrapper = ({ position, children }) => (
  <div style={{ position: 'absolute', ...positioningStyle(position) }}>
    {children}
  </div>
)

const stackDirection = (stackPosition) => {
  return stackPosition.startsWith('top') ? 'top-down' : 'down-top'
}

const Toasts = ({
  position = 'bottom-right',
  parentNode = document.querySelector('#root')
}) => {
  useEffect(() => configureParentNodeStyling(parentNode), [parentNode])

  return ReactDOM.createPortal(
    <PositioningWrapper position={position}>
      <ToastStack direction={stackDirection(position)} />
    </PositioningWrapper>,
    parentNode
  )
}

export default Toasts
