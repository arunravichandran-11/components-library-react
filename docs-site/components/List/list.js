import React from 'react';
import './list.scss';

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

export default ListComponent;