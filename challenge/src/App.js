import React, {Component}from 'react';
import Navbar from './Navbar';
import TituloProdutos from './TituloProdutos';
import Produtos from './Produtos';
import './App.css';

function App(){
  return(
    <div className="app">
      <Navbar />
      <TituloProdutos />
      <Produtos />
    </div>
  )
}

export default App;
