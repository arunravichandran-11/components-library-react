import React from 'react';
import '../../Checkbox/checkbox.scss';
import PropTypes from 'prop-types';
var classNames = require('classnames');

class CheckBox extends React.Component {

    /**
     * toggles the check and uncheck state of this component.
     * In order of make it as a controlled form component, the state of check and uncheck is not maintained here and the control will be done by the parent component with this callback value.
     * @param {object} event 
     */
    handleClick = (event) => {
        if(this.props.onCheck) {
            this.props.onCheck(this.props.selected, this.props.option);
        }
    };

    render() {

        const { selected, label, align, hasChild } = this.props;
        const checkboxClass = ((selected === 'selected' || selected === true) ? 'fa-check-square-o' : (selected === 'partial') ? 'fa-square-o partially-selected':'fa-square-o');

        const containerClass = (`checkbox ${align || ''}`).trim();

        return (
            <div className={containerClass}>
                {!hasChild && <div className={classNames('fa', 'fa-2x', 'checkbox__icon', checkboxClass)} onClick={this.handleClick}></div>}
                <div className="checkbox__label">{label}</div>
            </div>
        )
    }

  }

  CheckBox.propTypes = {
    selected: PropTypes.any,
    label: PropTypes.string,
    onCheck: PropTypes.func,
    onUnselect: PropTypes.func,
    allSelected: PropTypes.bool, 
    isPartiallySelected: PropTypes.bool,
    hasChild: PropTypes.bool
  };

  export default CheckBox;