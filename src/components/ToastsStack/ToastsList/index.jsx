import React from 'react'

import useNotifications from './notifications'
import ToastsList from './Presentation'

const ToastsStateWrapper = () => {
  const notifications = useNotifications()
  return <ToastsList notifications={notifications} />
}

export default ToastsStateWrapper
