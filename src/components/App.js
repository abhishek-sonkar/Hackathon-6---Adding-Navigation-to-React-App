import React, {Component, useState} from "react";
import {BrowserRouter, Link, Route, Switch, useLocation} from "react-router-dom";
import '../styles/App.css';
import Home from './Home';
import About from './About';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div id="main">
                <BrowserRouter>
                    <LocationDisplay/>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Switch>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='*'>
                        <div>No match</div>
                    </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export function LocationDisplay() {
    const { pathname } = useLocation();
    return (<div data-testid="location-display">{pathname}</div>);
}

export default App;
