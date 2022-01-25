import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
    const [prodData, setProdData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                // console.log(res.data.products); 
                setProdData(res.data.products) // since we're just getting back the array of PRODUCTS, setProdDate needs to be an array. If we were setting all of the data object, keep it as an object
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="App">
            <h1> Products Manager</h1>
            <ProductForm />
            <hr />
            <DisplayAll prodData={prodData} />
        </div>
    );
}

export default Main;