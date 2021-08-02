import React from 'react'

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
        <Story />
      </div>
    )
  ]
}

const Template = (args) => (
  <Toast dismiss={() => {}} {...args} toastTypesConfig={toastTypesConfig} />
)

export const Info = Template.bind({})
Info.args = {
  type: 'Info',
  title: 'Info toast example',
  message: 'Info toast example'
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'Warning',
  title: 'Warning toast example',
  message: 'Warning toast example'
}

export const Error = Template.bind({})
Error.args = {
  type: 'Error',
  title: 'Error toast example',
  message: 'Error toast example'
}

export const Success = Template.bind({})
Success.args = {
  type: 'Success',
  title: 'Success toast example',
  message: 'Success toast example'
}
