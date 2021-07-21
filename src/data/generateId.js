let nextId = 1

const generateId = () => {
  const id = nextId
  nextId += 1
  return id
}

export default generateId
