import { useState } from 'react'

const useNotifications = () => {
  const [notifications, setNotifications] = useState([])
  const [nextNotificationId, setNextNotificationId] = useState(1)

  const generateId = () => {
    const id = nextNotificationId
    setNextNotificationId((nextId) => nextId + 1)

    return id
  }

  const sendNotification = (type, text) => {
    setNotifications((notifications) => [
      ...notifications,
      {
        id: generateId(),
        type,
        text
      }
    ])
  }

  return [notifications, sendNotification]
}

export default useNotifications
