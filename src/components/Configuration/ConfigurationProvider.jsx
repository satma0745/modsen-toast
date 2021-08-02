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
  limit,
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
      toastTypesConfig,
      limit
    }),
    [
      position,
      parentNode,
      edgeDistance,
      internalSpacing,
      notificationLifetime,
      transition,
      toastTypesConfig,
      limit
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
  position: PropTypes.string.isRequired,
  parentNode: PropTypes.func.isRequired,
  edgeDistance: PropTypes.string.isRequired,
  internalSpacing: PropTypes.string.isRequired,
  notificationLifetime: PropTypes.number.isRequired,
  transition: PropTypes.string.isRequired,
  toastTypesConfig: PropTypes.object.isRequired,
  limit: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ConfigurationProvider
