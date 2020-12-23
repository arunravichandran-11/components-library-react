import React from 'react';
import AnimatedCheckbox from 'sample-react-lib-by-arun/lib/Checkbox/AnimatedCheckbox';
import PropTypes from 'prop-types';

class ListItemComponent extends React.Component {

    handleClick = (event) => {
        if(this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
    
        const {type, label, leftIcon, rightIcon} = this.props;

        return (
            <li className="list-item">
                {   
                    type == 'checklist' ?  <AnimatedCheckbox label={label} /> :
                         <a href={this.props.href} onClick={this.handleClick} className={(`${leftIcon && 'has-left-icon'} ${rightIcon && 'has-right-icon'}`).trim()}>
                             {leftIcon && <span className="left-icon-container">{leftIcon}</span>}
                            <span>{label}</span>
                            {rightIcon && <span className="right-icon-container">{rightIcon}</span>}
                        </a>
                }
            </li>
        )
    }
}

ListItemComponent.propTypes = {
    type: PropTypes.string, 
    label: PropTypes.string, 
    leftIcon: PropTypes.node, 
    rightIcon: PropTypes.node,
    onClick: PropTypes.func
}

export default ListItemComponent;