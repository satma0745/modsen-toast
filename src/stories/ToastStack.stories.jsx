import React from 'react'
import ToastStack from '../components/ToastStack'
import { NotificationContextProvider } from '../data'

export default {
  title: 'Components/ToastStack',
  component: ToastStack,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: '"Helvetica", "Arial", sans-serif',
          fontSize: '32px'
        }}
      >
        <Story />
      </div>
    ),
    (Story) => (
      <NotificationContextProvider
        stockNotifications={[
          { type: 'Info', text: 'Info toast example' },
          { type: 'Warning', text: 'Warning toast example' },
          { type: 'Error', text: 'Error toast example' },
          { type: 'Success', text: 'Success toast example' }
        ]}
      >
        <Story />
      </NotificationContextProvider>
    )
  ]
}

export const Default = () => <ToastStack />
Default.storyName = 'ToastStack'
