import { useCallback, useEffect, useState } from 'react'
import useQueue from './useQueue'

const useLatentStore = ({ limit, delay, lifetime, keySelector }) => {
  const [showedCount, setShowedCount] = useState(0)
  const [showed, setShowed] = useState([])
  const [enqueue, dequeue] = useQueue()

  const hide = useCallback(
    (key) => {
      setShowed((oldShowed) => {
        return oldShowed.filter((element) => keySelector(element) !== key)
      })

      setTimeout(() => {
        setShowedCount((oldShowedCount) => oldShowedCount - 1)
      }, delay)
    },
    [setShowed, setShowedCount, delay, keySelector]
  )

  const display = useCallback(
    (element) => {
      setShowed((oldShowed) => [...oldShowed, element])
      setShowedCount((oldShowedCount) => oldShowedCount + 1)
      setTimeout(() => {
        hide(keySelector(element))
      }, lifetime)
    },
    [setShowed, setShowedCount, hide, lifetime, keySelector]
  )

  useEffect(() => {
    if (!limit || showedCount < limit) {
      const element = dequeue()
      if (element) {
        display(element)
      }
    }
  }, [showedCount, dequeue, limit, display])

  return [showed, enqueue, hide]
}

export default useLatentStore
