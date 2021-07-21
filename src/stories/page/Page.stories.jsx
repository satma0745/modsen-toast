import React from 'react'
import Page from './Page'

import { NotificationContextProvider } from '../../data'

export default {
  title: 'Example/Page',
  component: Page
}

export const PageWithNotifications = () => (
  <NotificationContextProvider>
    <Page />
  </NotificationContextProvider>
)
