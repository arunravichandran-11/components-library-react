import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class CheckBoxDemoComponent extends React.Component {

    state = {
        selected: false,
    }
    render() {
        return (
            <div>
                    <CheckboxComponent label="Bike" selected={this.state.selected} onCheck={(selected) => this.setState({selected})} />
            </div>
        )
    }
}

export default CheckBoxDemoComponent;