import makeFadeTransition from './makeFadeTransition'
import makeSlideTransition from './makeSlideTransition'
import makeZoomTransition from './makeZoomTransition'

const selectTransition = ({ transition }) => {
  switch (transition) {
    case 'fade':
      return makeFadeTransition
    case 'slide':
      return makeSlideTransition
    case 'zoom':
      return makeZoomTransition
    default:
      throw new Error('Unsupported transition option.')
  }
}

const getDirection = ({ horizontalPosition }) => {
  switch (horizontalPosition) {
    case 'right':
      return 1
    case 'left':
      return -1
    default:
      throw new Error('Unsupported horizontal position.')
  }
}

const makeTransition = (configuration) => {
  const transition = selectTransition(configuration)
  const direction = getDirection(configuration)

  return transition({ direction })
}

export default makeTransition
