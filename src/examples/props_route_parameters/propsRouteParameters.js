import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropsRouteParameters extends Component {
    render() {
        return (
            <>
                <h1>Link pass props route</h1>
                <Link to={'myRouteParameters/Teobaldo'}>My Route Parameters</Link>
            </>
        );
    }
}
export default PropsRouteParameters;