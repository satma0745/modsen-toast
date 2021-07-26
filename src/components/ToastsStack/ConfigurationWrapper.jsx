import React from 'react'
import { ConfigurationProvider } from '@components/Configuration'
import ToastsStack from './Portal'

const ConfigurationWrapper = (props) => (
  <ConfigurationProvider {...props}>
    <ToastsStack />
  </ConfigurationProvider>
)

export default ConfigurationWrapper
