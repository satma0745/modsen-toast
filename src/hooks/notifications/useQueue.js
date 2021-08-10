import { useCallback, useState } from 'react'

const useQueue = () => {
  const [queued, setQueued] = useState([])

  const enqueue = useCallback(
    (element) => {
      setQueued((oldQueued) => [...oldQueued, element])
    },
    [setQueued]
  )

  const dequeue = useCallback(() => {
    if (queued.length < 1) {
      return undefined
    }

    const element = queued[0]
    setQueued(queued.slice(1))

    return element
  }, [queued, setQueued])

  return [enqueue, dequeue]
}

export default useQueue
