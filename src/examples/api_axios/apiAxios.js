import React, { Component } from 'react'
import API from './api';

import './style.css';

class ApiAxios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inf: []
        }
    }

    async componentDidMount() {
        const res = await API.get('people/');
        console.log(res.data.results)
        this.setState({ inf: res.data.results })
    }

    render() {

        const { inf } = this.state;

        return (
            <div>
            <h1 id="pageTitle">STAR WARS</h1>
                <div id="container">
                    <div>
                    <h3>Characters</h3>
                    {inf.map(data => (<li>{data.name}</li>))}
                    </div>
                </div>
            </div>
        );
    }
}
export default ApiAxios;