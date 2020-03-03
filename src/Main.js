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
                <li><Link to="/propsRoute">Props Route</Link></li>
                <li><Link to="/propsRouteParameters">Props Route Parameters</Link></li>
                <li><Link to="/apiAxios">API Axios</Link></li>
            </ul>
            </>
        );
    }
}
export default Main;