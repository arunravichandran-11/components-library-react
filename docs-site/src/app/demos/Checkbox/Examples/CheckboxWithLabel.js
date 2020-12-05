import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class CheckboxWithLabelExample extends React.Component {

    state = {
        travel: false,
        trekking: true,
    }
    render() {
        return (
            <div>
                <CheckboxComponent label="Travel" selected={this.state.travel} onCheck={(selected) => this.setState({travel: selected})} />
                <CheckboxComponent label="bike" selected={false} />
                <CheckboxComponent label="trip" selected={true} />
                <CheckboxComponent label="Trekking" selected={this.state.trekking} onCheck={(selected) => this.setState({trekking: selected})} />
            </div>
        )
    }
}

export default CheckboxWithLabelExample;