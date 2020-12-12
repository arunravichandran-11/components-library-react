import React from 'react';
import { bool, string, func } from 'prop-types';
import  './checkbox.scss';

class SimpleCheckbox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isChecked: false
        };
        this.inputElementRef = React.createRef();
    }

    handleChange = (event) => {
        
        if(this.props.checked !== undefined) {
            if(this.props.onChange) {
                this.props.onChange({ checked: !this.props.checked, value: event.target.value });
            }
        } else {
            this.setState({isChecked : !this.state.isChecked})
            if(this.props.onChange) {
                this.props.onChange({ checked: !this.state.isChecked, value: event.target.value });
            }
        }
    }

    render() {

        const {checked, value, defaultChecked, indeterminate, className} = this.props;
        
        const inputAttributes = {
            type: 'checkbox',
            className: (`simple-checkbox-input ${className || ''}`).trim(),
            value: value || '',
            onChange: this.handleChange,
            checked: checked,
            ...(( defaultChecked && checked === undefined) ? { defaultChecked } : {} ),
            ...indeterminate
        };

        if(this.props.defaultChecked && this.props.checked !== undefined) {
            console.warn(` "defaultChecked" and "checked" should not be used in the same element. It should either be controlled or uncontrolled !!!` )
        } 

        return (
            <div className="checkbox-container">
                <label>
                    <input {...inputAttributes} ref={this.inputElementRef} />
                    <span className="">{this.props.label}</span>
                </label> 
            </div>
        )
    }

    toggelIndeterminate = () => {
        if(!this.props.checked) {
            if(this.inputElementRef.current) {
                this.inputElementRef.current.indeterminate = this.props.indeterminate;
            }
        }
    }

    handleUncontrolledComponent() {
        if((this.props.checked === undefined || this.props.indeterminate === undefined) && this.props.defaultChecked) {
            this.setState({
                isChecked: this.props.defaultChecked
            });
        }
    }

    componentDidUpdate() {
        this.toggelIndeterminate();
    }

    componentDidMount() {
        this.handleUncontrolledComponent();
        this.toggelIndeterminate();
    }
    
}

SimpleCheckbox.propTypes = {
    checked: bool,
    defaultChecked: bool,
    indeterminate: bool,
    label: string,
    className: string,
    value: string,
    onChange: func
}

export default SimpleCheckbox;