import React from 'react'

import ToastsStack from '@components/ToastsStack'

import toastTypesConfig from '../toastTypesConfig'
import Page from './Page'

const storyConfiguration = {
  title: 'Example/NotificationsPage',
  component: Page,
  argTypes: {
    position: {
      options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
      control: { type: 'select' }
    },
    transition: {
      options: ['slide', 'fade', 'zoom'],
      control: { type: 'select' }
    }
  }
}

const Example = ({
  position,
  edgeDistance,
  internalSpacing,
  transition,
  notificationLifetime,
  ...props
}) => (
  <Page>
    <ToastsStack
      {...props}
      preferences={{
        position,
        edgeDistance,
        internalSpacing,
        notificationLifetime,
        transition,
        toastTypesConfig
      }}
    />
  </Page>
)
Example.storyName = 'NotificationsPage'
Example.args = {
  edgeDistance: '2rem',
  internalSpacing: '1rem',
  notificationLifetime: 3000,
  position: 'top-left',
  transition: 'slide'
}

export default storyConfiguration
export { Example }
