// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import queryString from 'query-string';

import Form from './components/Form';

function App(props) {
  console.log(props);
  console.log(window.location);
  const parsed = queryString.parse(window.location.search);
console.log(parsed);
const {color} = parsed;
console.log(color);
const subreddit = props.domElement.getAttribute("data-subreddit");
console.log(subreddit);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container mt-5">
      <Form color={color} />
    </div>
  );
}

export default App;
