import React from 'react'

import { Helmet } from 'react-helmet'

import './textpage.css'

const Textpage = (props) => {
  return (
    <div className="textpage-container">
      <Helmet>
        <title>textpage - Sparkling Hot Dotterel</title>
        <meta property="og:title" content="textpage - Sparkling Hot Dotterel" />
      </Helmet>
      <span>h</span>
      <div className="textpage-container1">
        <h1>Heading</h1>
      </div>
    </div>
  )
}

export default Textpage
