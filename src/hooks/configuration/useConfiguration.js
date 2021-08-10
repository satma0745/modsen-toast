import { useContext } from 'react'
import { ConfigurationContext } from '@components/Configuration'

const useConfiguration = () => {
  return useContext(ConfigurationContext)
}

export default useConfiguration
