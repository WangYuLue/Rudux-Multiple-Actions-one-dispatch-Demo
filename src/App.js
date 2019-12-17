import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import MainApp from './container/main/index'
import { createStore, applyMiddleware } from 'redux'
import showNumber from './store/reducer'
import { enableBatching, batchDispatchMiddleware } from 'redux-batched-actions';

let store = createStore(enableBatching(showNumber), applyMiddleware(batchDispatchMiddleware));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainApp />
      </div>
    </Provider>
  );
}

export default App;
