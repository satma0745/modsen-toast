import { useState } from 'react'

const useList = (keySelector) => {
  const [elements, setElements] = useState([])

  const add = (element) => {
    setElements((oldElements) => [...oldElements, element])
  }

  const remove = (elementKeyToDelete) => {
    setElements((oldElements) =>
      oldElements.filter((element) => {
        const elementKey = keySelector(element)
        return elementKey !== elementKeyToDelete
      })
    )
  }

  return [elements, add, remove]
}

export default useList
