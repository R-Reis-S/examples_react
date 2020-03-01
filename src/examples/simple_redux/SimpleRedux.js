import React, { Component } from 'react';

import {connect} from 'react-redux';

import ListItens from './ListItens';

import './SimpleRedux.css';

class SimpleRedux extends Component {
    constructor(props) {
        super(props);
        this.handleAddIten = this.handleAddIten.bind(this);
        this.state = {
            inputText: ""
        }
    }

    handleInputText = event => {
        this.setState({ inputText: event.target.value });
    }

    handleAddIten = () => {
        const item = this.state.inputText; 
        const { dispatch } = this.props;
        dispatch({
            type: 'ADD_ITEM',
            item,
        });
        this.setState({inputText:""});

    }

    render() {
        const { inputText } = this.state;

        return (
            <div id="container">
                    <div>
                        <h2>Insert Itens</h2>
                        <input type="text" onChange={this.handleInputText} value={inputText}/>
                        {/* {console.log(inputText)} */}
                        <button type="button" onClick={this.handleAddIten}>Add</button>
                    </div>

                    <div>
                        <h2>List Itens</h2>
                        <ListItens />
                    </div>

                    <div>
                        <h2>Number Itens</h2>
                        
                    </div>
            </div>


        );
    }
}
export default connect()(SimpleRedux);