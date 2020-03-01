import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
            <>
            <ul>
                <li><Link to="/props">Props</Link></li>
                <li><Link to="/propsInput">Props Input</Link></li>
                <li><Link to="/simpleRedux">Simple Redux</Link></li>
            </ul>
            </>
        );
    }
}
export default Main;