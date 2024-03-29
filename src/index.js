import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App'
import { Provider } from 'react-redux'
import store from './components/store/index'
import './firebase'
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)


