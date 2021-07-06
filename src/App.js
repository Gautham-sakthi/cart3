import React,{useState,useEffect} from'react';
import Cart from './components/Cart';
import Products from './components/Products';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const data = [{name:'apple',price:100},{name:'orange',price:50},{name:'pineapple',price:30}]


function App() {

  const [cartList,setCartList] = useState([]);
  const [productList,setProductList] = useState([]);

useEffect(() => {
  let newData;
      if(data.length){
        newData = data.map(el=> { 
          return {...el,count:+1}  
        } )
        setProductList(newData) 
      } 
}, [data])

  function addOneToCart(element){
    //console.log(element);
    const exist = cartList.find((el)=> el.name===element.name)
    console.log('existing item',exist)
    if(exist){
      setCartList(
        cartList.map((x)=> 
        x.name === element.name ? {...exist, count:x.count+1} : x
        )
      )
    }else{
      setCartList([...cartList,{...element}])
    }
    console.log('added items in cartlist:',cartList);
  }

  function removeOnefromCart(element){
    console.log(element)
    const exist = cartList.find((el)=> el.name===element.name)
    console.log('existing item',exist)
    if(exist.count===1){
      setCartList(
        cartList.filter((x)=>x.name!==element.name )
      )
    }else{
      setCartList(
        cartList.map((x)=> 
        x.name === element.name ? {...exist, count:x.count-1} : x
        )
      )
      
    }
    console.log('added items in cartlist:',cartList);

  }

  
  
  
  return (
<Router>
        <nav>
          <ul>
            <h1>Routes</h1>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/">Products</Link></li>
          </ul>
          <p>{`the items in cart is ${cartList.length}`}</p>
          <hr/>
        </nav>
        <Switch>
        <Route path="/cart">
        <Cart array={cartList} handleRemove={removeOnefromCart} handleAdd={addOneToCart}/>
        </Route>
        <Route exact path="/">
        <Products array={productList} handleAddtoCart={addOneToCart} settingProduct={setProductList}/>
        </Route> 
        </Switch>
</Router>
     );
}

export default App;
