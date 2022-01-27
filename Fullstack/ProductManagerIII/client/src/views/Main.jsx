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
                setProdData(res.data.products) // storing data of all of our products into state
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="App">
            <h1> Products Manager</h1>
            <ProductForm />
            <hr />
            {/* pass product data as a prop into display component */}
            <DisplayAll prodData={prodData} setProdData={setProdData}/> 
        </div>
    );
}

export default Main;