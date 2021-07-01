import React,{useState} from'react';
import Cart from './components/Cart';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const fruitList = ['apple','orange','mago','pineapple'];
  const [cartList,setCartList] = useState(['']);
  function addToCart(element){
    setCartList([...cartList,element])
    console.log(cartList);
  }
  return (
<Router>
        <nav>
          <ul>
            <h1>Routes</h1>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <p>{`the items in cart is ${cartList.length-1}`}</p>
          <hr/>
        </nav>
        <Switch>
        <Route path="/cart">
        <Cart array={cartList}/>
        </Route>
        <Route path="/products">
        <Products array={fruitList} handleAddtoCart={addToCart}/>
        </Route>
        </Switch>
</Router>
     );
}

export default App;
