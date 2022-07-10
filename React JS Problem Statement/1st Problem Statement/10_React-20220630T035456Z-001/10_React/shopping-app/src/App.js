import React from 'react'
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import data from './data';

function App() {
let {products} = data;      // de-struture 
  return (
    <div className="App">
      <h2>Shopping Cart Application</h2>
      <Main products={products}></Main>
    </div>
  );
}

export default App;
