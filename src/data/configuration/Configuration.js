class Configuration {
  #position
  #parentNode
  #edgeDistance
  #internalSpacing
  #notificationLifetime
  #transition
  #toastTypesConfig
  #limit

  constructor({
    position,
    parentNode,
    edgeDistance,
    internalSpacing,
    notificationLifetime,
    transition,
    toastTypesConfig,
    limit
  } = {}) {
    this.#toastTypesConfig = toastTypesConfig
    this.#position = position
    this.#parentNode = parentNode
    this.#edgeDistance = edgeDistance
    this.#internalSpacing = internalSpacing
    this.#transition = transition
    this.#notificationLifetime = notificationLifetime
    this.#limit = limit
  }

  get verticalPosition() {
    return this.#position.split('-')[0]
  }

  get horizontalPosition() {
    return this.#position.split('-')[1]
  }

  get parentNode() {
    return this.#parentNode()
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

  get transition() {
    return this.#transition
  }

  get toastTypesConfig() {
    return this.#toastTypesConfig
  }

  get limit() {
    return this.#limit
  }
}

export default Configuration
