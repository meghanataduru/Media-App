import React from 'react';
import './App.css';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LatestNewsWidget from './Components/LatestNewsWidget'

function App() {
  return (
    <div>
      <LatestNewsWidget />
    </div>
  )
}

export default App;
