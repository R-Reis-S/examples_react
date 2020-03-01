import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Main';
import Props from '../examples/props/Props';
import PropsInput from '../examples/props_input/PropsInput';
import SimpleRedux from '../examples/simple_redux/SimpleRedux';

const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/props" component={Props} />
                <Route path="/propsInput" component={PropsInput} />
                <Route path="/simpleRedux" component={SimpleRedux} />
            </Switch>
        </BrowserRouter>
    );

}
export default Routes;