import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat";

import './index.css';
import App from './App';
import firebaseConfig from "./utils/firebaseConfig";

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                  <App />
              </PersistGate>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
