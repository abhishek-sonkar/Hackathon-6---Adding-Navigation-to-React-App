import React, {Component, useState} from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import '../styles/App.css';
import Home from './Home';
import About from './About';
import LocationDisplay from './LocationDisplay';

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


export default App;
