import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Find all widget divs
// const WidgetDivs = document.querySelectorAll('.react_form_widget');

// Inject our React App into each
// WidgetDivs.forEach(Div => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App domElement={Div} />
//     </React.StrictMode>,
//     Div
//   );
// })


window.ReactWidget = {
  mount: () => {
    const el = document.getElementById('react_form_widget');
    ReactDOM.render(<App domElement={el}/>, el);
  },
  unmount: () => {
    const el = document.getElementById('react_form_widget');
    ReactDOM.unmountComponentAtNode(el);
  }
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
