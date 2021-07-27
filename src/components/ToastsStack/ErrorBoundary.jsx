import React, { Component } from 'react'
import ConfigurationWrapper from './ConfigurationWrapper'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <p>Toasts: Something went wrong 😢</p>
    }

    return <ConfigurationWrapper {...this.props} />
  }
}

export default ErrorBoundary
