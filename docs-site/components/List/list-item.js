import React from 'react';

class ListItemComponent extends React.Component {
    render() {    
        return (
            <li className="list-item">
                <a href={this.props.href} onClick={(event) => this.props.onClick(event)}>{this.props.label}</a>
            </li>
        )
    }
}

export default ListItemComponent;