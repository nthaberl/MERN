import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';
import '../components/ProductForm.css'

const UpdateForm = (props) => {

    let history = useHistory();

    const {id} = useParams();

    const [title, setTitle] = useState({});
    const [price, setPrice] = useState({});
    const [description, setDescription] = useState({});

    //FIRST we need to get the info for this product
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then( res => {
            console.log(res.data.product);
            setTitle(res.data.product.title);
            setPrice(res.data.product.price);
            setDescription(res.data.product.description);
        })
        .catch( err => {
            console.log(err)
        })
    }, [id])


    const handleUpdate = e => {
        e.preventDefault();
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.put(`http://localhost:8000/api/products/${id}`, updatedProduct)
            .then(res => {
                console.log(res.data);
                console.log("successfully updated item")
                history.push("/");
            })
            .catch(err => {
                console.log("could not update");
                console.log(err)
            });
    };

    return (
        <div className="uk-container-small" id="form-div">
            <h2>Update</h2>
            {/* {JSON.stringify(title)} {JSON.stringify(price)} {JSON.stringify(description)} */}
            <form onSubmit={handleUpdate}>
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
                <button className="uk-button uk-button-primary uk-button-small">Update</button>
            </form>
        </div>
    )
};

export default UpdateForm;