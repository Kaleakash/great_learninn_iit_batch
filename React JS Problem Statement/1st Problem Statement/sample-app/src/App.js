import logo from './logo.svg';
import './App.css';
import data from './data';
import Main from './components/Main';
import { useState } from 'react';
import Basket from './components/Basket';

function App() {
  const {products} = data;    //de-struture 
  const [cartItems,setCartItems]=useState([]);// array 
 // const [n,setN]=useState();    // string 
  const onAdd = (product)=> {
   // alert("Event Generated..");
   // console.log(product);
    let exists = cartItems.find(item=>item.id === product.id);  
    if(exists){
      setCartItems(cartItems.map(item=>item.id === product.id ?{...exists,qty:exists.qty+1} :item));
    }else {
      setCartItems([...cartItems,{...product,qty:1}]);   // if item not present we will add product with qty 1
    }
  }
  const onRemove = (product)=> {
    let exists = cartItems.find(item=>item.id === product.id);  
    if(exists.qty==1){
      setCartItems(cartItems.filter(item=>item.id !== product.id));  
    }else {
      setCartItems(cartItems.map(item=>item.id === product.id ?{...exists,qty:exists.qty-1} :item));
    }
  }
  const checkout=()=> {
    setCartItems(item=>item=[]);
    alert("Your order placed successfully")
  }
  return (
    <div className='container'>
       
      <h2>Product List</h2>
      <div className='row'>
      <div className='col-6'>
        <Main products={products} onAdd={onAdd}></Main>
      </div>
      <div className='col-4'>
        <Basket cartDetails={cartItems}
        onAdd={onAdd}
        onRemove={onRemove} checkout={checkout}></Basket>
      </div>
      </div>     
    
    </div>
  );
}

export default App;
