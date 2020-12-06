import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import './app.scss';

import DrawerComponent from '@Components/Drawer';

import MultiSelectDemoPage from './demos/Multi-Select';
import CheckboxDemoPage from './demos/Checkbox';
import InstallationGuide from './Installation';

class App extends React.Component { 

    state = {
        showDrawer: false,
    }

    toggleDrawer = () => {
        this.setState({showDrawer: !this.state.showDrawer});
    }

    render() {
        const activeLinkStyle = {
            backgroundColor: 'rgba(0,0,0,0.4)'
        };
        return (
            <Router>
                <div className="app-container">

                <header className="app-header">
                    <h3 className="title">
                        <NavLink to="/" className="home">
                            <i className="fa fa-home" aria-hidden="true"></i>
                            <span>React Library</span>
                        </NavLink>
                        <a className="menu" onClick={this.toggleDrawer}>
                            <i className={this.state.showDrawer ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
                            <span>React Library</span>

                        </a>
                    </h3>
                    <a className="github-link" href="https://github.com/arunravichandran-11/components-library-react/" target="_blank">
                        <i className="fa fa-github" aria-hidden="true"></i> Github
                        <span className="tooltip">Open Source Code</span>
                    </a>
                </header>
                <div className="wrapper">
                    <DrawerComponent fixed={(window.innerWidth > 1024)} open={this.state.showDrawer} onClose={(event) => this.setState({showDrawer: false})}/>
                    {/* <div className={this.state.showDrawer ? 'left-pane drawer' : 'left-pane'}>
                    <DrawerComponent />
                        <ul>
                            <li>
                                <NavLink activeStyle={activeLinkStyle} to="/select">MultiSelect</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={activeLinkStyle} to="/checkbox">Checkbox</NavLink>
                            </li>
                        </ul>
                    </div> */}
                    <div className={this.state.showDrawer ? 'overlay show' : 'overlay'} onClick={this.toggleDrawer}></div>
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
