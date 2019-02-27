import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import Table from './components/Table';
import Pagination from './components/Pagination';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1>People In Star Wars</h1>
          </header>
          <main>
            <Table />
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
