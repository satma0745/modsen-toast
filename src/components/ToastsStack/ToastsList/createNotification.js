let nextId = 1

const generateId = () => {
  const id = nextId
  nextId += 1

  return id
}

const createNotification = (payload) => ({
  id: generateId(),
  ...payload
})

export default createNotification
