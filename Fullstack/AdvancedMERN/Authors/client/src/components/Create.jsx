import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Create = () =>{

    const [name, setName] = useState("");

    //error state
    const [error, setErrors] = useState([]);

    //declaring history will let us reroute back to home after successful submit
    const history = useHistory();


    const handleSubmit = e => {
        e.preventDefault(); //letting react handle form submit

        //creating object from form inputs, even though there is only one field ヽ(￣～￣　)ノ
        const newAuthor = {
            name
        }

        //axios post request to DB
        axios.post('http://localhost:8000/api/authors', newAuthor)
        .then( res => {
            console.log(res.data);
            history.push("/");
        })
        .catch( err => {
            // console.log("error adding author");
            // console.log(err.response.data);
            const { errors } = err.response.data.error;
            const messages = Object.keys(errors).map( error => errors[error].message)
            console.log(messages);
            setErrors(messages);
        })

    }
    return (
        <div>
            <a href="/">Home</a> 
            <br/>
            Add a new author
            <br/>
            <form onSubmit={handleSubmit}>
                Name:
                <input type="text" onChange={ e => setName(e.target.value)} value={name}/>
                <br/>
                <button onClick={ () => history.push("/")}>Cancel</button> &nbsp;
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Create;