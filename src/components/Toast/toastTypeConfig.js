import ErrorIcon from './assets/error.svg'
import InfoIcon from './assets/info.svg'
import SuccessIcon from './assets/success.svg'
import WarningIcon from './assets/warning.svg'

const toastTypesConfig = {
  Error: {
    fgColor: '#fff',
    bgColor: '#E25837',
    icon: ErrorIcon
  },
  Info: {
    fgColor: '#fff',
    bgColor: '#9A40D3',
    icon: InfoIcon
  },
  Success: {
    fgColor: '#fff',
    bgColor: '#37E29A',
    icon: SuccessIcon
  },
  Warning: {
    fgColor: '#000',
    bgColor: '#F4E048',
    icon: WarningIcon
  }
}

const toastTypeConfig = (toastType) => {
  return toastTypesConfig[toastType]
}

export default toastTypeConfig
