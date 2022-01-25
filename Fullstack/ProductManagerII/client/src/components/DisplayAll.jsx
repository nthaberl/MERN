import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const DisplayAll = (props) => {
    const { prodData } = props; //passing in the props from app.js, letting us use functionality in this component

    return (
        <div>
            <h3>Available Products</h3>
            {prodData.map((products, idx) => {
                return (
                    <p key={products._id}>
                        <Link to={`/products/${products._id}`}>{products.title}</Link>
                    </p>
                )
            })}
        </div>
    )
}

export default DisplayAll;