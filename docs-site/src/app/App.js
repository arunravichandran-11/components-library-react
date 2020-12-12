import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import './app.scss';

import DrawerComponent from 'sample-react-lib-by-arun/lib/Drawer';
import ListComponent from 'sample-react-lib-by-arun/lib/List/list';
import ListItemLink from 'sample-react-lib-by-arun/lib/List/list-item-link';
import TooltipComponent from 'sample-react-lib-by-arun/lib/Tooltip';

import AnimatedMultiSelectDemoPage from './demos/Animated-MultiSelect';
import MultiSelectDemoPage from './demos/Multi-Select';
import CheckboxDemoPage from './demos/Checkbox';
import NestedTreeDemoPage from './demos/Nested-Tree';
import TabsDemoPage from './demos/Tabs';

import InstallationGuide from './Installation';

class App extends React.Component { 

    state = {
        showDrawer: false,
    }

    toggleDrawer = () => {
        this.setState({showDrawer: !this.state.showDrawer});
    }

    render() {
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
                            <TooltipComponent position="bottom" text="View Full Source"/>
                        </a>
                    </header>
                    <div className="wrapper">
                        <DrawerComponent fixed={(window.innerWidth > 1024)} open={this.state.showDrawer} onClose={(event) => this.setState({showDrawer: false})}>
                            <ListComponent>
                                <ListItemLink label="Tabs" href="/tabs" onClick={this.toggleDrawer} />
                                <ListItemLink label="MultiSelect" href="/select" onClick={this.toggleDrawer} />
                                <ListItemLink label="Checkbox" href="/checkbox" onClick={this.toggleDrawer} />
                                <ListItemLink label="Nested Tree" href="/nested-tree" onClick={this.toggleDrawer} />
                                <ListItemLink label="Animated MultiSelect" href="/multi-select" onClick={this.toggleDrawer} />
                            </ListComponent>
                        </DrawerComponent>
                        <div className={this.state.showDrawer ? 'overlay show' : 'overlay'} onClick={this.toggleDrawer} onClose={this.toggleDrawer}></div>
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
                                <Route path="/multi-select">
                                    <AnimatedMultiSelectDemoPage />
                                </Route>
                                <Route path="/checkbox">
                                    <CheckboxDemoPage />
                                </Route>
                                <Route path="/nested-tree">
                                    <NestedTreeDemoPage />
                                </Route>
                                <Route path="/tabs">
                                    <TabsDemoPage />
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
