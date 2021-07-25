import { useCallback, useEffect, useState } from 'react'
import { subscribeToNotifications } from '@data/notifications'

const makeIdGenerator = () => {
  let nextId = 1
  const generateId = () => {
    const id = nextId
    nextId += 1
    return id
  }
  return generateId
}

const useNotifications = ({ notificationLifetime } = {}) => {
  const [notifications, setNotifications] = useState([])
  const [generateId] = useState(makeIdGenerator)

  const addNotification = useCallback(
    (notification) => {
      setNotifications((oldNotifications) => [
        ...oldNotifications,
        notification
      ])
    },
    [setNotifications]
  )

  const removeNotification = useCallback(
    (notificationId) => {
      setNotifications((oldNotifications) =>
        oldNotifications.filter(({ id }) => id !== notificationId)
      )
    },
    [setNotifications]
  )

  useEffect(
    () =>
      subscribeToNotifications((newNotification) => {
        const id = generateId()
        const notification = {
          ...newNotification,
          id,
          dismiss: () => {
            removeNotification(id)
          }
        }

        addNotification(notification)

        if (notificationLifetime) {
          setTimeout(() => {
            removeNotification(notification.id)
          }, notificationLifetime)
        }
      }),
    [addNotification, removeNotification, notificationLifetime]
  )

  return notifications
}

export default useNotifications
