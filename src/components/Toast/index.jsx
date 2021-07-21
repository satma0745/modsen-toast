import React from 'react'

import { ErrorToast, InfoToast, SuccessToast, WarningToast } from './kinds'

const Toast = ({ type, ...props }) => {
  switch (type) {
    case 'Error':
      return <ErrorToast {...props} />
    case 'Info':
      return <InfoToast {...props} />
    case 'Success':
      return <SuccessToast {...props} />
    case 'Warning':
      return <WarningToast {...props} />
  }
}

export default Toast
