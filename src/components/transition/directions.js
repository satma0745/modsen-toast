const horizontalDirection = (horizontalPosition) => {
  switch (horizontalPosition) {
    case 'right':
      return 1
    case 'left':
      return -1
    default:
      throw new Error('Unsupported horizontal position.')
  }
}

const verticalDirection = (verticalPosition) => {
  switch (verticalPosition) {
    case 'top':
      return 1
    case 'bottom':
      return -1
    default:
      throw new Error('Unsupported vertical position.')
  }
}

const directions = ({ horizontalPosition, verticalPosition }) => {
  return [
    horizontalDirection(horizontalPosition),
    verticalDirection(verticalPosition)
  ]
}

export default directions
