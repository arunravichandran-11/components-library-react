import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

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

ListItemLink.propTypes = {
    href: PropTypes.string, 
    label: PropTypes.string, 
    onClick: PropTypes.func
}

export default ListItemLink;