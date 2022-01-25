import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import '../components/ProductForm.css'

const ProductDetail = (props) => {
    const [product, setProduct] = useState("");
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)})
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="uk-container-small" id="product-detail">
            {
                product ? (
                    <div >
                        <h1>Product Title: {product.product.title}</h1>
                            <hr/>
                            <div>
                        <p>Product Description: {product.product.description}</p>
                        <p>Product Price: {product.product.price}</p>
                        </div>
                    </div>)
                    :
                    (<h1> try again </h1>)
            }
        </div>
    )
}

export default ProductDetail;