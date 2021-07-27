import Configuration from './Configuration'
import validate from './validation'

let configuration

const configure = (preferences) => {
  validate(preferences)

  configuration = new Configuration(preferences)
  return configuration
}

export default configure
