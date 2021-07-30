import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import configure from '@data/configuration'
import ConfigurationContext from './ConfigurationContext'

const ConfigurationProvider = ({ preferences, children }) => {
  const [configuration, setConfiguration] = useState(configure(preferences))

  useEffect(() => {
    setConfiguration(configure(preferences))
  }, [preferences])

  return (
    <ConfigurationContext.Provider value={configuration}>
      {children}
    </ConfigurationContext.Provider>
  )
}
ConfigurationProvider.propTypes = {
  preferences: PropTypes.shape({
    position: PropTypes.oneOf([
      'top-right',
      'bottom-right',
      'bottom-left',
      'top-left'
    ]).isRequired,
    parentNode: PropTypes.func.isRequired,
    edgeDistance: PropTypes.string.isRequired,
    internalSpacing: PropTypes.string.isRequired,
    notificationLifetime: PropTypes.number.isRequired
  }).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ConfigurationProvider
