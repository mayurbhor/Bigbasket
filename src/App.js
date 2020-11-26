import React from 'react';
//import Home from './Components/Home';
//import Cart from './Components/Cart';
//import Features from './Components/Features';
import './App.css';
import data from "./data.json";
import Products from './Components/Products';
import Filter from './Components/Filter';
import Cart from './Components/Cart';
import store from "./store";
import { Provider } from 'react-redux';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// /cjs/react-router-dom.min
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data.products,
      cartItems: localStorage.getItem("cartItems")?
       JSON.parse(localStorage.getItem("cartItems")) :[],
      type: "",
      sort: "",
    };
  }
  createOrder = (order) => {
    alert("Need to save order for " + order.name);
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({ 
      cartItems: cartItems.filter(x=>x._id !== product._id) 
    });
    localStorage.setItem("cartItems",JSON.stringify(cartItems.filter(x=>x._id !== product._id)));
  }
  addToCart =(product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false; 
    cartItems.forEach(item =>{
      if(item._id === product._id){
        item.count++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({ ...product, count: 1});
    }
    this.setState({cartItems});
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
  }
  sortProducts = (event) => {
    const sort= event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sort,
      products: this.state.products.sort((a,b) =>(
        sort === "lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "highest"?
        ((a.price < b.price)? 1:-1):
        ((a._id < b._id)? 1: -1)
      ))
    }));
  }
  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({type:event.target.value, product:data.product});
    }else
    {
      this.setState({
      type: event.target.value,
      products: data.products.filter(product => product.type.indexOf(event.target.value)>=0)
      })
    }
  };
  render(){
    return (
      <Provider store={store}>
      <div className="grid-container">
        <header>
          <a href="/">BigBasket Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
              type={this.state.type}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}
              ></Filter>
              <Products 
              products={this.state.products} 
              addToCart={this.addToCart}></Products>
            </div>
            <div className="sidebar">
              <Cart 
                cartItems={this.state.cartItems} 
                removeFromCart={this.removeFromCart}
                createOrder={this.createOrder}
              />
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
      </Provider>
    );
  }
  
}

export default App;