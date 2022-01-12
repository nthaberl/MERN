import React, { Component } from 'react';

class PersonCard extends Component {
    render () {
        const {firstName, lastName, age, hairColor} = this.props;
        return <div>
            <h1>{lastName}, {firstName} </h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
        </div>;
    }
}

export default PersonCard;

//can alternately be written
/* class PersonCard extends Component {
    render () {
        return <div>
            <h1>{this.props.lastName}, {this.props.firstName} </h1>
            <p>{this.props.age}</p>
            <p>{this.props.haircolor}</p>
        </div>;
    }
}

export default PersonCard;
 */