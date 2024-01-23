import { Component } from 'react'
import Search from './components/Search'
import { ErrorBoundary } from './hoc/ErrorBoundary'

class App extends Component {
  render() {

    return (
      <ErrorBoundary>
        <Search/>
      </ErrorBoundary>
    )
  }
}

export default App
