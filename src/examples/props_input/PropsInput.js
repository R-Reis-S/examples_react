import React, { Component } from 'react';
import Hello from './hello';

class PropsInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textInput: "",
            click: false
        };
    }

    handleinput = event => {
        this.setState({ click: false })
        this.setState({ textInput: event.target.value });
    }

    showHello = () => {
        this.setState({ click: true });
    }

    render() {
        const { textInput, click } = this.state;

        return (
            <>
                <input type="text" onChange={this.handleinput} />
                <button type="button" onClick={this.showHello}>Set Name</button>
                {click && <Hello name={textInput} />}
            </>
        );
    }
}
export default PropsInput;