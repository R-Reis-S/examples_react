import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItens extends Component {

    render() {
        const { itens } = this.props;

        return (
            <>
                {/* { console.log(itens) } */}
                {itens.map(itens => (<li key={itens}>{itens}</li>))}
            </>
        );
    }
}
const mapStateToProps = store => ({
    itens: store.itens
});
export default connect(mapStateToProps)(ListItens);