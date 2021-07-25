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

const SingleStackExample = (props) => (
  <Page>
    <ToastsStack {...props} />
  </Page>
)
SingleStackExample.args = {
  position: 'top-right',
  edgeDistance: '2rem',
  internalSpacing: '1rem',
  notificationLifetime: 7000
}

const MultiStackExample = () => (
  <Page>
    <ToastsStack
      parentNode={document.querySelector('#root')}
      position="top-right"
      edgeDistance="2rem"
      internalSpacing="1rem"
      notificationLifetime={7000}
    />

    <ToastsStack
      parentNode={document.querySelector('#root')}
      position="bottom-left"
      edgeDistance="2rem"
      internalSpacing="1rem"
      notificationLifetime={3000}
    />
  </Page>
)

export default storyConfiguration
export { SingleStackExample, MultiStackExample }
