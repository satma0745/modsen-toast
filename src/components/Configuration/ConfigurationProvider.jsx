import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import configure from '@data/configuration'
import ConfigurationContext from './ConfigurationContext'

const ConfigurationProvider = ({
  position,
  parentNode,
  edgeDistance,
  internalSpacing,
  notificationLifetime,
  transition,
  toastTypesConfig,
  children
}) => {
  const preferences = useMemo(
    () => ({
      position,
      parentNode,
      edgeDistance,
      internalSpacing,
      notificationLifetime,
      transition,
      toastTypesConfig
    }),
    [
      position,
      parentNode,
      edgeDistance,
      internalSpacing,
      notificationLifetime,
      transition,
      toastTypesConfig
    ]
  )

  const [configuration, setConfiguration] = useState(
    configure({ ...preferences })
  )

  useEffect(() => {
    setConfiguration(configure({ ...preferences }))
  }, [preferences])

  return (
    <ConfigurationContext.Provider value={configuration}>
      {children}
    </ConfigurationContext.Provider>
  )
}
ConfigurationProvider.propTypes = {
  position: PropTypes.string,
  parentNode: PropTypes.func,
  edgeDistance: PropTypes.string,
  internalSpacing: PropTypes.string,
  notificationLifetime: PropTypes.number,
  transition: PropTypes.string,
  toastTypesConfig: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
ConfigurationProvider.defaultProps = {
  position: 'top-left',
  parentNode: () => document.querySelector('#root'),
  edgeDistance: '2rem',
  internalSpacing: '1rem',
  notificationLifetime: 3000,
  transition: 'slide',
  toastTypesConfig: {}
}

export default ConfigurationProvider
