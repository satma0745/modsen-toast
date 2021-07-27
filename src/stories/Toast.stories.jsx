import React from 'react'

import { ConfigurationProvider } from '@components/Configuration'
import Toast from '@components/Toast'

import toastTypesConfig from './toastTypesConfig'

export default {
  title: 'Components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: '"Helvetica", "Arial", sans-serif',
          fontSize: '16px'
        }}
      >
        <ConfigurationProvider preferences={{ toastTypesConfig }}>
          <Story />
        </ConfigurationProvider>
      </div>
    )
  ]
}

const Template = (args) => <Toast dismiss={() => {}} {...args} />

export const Info = Template.bind({})
Info.args = {
  type: 'Info',
  text: 'Info toast example'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'Warning',
  text: 'Warning toast example'
}

export const Error = Template.bind({})
Error.args = {
  type: 'Error',
  text: 'Error toast example'
}

export const Success = Template.bind({})
Success.args = {
  type: 'Success',
  text: 'Success toast example'
}
