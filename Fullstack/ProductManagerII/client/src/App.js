import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import './App.css';


function App() {

  // const [prodData, setProdData] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:8000/api/products')
  //     .then(res => {
  //       // console.log(res.data.products); 
  //       setProdData(res.data.products) // since we're just getting back the array of PRODUCTS, setProdDate needs to be an array. If we were setting all of the data object, keep it as an object
  //     })
  //     .catch(err => console.log(err));
  // }, [])


  return (
    <div className='app'>
    <BrowserRouter>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
