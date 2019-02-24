import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Pagination from './components/Pagination';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>People In Star Wars</h1>
          <Table />
          <Pagination />
        </header>
      </div>
    );
  }
}

export default App;
