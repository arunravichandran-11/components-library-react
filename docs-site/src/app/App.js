import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import './app.scss';

import MultiSelectDemoPage from './demos/Multi-Select';
import CheckboxDemoPage from './demos/Checkbox';
import InstallationGuide from './Installation';

class App extends React.Component { 

    render() {
        const activeLinkStyle = {
            backgroundColor: 'rgba(0,0,0,0.4)'
        };
        return (
            <Router>
                <div className="app-container">

                <header>
                    <h3>Components Library</h3>
                    <a href="https://github.com/arunravichandran-11/components-library-react/" target="_blank">
                        Github
                    </a>
                </header>
                <div className="wrapper">
                    <div className="left-pane">
                        <ul>
                            <li>
                                <NavLink activeStyle={activeLinkStyle} to="/select">MultiSelect</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={activeLinkStyle} to="/checkbox">Checkbox</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="right-pane">
                        <Switch>
                            <Route path="/" exact>
                                <div>
                                    <InstallationGuide />
                                </div>
                            </Route>
                            <Route path="/select">
                                <MultiSelectDemoPage />
                            </Route>
                            <Route path="/checkbox">
                                <CheckboxDemoPage />
                            </Route>
                        </Switch>
                    </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
