class Configuration {
  #position = 'top-right'
  #parentNode = document.querySelector('#root')
  #edgeDistance = '2rem'
  #internalSpacing = '1rem'
  #notificationLifetime = 7000
  #toastTypesConfig = {}

  constructor({
    position,
    parentNode,
    edgeDistance,
    internalSpacing,
    notificationLifetime,
    toastTypesConfig
  } = {}) {
    this.#toastTypesConfig = toastTypesConfig ?? this.#toastTypesConfig
    this.#position = position ?? this.#position
    this.#parentNode = parentNode ?? this.#parentNode
    this.#edgeDistance = edgeDistance ?? this.#edgeDistance
    this.#internalSpacing = internalSpacing ?? this.#internalSpacing
    this.#notificationLifetime =
      notificationLifetime ?? this.#notificationLifetime
  }

  get verticalPosition() {
    return this.#position.split('-')[0]
  }

  get horizontalPosition() {
    return this.#position.split('-')[1]
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

  get toastTypesConfig() {
    return this.#toastTypesConfig
  }
}

export default Configuration
