import { useState } from 'react'

const useQueue = () => {
  const [elements, setElements] = useState([])

  const enqueue = (element) => {
    setElements((oldElements) => [...oldElements, element])
  }

  const dequeue = () => {
    if (elements.length < 1) {
      return false
    }

    const element = elements[0]
    setElements((oldElements) => oldElements.slice(1))

    return element
  }

  return [enqueue, dequeue]
}

export default useQueue
