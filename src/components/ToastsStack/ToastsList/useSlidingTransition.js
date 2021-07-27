import { useTransition } from 'react-spring'

const translateX = (side) => {
  switch (side) {
    case 'right':
      return 'translateX(150%)'
    case 'left':
      return 'translateX(-150%)'
    case 'none':
      return 'translateX(0%)'
    default:
      throw new Error('Unsupported side option.')
  }
}

const useSlidingTransition = (notifications, side) => {
  return useTransition(notifications, {
    from: { opacity: 0, transform: translateX(side) },
    enter: { opacity: 1, transform: translateX('none') },
    leave: { opacity: 0, transform: translateX(side) }
  })
}

export default useSlidingTransition
