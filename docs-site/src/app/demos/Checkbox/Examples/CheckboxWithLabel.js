import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class CheckboxWithLabelExample extends React.Component {

    state = {
        selected: false,
    }
    render() {
        return (
            <div>
                <CheckboxComponent label="bike" selected={false} />
                <CheckboxComponent label="trip" selected={true} />
                <CheckboxComponent label="Trekking" selected={this.state.selected} onCheck={(selected) => this.setState({selected})} />
            </div>
        )
    }
}

export default CheckboxWithLabelExample;