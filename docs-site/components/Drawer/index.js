import React from 'react';
import PropTypes from 'prop-types';
import './drawer.scss';

class DrawerComponent extends React.Component {

    render() {
        const {fixed, open, children, direction} = this.props;
        const rootElementClass = (`drawer-component-container ${fixed && 'fixed-drawer'} ${open && 'open-drawer'}`).trim();

        return (
            <div className={rootElementClass}>
                <div className={`drawer-wrap ${direction && direction}`}>
                    <a className="header-icon" onClick={(event) => this.props.onClose(event)}><i className="fa fa-2x fa-close"></i></a>
                    {children}
                </div>
            </div>
        )
    }
}

DrawerComponent.defaultProps = {
    fixed: false
}

DrawerComponent.propTypes = {
    fixed: PropTypes.bool
}

export default DrawerComponent;