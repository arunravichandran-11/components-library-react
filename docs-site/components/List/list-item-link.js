import React from 'react';
import {NavLink} from 'react-router-dom';

class ListItemLink extends React.Component {

    render() {    
        const activeLinkStyle = {
            backgroundColor: 'rgba(0,0,0,0.4)'
        };
        return (
            <li className="list-item" onClick={this.props.onClick}>
                <NavLink activeStyle={activeLinkStyle} to={this.props.href}>{this.props.label}</NavLink>
            </li>
        )
    }
}

export default ListItemLink;