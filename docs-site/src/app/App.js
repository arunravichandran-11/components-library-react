import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './app.scss';

import MultiSelectDemoPage from './demos/Multi-Select';
import CheckboxDemoPage from './demos/Checkbox';

class App extends React.Component { 

    render() {
        return (
            <Router>
                <div className="app-container">

                <header>Components Library</header>
                <div className="wrapper">
                    <div className="left-pane">
                        <ul>
                            <li>
                                <Link to="/select">MultiSelect</Link>
                            </li>
                            <li>
                                <Link to="/checkbox">Checkbox</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right-pane">
                        <Switch>
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
