import React from 'react';
import SimpleCheckbox from 'sample-react-lib-by-arun/lib/Checkbox/SimpleCheckbox';

class ControlledSimpleCheckboxExample extends React.Component {

    state = {
        isIndiaChecked: false,
        product: {
            checked: false,
            indeterminate: false
        }
    }

    handleChange = (checkboxState) => {
        this.setState({
            isIndiaChecked: checkboxState.checked
        })
    }

    handleCheck = () => {
        this.setState({
            product: {
                checked: true,
                indeterminate: false
            }
        })
    }
    handleunCheck = () => {
        this.setState({
            product: {
                checked: false,
                indeterminate: false
            }
        })
    }
    handleIndeterminate = () => {
        this.setState({
            product: {
                checked: false,
                indeterminate: true
            }
        })
    }

    render() {
        return (
            <div>

                <p>A Controlled Checkbox</p>

                <div>
                    <SimpleCheckbox label="India"
                        checked={this.state.isIndiaChecked}
                        onChange={this.handleChange} 
                    />
                </div>

                <p> Checkbox with threestates </p>
                <div>
                    <SimpleCheckbox label="ThreeStates"
                        checked={this.state.product.checked}
                        indeterminate={this.state.product.indeterminate}
                    />

                    <button onClick={this.handleCheck}>Check</button>
                    <button onClick={this.handleIndeterminate}>Indeterminate</button>
                    <button onClick={this.handleunCheck}>Uncheck</button>
                </div>

                <p>
                    The above example is just to show how the component behaves based on checked and indeterminate props.
                    The real use case of these 3 states of checkbox will be used in multi select checkbox.
                </p>
            </div>
        )
    }
}

export default ControlledSimpleCheckboxExample;