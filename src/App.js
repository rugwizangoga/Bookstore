import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Books from './Components/pages/Books';
import Categories from './Components/pages/Categories';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}

export default App;
