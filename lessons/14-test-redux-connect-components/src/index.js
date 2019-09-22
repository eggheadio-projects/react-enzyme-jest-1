import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'
import Form from './Form'
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
