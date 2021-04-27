import React from 'react'
import Home from './screens/Home'
import Contact from './screens/Contact'
import { GlobalStyle } from './styles/GlobalStyles'
import { Switch, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Switch location={location} key={location.key}>
        <Route exact path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </>
  )
}

export default App
