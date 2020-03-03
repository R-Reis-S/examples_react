import React, { Component } from 'react';

class MyRoute extends Component {
    
    render() {
        const { name, age } = this.props.location.state;
        return (
            <>
                <h1>Props Route</h1>
                <h4>name: {name}</h4>
                <h4>age: {age}</h4>
            </>
        );
    }
}
export default MyRoute;