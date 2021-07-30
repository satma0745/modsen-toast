class Configuration {
  #position
  #parentNode
  #edgeDistance
  #internalSpacing
  #notificationLifetime
  #transition
  #toastTypesConfig

  constructor({
    position,
    parentNode,
    edgeDistance,
    internalSpacing,
    notificationLifetime,
    transition,
    toastTypesConfig
  } = {}) {
    this.#toastTypesConfig = toastTypesConfig
    this.#position = position
    this.#parentNode = parentNode
    this.#edgeDistance = edgeDistance
    this.#internalSpacing = internalSpacing
    this.#transition = transition
    this.#notificationLifetime = notificationLifetime
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
}

export default Configuration
