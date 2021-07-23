import { useTransition } from 'react-spring'

const translateX = (side) => {
  switch (side) {
    case 'right':
      return 'translateX(150%)'
    case 'left':
      return 'translateX(-150%)'
    case 'none':
      return 'translateX(0%)'
  }
}

const useSlidingTransition = (notifications, slideFrom, slideTo) => {
  return useTransition(notifications, {
    from: { opacity: 0, transform: translateX(slideFrom) },
    enter: { opacity: 1, transform: translateX('none') },
    leave: { opacity: 0, transform: translateX(slideTo) }
  })
}

export default useSlidingTransition
