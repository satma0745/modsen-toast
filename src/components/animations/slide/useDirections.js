import { useConfiguration } from '@components/Configuration'

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

const useDirections = () => {
  const { horizontalPosition, verticalPosition } = useConfiguration()

  const xDir = horizontalDirection(horizontalPosition)
  const yDir = verticalDirection(verticalPosition)

  return [xDir, yDir]
}

export default useDirections
