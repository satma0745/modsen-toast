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
  limit,
  ...props
}) => (
  <Page>
    <ToastsStack
      {...props}
      position={position}
      edgeDistance={edgeDistance}
      internalSpacing={internalSpacing}
      notificationLifetime={notificationLifetime}
      transition={transition}
      toastTypesConfig={toastTypesConfig}
      limit={limit}
    />
  </Page>
)
Example.storyName = 'NotificationsPage'
Example.args = {
  edgeDistance: '2rem',
  internalSpacing: '1rem',
  notificationLifetime: 3000,
  position: 'top-left',
  transition: 'slide',
  limit: 3
}

export default storyConfiguration
export { Example }
