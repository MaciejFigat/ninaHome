import React from 'react'
import Home from './screens/Home'
import { GlobalStyle } from './styles/GlobalStyles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Nav />
        <Route path='/'>
          <Home />
        </Route>
      </Router>
    </>
  )
}

export default App
