import React from 'react'
import ToastCore from './ToastCore'

import ErrorIcon from './assets/error.svg'
import InfoIcon from './assets/info.svg'
import SuccessIcon from './assets/success.svg'
import WarningIcon from './assets/warning.svg'

const ErrorToast = (props) => (
  <ToastCore fgColor='#fff' bgColor='#E25837' icon={ErrorIcon} {...props} />
)

const InfoToast = (props) => (
  <ToastCore fgColor='#fff' bgColor='#9A40D3' icon={InfoIcon} {...props} />
)

const SuccessToast = (props) => (
  <ToastCore fgColor='#fff' bgColor='#37E29A' icon={SuccessIcon} {...props} />
)

const WarningToast = (props) => (
  <ToastCore fgColor='#000' bgColor='#F4E048' icon={WarningIcon} {...props} />
)

export { ErrorToast, InfoToast, SuccessToast, WarningToast }
