import React from 'react'
import Page from './Page'

import { NotificationContextProvider } from '../../data'

export default {
  title: 'Example/NotificationsPage',
  component: Page,
  argTypes: {
    toastsPosition: {
      options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
      control: { type: 'select' }
    }
  }
}

export const Default = (props) => (
  <NotificationContextProvider>
    <Page {...props} />
  </NotificationContextProvider>
)
Default.storyName = 'NotificationsPage'
Default.args = {
  toastsPosition: 'top-right'
}
