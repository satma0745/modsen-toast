import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import configure from '@data/configuration'
import ConfigurationContext from './ConfigurationContext'

const ConfigurationProvider = ({ preferences, children }) => {
  const [configuration, setConfiguration] = useState(configure())

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
    ]),
    parentNode: PropTypes.instanceOf(Element),
    edgeDistance: PropTypes.string,
    internalSpacing: PropTypes.string,
    notificationLifetime: PropTypes.number
  }),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
ConfigurationProvider.defaultProps = {
  preferences: {}
}

export default ConfigurationProvider
