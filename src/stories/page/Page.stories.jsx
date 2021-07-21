import React from 'react'
import Page from './Page'

import { NotificationContextProvider } from '../../data'

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    (Story) => (
      <article style={{ fontFamily: '"Helvetica", "Arial", sans-serif' }}>
        <Story />
      </article>
    )
  ]
}

export const PageWithNotifications = () => (
  <NotificationContextProvider>
    <Page />
  </NotificationContextProvider>
)
