import React, {Component}from 'react';
import Cart from './assets/shopping-cart.svg';
import './App.css';


class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <a className="tituloHeader" href="#">Minha Loja</a>
        <nav>
          <ul className="menu">
            <li><a href="#">Perfumaria</a></li>
            <li><a href="#">Maquiagem</a></li>
            <li><a href="#">Cabelos</a></li>
            <li><a href="#">Infantil</a></li>
          </ul>
        </nav>
        <a href="#">
        <img  className="iconeCarrinho" src={Cart} alt="Icone de carrinho de compra"/>
        </a>
      </header>
    )
  }
}

export default Navbar;
