import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.css';

import useGlobalState from '../src/store/useGlobalState';
import Context from './store/context';

import reportWebVitals from './reportWebVitals';

const Index = () => {
  const store = useGlobalState();

  return (
    <Context.Provider value={store} >
      <App />
    </Context.Provider>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
