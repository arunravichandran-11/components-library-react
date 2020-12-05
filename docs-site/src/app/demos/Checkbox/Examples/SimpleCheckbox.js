import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class SimpleCheckboxExample extends React.Component {

    state = {
        selected: false,
        defaultSelected: true,
    }
    render() {
        return (
            <div>
                <CheckboxComponent selected={this.state.selected} onCheck={(selected) => this.setState({selected})} />
                <CheckboxComponent selected={false} />
                <CheckboxComponent selected={true} />
                <CheckboxComponent selected={this.state.defaultSelected} onCheck={(selected) => this.setState({defaultSelected: selected})} />
            </div>
        )
    }
}

export default SimpleCheckboxExample;