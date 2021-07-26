import { useContext } from 'react'
import ConfigurationContext from './ConfigurationContext'

const useConfiguration = () => {
  return useContext(ConfigurationContext)
}

export default useConfiguration
