import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class SimpleCheckboxExample extends React.Component {

    state = {
        selected: false,
    }
    render() {
        return (
            <div>
                <CheckboxComponent selected={false} />
                <CheckboxComponent selected={true} />
                <CheckboxComponent selected={this.state.selected} onCheck={(selected) => this.setState({selected})} />
            </div>
        )
    }
}

export default SimpleCheckboxExample;