import { useCallback } from 'react'
import useDirections from './useDirections'

const translateX = (offset, direction) => {
  const positioningOffset = Math.max(direction * 100, 0)
  return `calc(${direction * offset * 150}% - ${positioningOffset}%)`
}

const translateY = (index, direction, height) => {
  const positioningOffset = Math.min(direction * 100, 0)
  return `calc(${direction} * ${index} * ${height} + ${positioningOffset}%)`
}

const useTranslate3d = (height) => {
  const [xDirection, yDirection] = useDirections()

  const translate3d = useCallback(
    (xOffset, index) => {
      const transX = translateX(xOffset, xDirection)
      const transY = translateY(index, yDirection, height)

      return `translate3d(${transX}, ${transY}, 0)`
    },
    [xDirection, yDirection, height]
  )

  return translate3d
}

export default useTranslate3d
