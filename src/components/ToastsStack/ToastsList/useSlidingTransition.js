import { useTransition } from 'react-spring'

const getDirection = (side) => {
  switch (side) {
    case 'right':
      return 1
    case 'left':
      return -1
    default:
      throw new Error('Unsupported side option.')
  }
}

const useSlidingTransition = (notifications, side) => {
  const direction = getDirection(side)

  return useTransition(notifications, {
    from: { opacity: 0, transform: `translateX(${150 * direction}%)` },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: `translateX(${150 * direction}%)` }
  })
}

export default useSlidingTransition
