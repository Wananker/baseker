import React from "react";
import {Route} from "react-router";
import App from "./containers/App";
import About from './containers/About'

export default (
    <Route path="/" component={App}>
        <Route path="/about" component={About}/>
    </Route>
)
