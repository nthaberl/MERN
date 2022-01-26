import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import Main from './views/Main';
import ProductDetail from './views/ProductDetail';
import './App.css';
import UpdateForm from './views/UpdateForm';


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

    {/* READ ONE */}
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>

        {/* READ ALL */}
        <Route exact path="/">
          <Main />
        </Route>

        {/* UPDATE */}
        <Route exact path="/:id/edit">
          <UpdateForm />
        </Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
