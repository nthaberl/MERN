import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
    const [authors, setAuthors] = useState([]);

    //useHistory for "edit" on click function, let's us reroute onClick
    const history = useHistory();

    //grabbing array of authors from DB
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                setAuthors(res.data)
            })
            .catch(err => console.log(err))
    })

    //declaring function which lets us delete author on click
    const deleteAuthor = deletedId => {
        axios.delete(`http://localhost:8000/api/authors/${deletedId}`)
            .then(res => {
                console.log(res.data);
                setAuthors(authors.filter(author => author._id !== deletedId))
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <a href="/new">Add an author</a>

            {/* sort through authors first by name, then mapping through the sorted array */}
            {
                authors.sort((first, second) => {
                    return first.name > second.name ? 1 : -1;
                })
                    .map((authors, idx) => {
                        return (<div key={authors._id}>
                            <p> {authors.name} </p>
                            {/* using history to push the route into the url */}
                            <button onClick={() => history.push(`/edit/${authors._id}`)}> Edit</button> &nbsp;
                            <button onClick={() => deleteAuthor(authors._id)}>Delete</button>
                        </div>
                        )
                    })
            }
        </div>
    )
}

export default Home;