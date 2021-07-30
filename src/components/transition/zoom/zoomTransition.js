import { to } from 'react-spring'
import makeTranslate3d from './translate3d'

const zoomTransition = (configuration, directions, elementHeight) => {
  const { internalSpacing } = configuration
  const height = `calc(${elementHeight} + ${internalSpacing})`

  const translate3d = makeTranslate3d(directions, height)

  const transitionStages = {
    from: { position: 'absolute', scale: 0 },
    enter: ({ index }) => ({ scale: 1, index }),
    update: ({ index }) => ({ index }),
    leave: ({ index }) => ({ scale: 0, index })
  }

  const generateStyle = ({ index, scale, ...style }) => ({
    ...style,
    transform: to([index, scale], (i, s) => `${translate3d(i)} scale(${s})`)
  })

  return [transitionStages, generateStyle]
}

export default zoomTransition
