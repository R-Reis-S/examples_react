import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../Main';
import Props from '../examples/props/Props';
import PropsInput from '../examples/props_input/PropsInput';
import SimpleRedux from '../examples/simple_redux/SimpleRedux';
import PropsRoute from '../examples/props_route/propsRoute';
import MyRoute from '../examples/props_route/myRoute';
import PropsRouteParameters from '../examples/props_route_parameters/propsRouteParameters';
import MyRouteParameters from '../examples/props_route_parameters/myRouteParameters';
import ApiAxios from '../examples/api_axios/apiAxios';



const Routes = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/props" component={Props} />
                <Route path="/propsInput" component={PropsInput} />
                <Route path="/simpleRedux" component={SimpleRedux} />

                <Route path="/propsRoute" component={PropsRoute} />
                <Route path="/myRoute" component={MyRoute} />

                <Route path="/propsRouteParameters" component={PropsRouteParameters} />
                <Route path="/myRouteParameters/:id" component={MyRouteParameters} />

                <Route path="/apiAxios" component={ApiAxios} />



            </Switch>
        </BrowserRouter>
    );

}
export default Routes;