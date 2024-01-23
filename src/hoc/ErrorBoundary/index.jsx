import React, { ErrorInfo, Component, ReactNode } from 'react'
import './index.css'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error.message }
  }

  componentDidCatch(error, info) {
    console.error('Возникла ошибка!', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className='wrapper-error'>
          <h1>Что-то пошло не так.</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
          <p>{this.state.error}</p>
        </section>
      )
    }
    return this.props.children
  }
}
