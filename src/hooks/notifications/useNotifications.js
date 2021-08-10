import { useCallback, useEffect } from 'react'

import useConfiguration from '@hooks/configuration'
import { subscribeToNotifications } from '@data/notifications'

import create from './createNotification'
import useLatentStore from './useLatentStore'

const useNotifications = () => {
  const { notificationLifetime, transitionDuration, collapseDuration, limit } =
    useConfiguration()

  const notificationIdSelector = useCallback(({ id }) => id, [])
  const [notifications, show, hide] = useLatentStore({
    limit,
    delay: transitionDuration + collapseDuration,
    lifetime: notificationLifetime,
    keySelector: notificationIdSelector
  })

  useEffect(
    () =>
      subscribeToNotifications((notificationPayload) => {
        const notification = create(notificationPayload)

        const dismiss = () => hide(notification.id)

        const dismissableNotification = { ...notification, dismiss }
        show(dismissableNotification)
      }),
    [hide, notificationLifetime, show, transitionDuration]
  )

  return notifications
}

export default useNotifications
