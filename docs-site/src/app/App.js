import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import './app.scss';

import Drawer from 'sample-react-lib-by-arun/lib/Drawer';
import ListComponent from 'sample-react-lib-by-arun/lib/List/list';
import ListItemLink from 'sample-react-lib-by-arun/lib/List/list-item-link';
import TooltipComponent from 'sample-react-lib-by-arun/lib/Tooltip';

import AnimatedMultiSelectDemoPage from './demos/Multiple-Select/Animated-MultiSelect';
import MultiSelectDemoPage from './demos/Multi-Select';
import CheckboxDemoPage from './demos/Checkbox';
import NestedTreeDemoPage from './demos/Nested-Tree'
import TabsDemoPage from './demos/Tabs'
import DrawerDemoPage from './demos/Drawer';
import ListDemoPage from './demos/List'
import HeaderBar, {SubHeader} from 'sample-react-lib-by-arun/lib/HeaderBar'


import InstallationGuide from './Installation'

import { renderTheme, setTheme } from 'sample-react-lib-by-arun/lib/themes';

class App extends React.Component {

    state = {
        showDrawer: false,
        theme: 'light'
    }

    toggleDrawer = () => {
        this.setState({showDrawer: !this.state.showDrawer});
    }

    toggleTheme = (theme) => {
        this.setState({theme});
    }

    componentDidMount() {
        setTheme(this.state.theme);
    }
    componentDidUpdate() {
        setTheme(this.state.theme);
    }

    renderLeftMenu=() => {
        return (
            <>
                <NavLink to="/" className="home">
                    <i className="fa fa-home" aria-hidden="true"></i>
                </NavLink>
                <a className="menu" onClick={this.toggleDrawer}>
                    <i className={this.state.showDrawer ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
                </a>
            </>
        )

    }

    renderRightMenu = () => {
        return (
            <>
                <a className="">
                    <i className="fa fa-eyedropper" aria-hidden="true"></i>
                    <TooltipComponent position="bottom">
                        <div className="box-container">
                            <span className="box dark-blue" onClick={() => this.toggleTheme('dark-blue')}></span>
                            <span className="box light-blue" onClick={() => this.toggleTheme('light-blue')}></span>
                            <span className="box light-green" onClick={() => this.toggleTheme('light-green')}></span>
                            <span className="box purple" onClick={() => this.toggleTheme('purple')}></span>
                        </div>
                    </TooltipComponent>
                </a>
                <a className="github-link" href="https://github.com/arunravichandran-11/components-library-react/" target="_blank">
                    <i className="fa fa-github" aria-hidden="true"></i> Github
                    <TooltipComponent position="bottom" text="View Full Source"/>
                </a>
            </>
        )
    }

    render() {
        return (
            <Router>
                <div className="app-container">

                    {/* <header className="app-header">
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
                    </header> */}

                    <HeaderBar
                            title="React Library"
                            className="app-header"
                            leftMenu={this.renderLeftMenu()}
                            rightMenu={this.renderRightMenu()}
                            showSubheader={false}
                    >
                    </HeaderBar>

                    <div className="wrapper">
                        <Drawer fixed={(window.innerWidth > 1024)} open={this.state.showDrawer} onClose={(event) => this.setState({showDrawer: false})}>
                            <ListComponent>
                                <ListItemLink label="Tabs" href="/tabs" onClick={this.toggleDrawer} />
                                <ListItemLink label="Checkbox" href="/checkbox" onClick={this.toggleDrawer} />
                                <ListItemLink label="Nested Tree" href="/nested-tree" onClick={this.toggleDrawer} />
                                <ListItemLink label="MultiSelect" href="/multi-select" onClick={this.toggleDrawer} />
                                <ListItemLink label="Drawer" href="/drawer" onClick={this.toggleDrawer} />
                                <ListItemLink label="List" href="/list" onClick={this.toggleDrawer} />
                            </ListComponent>
                        </Drawer>
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
                                <Route path="/drawer">
                                    <DrawerDemoPage />
                                </Route>
                                <Route path="/list">
                                    <ListDemoPage />
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
