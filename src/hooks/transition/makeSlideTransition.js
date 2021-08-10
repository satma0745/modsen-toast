const getDirection = (horizontalPosition) => {
  switch (horizontalPosition) {
    case 'right':
      return 1
    case 'left':
      return -1
    default:
      throw new Error('Unsupported horizontal position.')
  }
}

const makeSlideTransitionStyles = ({
  transitionDuration,
  horizontalPosition
}) => {
  const transition = `transform ${transitionDuration}ms`
  const extremeOffset = `calc(${getDirection(horizontalPosition)} * 150%)`

  return {
    entering: { transform: `translateX(${extremeOffset}` },
    entered: { transform: `translateX(0%)`, transition },
    exiting: { transform: `translateX(${extremeOffset})`, transition }
  }
}

export default makeSlideTransitionStyles
