import React, { useState } from 'react';

//everything dynamic on the DOM has to have it's own state
const UserForm = (props) => {
    const [firstName, setFirstName] = useState(""); //'useState("")' sets default
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");//necessary for submitting form?

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");


    const createUser = (e) => {
        e.preventDefault(); //prevent browser from handling submit, will rely on React to handle it
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
    };
    

    const handleFirstName = e => { 
        setFirstName(e.target.value);
        if(e.target.value.length <= 2 && e.target.value.length !== null){
            setFirstNameError("First name must be at least 2 characters long!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = e => { 
        setLastName(e.target.value);
        if(e.target.value.length <= 2 && e.target.value.length !== null){
            setLastNameError("Last name must be at least 2 characters long!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = e => { 
        setEmail(e.target.value);
        if(e.target.value.length <= 2 && e.target.value.length !== null){
            setEmailError("Email must be at least 2 characters long!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = e => { 
        setPassword(e.target.value);
        if(e.target.value.length <= 8 && e.target.value.length !== null){
            setPasswordError("Password must be at least 8 characters long!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirm = e => {
        setConfirm(e.target.value);
        if(e.target.value !== password){
            setConfirmError("Passwords must match!")
        } else {
            setConfirmError("");
        }
    }


    return (
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={ handleFirstName } />
                {
                    firstNameError ? 
                    <p style = {{ color: "red"}} > {firstNameError}</p> : <p> &nbsp; </p>//add empty space character inside p tag
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={ handleLastName } />
                {
                    lastNameError ? 
                    <p style = {{ color: "red"}} > {lastNameError}</p> : <p> &nbsp; </p>
                }
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" value={email} onChange={ handleEmail } />
                {
                    emailError ? 
                    <p style = {{ color: "red"}} > {emailError}</p> : <p> &nbsp; </p>
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ handlePassword } />
                {
                    passwordError ? 
                    <p style = {{ color: "red"}} > { passwordError }</p> : <p> &nbsp; </p>
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirm} onChange = { handleConfirm } />
                {
                    confirmError ?
                    <p style = {{ color: "red" }}> { confirmError } </p> : <p> &nbsp; </p>
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <hr/>
        <h3>Your Form Data:</h3>
        <p> First Name: { firstName } </p>
        <p> Last Name: { lastName }</p>
        <p> Email: { email }</p>
        <p>Password: password </p>
        <p>Confirm Password: password </p>
        </div>
    );
};

export default UserForm;
