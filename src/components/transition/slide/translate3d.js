const translateX = (offset, direction) => {
  const positioningOffset = Math.max(direction * 100, 0)
  return `calc(${direction * offset * 150}% - ${positioningOffset}%)`
}

const translateY = (index, direction, height) => {
  const positioningOffset = Math.min(direction * 100, 0)
  return `calc(${direction} * ${index} * ${height} + ${positioningOffset}%)`
}

const makeTranslate3d = (directions, height) => {
  const [xDirection, yDirection] = directions

  const translate3d = (xOffset, index) => {
    const transX = translateX(xOffset, xDirection)
    const transY = translateY(index, yDirection, height)

    return `translate3d(${transX}, ${transY}, 0)`
  }

  return translate3d
}

export default makeTranslate3d
