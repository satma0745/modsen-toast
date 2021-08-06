const transition = 'transform 1000ms'

const makeSlideTransitionStyles = ({ direction }) => {
  const extremeOffset = `calc(${direction} * 150%)`

  return {
    entering: { transform: `translateX(${extremeOffset}` },
    entered: { transform: `translateX(0%)`, transition },
    exiting: { transform: `translateX(${extremeOffset})`, transition }
  }
}

export default makeSlideTransitionStyles
