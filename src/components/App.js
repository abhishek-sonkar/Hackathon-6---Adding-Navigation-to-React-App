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
            <BrowserRouter>
                <div id="main">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <LocationDisplay/>
                    <Switch>
                        <Route path='//'>
                            <Home />
                        </Route>
                        <Route path='/about'>
                            <About />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;
