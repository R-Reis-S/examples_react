import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PropsRoute extends Component {
    render() {
        return (
            <>
                <h1>Link pass props route</h1>
                <Link to={{ pathname: '/myRoute', state: { name: 'Teobaldo', age: 30 } }}>My Route</Link>
            </>
        );
    }
}
export default PropsRoute;