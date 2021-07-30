import { to } from 'react-spring'
import makeTranslate3d from './translate3d'

const slideTransition = (configuration, directions, elementHeight) => {
  const { internalSpacing } = configuration
  const height = `calc(${elementHeight} + ${internalSpacing})`

  const translate3d = makeTranslate3d(directions, height)

  const transitionStages = {
    from: { position: 'absolute', xOffset: 1 },
    enter: ({ index }) => ({ xOffset: 0, index }),
    update: ({ index }) => ({ index }),
    leave: { xOffset: 1 }
  }

  const generateStyle = ({ xOffset, index, ...style }) => ({
    ...style,
    transform: to([xOffset, index], (x, i) => translate3d(x, i))
  })

  return [transitionStages, generateStyle]
}

export default slideTransition
