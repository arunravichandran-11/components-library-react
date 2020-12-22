import React from 'react';
import PropTypes from 'prop-types';
var classNames = require('classnames');
import '../checkbox.scss';

class IconCheckBox extends React.Component {

    STATES = {
        'SELECTED': 'fa-check-square-o',
        'PARTIAL': 'fa-square-o partially-selected',
        'NONE': 'fa-square-o',
    };

    /**
     * toggles the check and uncheck state of this component.
     * In order of make it as a controlled form component, the state of check and uncheck is not maintained here and the control will be done by the parent component with this callback value.
     * @param {object} event 
     */
    handleClick = (event) => {
        if(this.props.onCheck) {
            this.props.onCheck(this.props.checkedstate);
        }
    };

    render() {

        const { checkedstate, label, align } = this.props;
        const checkboxClass = this.STATES[checkedstate.toUpperCase()] || this.STATES['NONE'];
        const containerClass = (`checkbox ${align || ''}`).trim();

        return (
            <div className={containerClass}>
                <div className={classNames('fa', 'fa-2x', 'checkbox__icon', checkboxClass)} onClick={this.handleClick}></div>
                <div className="checkbox__label">{label}</div>
            </div>
        )
    }

  }

  IconCheckBox.defaultProps = {
    checkedstate: 'none'
  }

  IconCheckBox.propTypes = {
    // checkedstate: PropTypes.oneOf(['selected', 'partial', 'none']),
    checkedstate: PropTypes.string,
    label: PropTypes.string,
    onCheck: PropTypes.func,
  };

  export default IconCheckBox;