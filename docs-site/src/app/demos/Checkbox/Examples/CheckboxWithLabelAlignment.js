import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class CheckboxWithLabelAlignmentExample extends React.Component {

    state = {
        selected: false,
    }
    render() {
        return (
            <div>
                <CheckboxComponent label="bike" align="vertical" selected={false} />
                <CheckboxComponent label="trip" align="vertical" selected={true} />
                <CheckboxComponent label="Trekking" align="vertical" selected={this.state.selected} onCheck={(selected) => this.setState({selected})} />
            </div>
        )
    }
}

export default CheckboxWithLabelAlignmentExample;