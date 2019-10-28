import React, {Component} from 'react';
import postData from './assets/products.json';
import './App.css';

class Produtos extends Component{
  render(){
    return(
      <div className="container">
        {postData.map((produto, index)=>{
          return (
            <div className="card">
            <img className="imagemProdutos" src={produto.images[0].imageUrl}></img>
            <p>{produto.name}</p>
            <p>{produto.Value}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Produtos;