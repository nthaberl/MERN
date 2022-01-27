import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';
import '../components/ProductForm.css'

const ProductDetail = (props) => {
    const [product, setProduct] = useState("");
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data)})
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (deletedId) => {
        axios.delete(`http://localhost:8000/api/products/${deletedId}`)
        .then( res => {
            console.log(res.data);
            console.log("deleted the item!")
            history.push("/") //routes back to main page after deleting item
        })
        .catch( err => console.log(err))
    }


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
                        <p> Is this accurate? If not, edit <Link to={`/${product.product._id}/edit`}>here</Link></p>
                        <p> Is it wrong beyond repair? <button onClick={() => deleteProduct(product.product._id)}>Delete it</button></p>
                        </div>
                    </div>)
                    :
                    <h1> try again </h1>
            }
        </div>
    )
}

export default ProductDetail;