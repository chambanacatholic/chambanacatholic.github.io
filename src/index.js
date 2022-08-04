import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AboutUs from './views/about-us'
import Community from './views/community'
import Home from './views/home'
import Mission from './views/mission'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={AboutUs} path="/about-us" />
        <Route exact component={Community} path="/community" />
        <Route exact component={Home} path="/" />
        <Route exact component={Mission} path="/mission" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
