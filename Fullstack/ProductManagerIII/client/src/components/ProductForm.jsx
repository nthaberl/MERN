import React, { useState } from "react";
import axios from 'axios';
import './ProductForm.css'

const ProductForm = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post('http://localhost:8000/api/products', newProduct)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        setTitle("");
        setPrice("");
        setDescription("");
    };

    return (
        <div className="uk-container-small" id="form-div">
            {/* {JSON.stringify(title)} {JSON.stringify(price)} {JSON.stringify(description)} */}
            <form onSubmit={handleSubmit}>
                <div className="uk-margin">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="uk-input uk-form-width-medium"/>
                </div>
                <div className="uk-margin">
                    <label>Price (in $): </label>
                    <input type="number" value={price} onChange={e => setPrice(e.target.value)} className="uk-input uk-form-width-medium"/>
                </div>
                <div className="uk-margin">
                    <label>Description: </label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="uk-input uk-form-width-medium"/>
                </div>
                <button className="uk-button uk-button-primary uk-button-small">Add a Product</button>
            </form>
        </div>
    )
};

export default ProductForm;