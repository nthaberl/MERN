import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const DisplayAll = (props) => {
    const { prodData, setProdData } = props; //passing in the props from main.jsx, letting us use functionality in this component

const deleteProduct = (deletedId) => {
    axios.delete(`http://localhost:8000/api/products/${deletedId}`)
    .then( res => {
        console.log(res.data);
        console.log("deleted!")
        setProdData(prodData.filter( (product) => product._id !== deletedId))
    })
    .catch( err => console.log(err))
}

    return (
        <div>
            <h3>Available Products</h3>
            {prodData.map((products, idx) => {
                return (
                    <p key={products._id}>
                        <Link to={`/products/${products._id}`}>{products.title}</Link> &nbsp;
                        <button onClick={() => deleteProduct(products._id)}>Delete</button>
                    </p>
                )
            })}
        </div>
    )
}

export default DisplayAll;