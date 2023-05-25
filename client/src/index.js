import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore} from 'redux';

import {Provider} from "react-redux"
import {composeWithDevTools} from "redux-devtools-extension"

import rootReducer from './reudcers';



// create redux store 
const store =createStore(rootReducer,composeWithDevTools( ));

// provide redux store to the entire app

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
