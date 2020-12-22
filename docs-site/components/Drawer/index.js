import React from 'react';
import './drawer.scss';
import PropTypes from 'prop-types';

class Drawer extends React.Component {

    render() {
        const {fixed, open, children, align} = this.props;
        const rootElementClass = (`drawer-component-container ${fixed && 'fixed-drawer'} ${open && 'open-drawer'} ${align || ''}`).trim();

        return (
            <div className={rootElementClass}>
                <div className={`drawer-wrap`}>
                    <a className="header-icon" onClick={(event) => this.props.onClose(event)}><i className="fa fa-2x fa-close"></i></a>
                    {children}
                </div>
            </div>
        )
    }
}

Drawer.defaultProps = {
    fixed: false
}

Drawer.propTypes = {
    fixed: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    children: PropTypes.node,
    align: PropTypes.string
}

export default Drawer;