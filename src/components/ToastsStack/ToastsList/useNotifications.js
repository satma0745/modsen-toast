import { useCallback, useEffect } from 'react'

import { useConfiguration } from '@components/Configuration'
import { subscribeToNotifications } from '@data/notifications'

import create from './createNotification'
import useList from './useList'
import useQueue from './useQueue'

const useNotifications = () => {
  const [notifications, show, hide] = useList((notification) => notification.id)
  const [enqueue, dequeue] = useQueue()

  const { notificationLifetime, limit } = useConfiguration()

  const display = useCallback(
    (notification) => {
      const dismiss = () => hide(notification.id)

      show({ ...notification, dismiss })

      if (notificationLifetime) {
        setTimeout(dismiss, notificationLifetime)
      }
    },
    [show, hide, notificationLifetime]
  )

  useEffect(
    () =>
      subscribeToNotifications((payload) => {
        const notification = create(payload)

        if (limit && notifications.length >= limit) {
          enqueue(notification)
        } else {
          display(notification)
        }
      }),
    [display, enqueue, limit, notifications.length]
  )

  useEffect(() => {
    if (limit && notifications.length < limit) {
      const notification = dequeue()

      if (notification) {
        display(notification)
      }
    }
  }, [dequeue, display, limit, notifications.length])

  return notifications
}

export default useNotifications
