class Configuration {
  #position = 'top-right'
  #parentNode = document.querySelector('#root')
  #edgeDistance = '2rem'
  #internalSpacing = '1rem'
  #notificationLifetime = 7000

  configure({
    position,
    parentNode,
    edgeDistance,
    internalSpacing,
    notificationLifetime
  } = {}) {
    this.#position = position ?? this.#position
    this.#parentNode = parentNode ?? this.#parentNode
    this.#edgeDistance = edgeDistance ?? this.#edgeDistance
    this.#internalSpacing = internalSpacing ?? this.#internalSpacing
    this.#notificationLifetime =
      notificationLifetime ?? this.#notificationLifetime
  }

  get position() {
    return this.#position
  }

  get slidingSide() {
    return this.#position.split('-')[1]
  }

  get direction() {
    switch (this.#position.split('-')[0]) {
      case 'top':
        return 'column'
      case 'botoom':
        return 'column-reverse'
    }
  }

  get parentNode() {
    return this.#parentNode
  }

  get edgeDistance() {
    return this.#edgeDistance
  }

  get internalSpacing() {
    return this.#internalSpacing
  }

  get notificationLifetime() {
    return this.#notificationLifetime
  }
}

let configuration
const configure = (preferences) => {
  if (!configuration) {
    configuration = new Configuration()
  }

  configuration.configure(preferences)
  return configuration
}

export default configure
