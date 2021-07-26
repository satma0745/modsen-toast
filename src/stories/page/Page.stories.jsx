import React from 'react'

import ToastsStack from '@components/ToastsStack'
import Page from './Page'

const storyConfiguration = {
  title: 'Example/NotificationsPage',
  component: Page,
  argTypes: {
    position: {
      options: ['top-right', 'bottom-right', 'bottom-left', 'top-left'],
      control: { type: 'select' }
    }
  }
}

const Example = ({
  position,
  edgeDistance,
  internalSpacing,
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
        notificationLifetime
      }}
    />
  </Page>
)
Example.storyName = 'NotificationsPage'
Example.args = {
  position: 'top-right',
  edgeDistance: '2rem',
  internalSpacing: '1rem',
  notificationLifetime: 7000
}

export default storyConfiguration
export { Example }
