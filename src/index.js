import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Textpage from './views/textpage'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Textpage} exact path="/textpage" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
