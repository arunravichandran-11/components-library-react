import React from 'react';
import { bool, string, func } from 'prop-types';
import  './animated-checkbox.scss';

class AnimatedCheckbox extends React.Component {

    state = {
        checked: false,
        checkState: 'unchecked'
    }
    handleClick = (event) => {
        if(this.props.onChange) {
            if(this.props.checkState === undefined) {
                const localState = {
                    checked: !this.state.checked,
                    checkState: this.state.checked ? 'un-checked' : 'checked'
                };
                this.setState(localState);
                this.props.onChange(localState.checked, localState.checkState);
            } else {
                if(this.props.checked === undefined) {
                    this.props.onChange(this.props.checked, this.props.checkState);
                } else {
                    this.props.onChange(!this.props.checked, this.props.checkState);
                }
            }
        } else {
            if(this.props.checkState === undefined) {
                const localState = {
                    checked: !this.state.checked,
                    checkState: this.state.checked ? 'un-checked' : 'checked'
                };
                this.setState(localState);
            }
        }
    }
    render() {

        const  {checkState, checked, value} = this.props;

        const checkBoxState = checkState || this.state.checkState;

        const states = ['checked', 'indeterminate', 'show-child', 'expand'];
        const classBasedOnCheckState = states.find((state) => state === checkBoxState);
        const checkBoxLabelClass = (`check-box ${classBasedOnCheckState ? classBasedOnCheckState : 'un-checked'}`).trim();

        return (
            <div className="animated-checkbox-container" onClick={this.handleClick} style={this.props.style}>
                <input type="checkbox" className="checkbox-input" value={value}/>
                <label className={checkBoxLabelClass}>
                    <span></span>
                </label> 
                <span className="checkbox-label">{this.props.label}</span>
            </div>
        )
    }
}

AnimatedCheckbox.propTypes = {
    checked: bool,
    checkState: string,
    label: string,
    onChange: func
}

export default AnimatedCheckbox;