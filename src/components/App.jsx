import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import Work from './Work'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/work" exact component={Work} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  )
}

export default App
