import React from 'react';
import './list.scss';
import PropTypes from 'prop-types';

class ListComponent extends React.Component {
    render() {
        return (
            <div className="list-container">
                <ul className="list">
                    {this.props.children}
                </ul>
            </div>       
        )
    }
}

ListComponent.propTypes = {
    children: PropTypes.node
}

export default ListComponent;