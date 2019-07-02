import React from 'react';
import Logs from './components/Logs';
// import './App.css';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
