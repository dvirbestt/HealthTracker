import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {UserReducer} from "./Redux/UserReducer.jsx";
import {createStore} from "redux";

const userStore = createStore(UserReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={userStore}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>
  ,
)
