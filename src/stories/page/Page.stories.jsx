import React from 'react'
import { NotificationContextProvider } from '@components/NotificationContext'
import Page from './Page'

export default {
  title: 'Example/NotificationsPage',
  component: Page,
  argTypes: {
    position: {
      options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
      control: { type: 'select' }
    }
  }
}

export const Default = (props) => (
  <NotificationContextProvider>
    <Page parentNode={document.querySelector('#root')} {...props} />
  </NotificationContextProvider>
)
Default.storyName = 'NotificationsPage'
Default.args = {
  position: 'top-right',
  edgeDistance: '2rem',
  internalSpacing: '1rem'
}
