import React, { Component } from 'react';

class MyRouteParameters extends Component {
    
    render() {
        const { id } = this.props.match.params;
        return (
            <>
                <h1>Props Route Parameters</h1>
                <h4>Name: {id}</h4>
                {console.log(id)}
            </>
        );
    }
}
export default MyRouteParameters;