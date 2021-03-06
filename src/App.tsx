import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RootProvider from './contexts'
import Routes from './routes'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <RootProvider>
      <Router>
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </RootProvider>
  )
}

export default App
