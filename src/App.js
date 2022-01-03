// import logo from './logo.svg';
// import './App.css';
import React, { useEffect } from 'react';
import queryString from 'query-string';
import { ThemeProvider } from "styled-components";

import Form from './components/Form';
import * as themes from './theme/schema.json';
import img from './images/easyfinanciere.jpg'

function App(props) {
  console.log(props);
  console.log(window.location);
  const parsed = queryString.parse(window.location.search);
  console.log(parsed);
  const themeContent = props.domElement.getAttribute("data-theme");
  console.log(themeContent);
  console.log(themes);
  const theme = themes.default.data[themeContent];
  console.log(theme);

  // useEffect(() => {
  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json));
  // },[])

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
      <ThemeProvider theme={ theme }>
        <Form />
        <img src={img} className="App-logo" alt="logo" />
      </ThemeProvider>
    </div>
  );
}

export default App;
