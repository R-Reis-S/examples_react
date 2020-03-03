import React, { Component } from 'react'
import API from './api';

class ApiAxios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inf: null
        }
    }

    async componentDidMount() {
        const res = await API.get();
        this.setState({ inf: [res.data] });
    }

    render() {

        const { inf } = this.state;

        if (inf !== null) {
            inf.forEach(element => {
                console.log(element)
            })
        }

        return (
            <>
                {

                }
                {/* {console.log(inf)} */}
            </>
        );
    }
}
export default ApiAxios;