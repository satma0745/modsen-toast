const styleParentNode = (parentNode) => {
  const oldPosition = parentNode.style.position
  parentNode.style.position = 'relative'

  const undo = () => {
    parentNode.style.position = oldPosition
  }
  return undo
}

const stackDirection = (stackPosition) => {
  return stackPosition.startsWith('top') ? 'top-down' : 'down-top'
}

const slidingSide = (stackPosition) => {
  return stackPosition.split('-')[1]
}

export { styleParentNode, stackDirection, slidingSide }
