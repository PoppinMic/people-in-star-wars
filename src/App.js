import React, { Component } from 'react';

import Table from './components/Table';
import { GlobalStyle } from './components/styles/global';
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <header className="App-header">
          <h1>People In Star Wars</h1>
        </header>
        <main>
          <Table />
        </main>
      </div>
    );
  }
}

export default App;
