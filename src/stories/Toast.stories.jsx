import React from 'react'
import Toast from '../components/Toast'

export default {
  title: 'Components/Toast',
  component: Toast
}

const Template = (args) => <Toast {...args} />

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
