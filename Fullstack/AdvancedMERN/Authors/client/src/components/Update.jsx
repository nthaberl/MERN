import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {

    const [name, setName] = useState("");

    //set error state
    const [error, setErrors] = useState([]);

    const {id} = useParams();

    //declaring history will let us reroute back to home after successful submit
    const history = useHistory();

    //getting READ ONE with axios from DB
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then( res => {
            console.log(res.data.name);
            setName(res.data.name);
        })
        .catch( err => {
            console.log(err);
        })
    }, [])

    const updateAuthor = e => {
        e.preventDefault(); //letting react handle form submit

        //creating object from form inputs, even though there is only one field ヽ(￣～￣　)ノ
        const updatedAuthor = {
            name
        }

        //axios put request to DB
        axios.put(`http://localhost:8000/api/authors/${id}`, updatedAuthor)
            .then(res => {
                console.log(res.data);
                history.push("/");
            })
            .catch(err => {
                // console.log("error adding author");
                // console.log(err.response.data);
                const { errors } = err.response.data.error;
                const messages = Object.keys(errors).map(error => errors[error].message)
                console.log(messages);
                setErrors(messages);
            })

    }
    return (
        <div>
            <a href="/">Home</a>
            <br />
            Edit this author
            <br />
            <form onSubmit={updateAuthor}>
                Name:
                <input type="text" onChange={e => setName(e.target.value)} value={name} />
                {error.map(( error, idx) => {
                    return <p key={idx}> {error} </p>
                })}
                <br />
                <button onClick={() => history.push("/")}>Cancel</button> &nbsp;
                <button>Submit</button>
            </form>

        </div>
    )
}

export default Update;