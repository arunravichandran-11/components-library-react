import React from 'react';
import SimpleCheckbox from 'sample-react-lib-by-arun/lib/Checkbox/SimpleCheckbox';

import CodeBlock from '../../../../CodeBlock';

class UncontrolledSimpleCheckboxExample extends React.Component {

    handleCountryChange = (checkboxState) => {
        this.setState({
            [checkboxState.value]: checkboxState
        })
    }

    render() {
        return (
            <div>

                <p>A simple checkbox example with no label</p>
                <SimpleCheckbox defaultChecked={true} />
                <SimpleCheckbox />
                <SimpleCheckbox indeterminate={true} />
                <SimpleCheckbox checked={true} />
    
                <p>A simple checkbox example with label</p>

                <div>
                  <SimpleCheckbox label="DefaultChecked" defaultChecked={true} />
                  <SimpleCheckbox label="Only Label" />
                  <SimpleCheckbox label="Indeterminate" indeterminate />
                  <SimpleCheckbox label="Uncheckable" checked={true} />
                </div>

                <p> Checkbox with value and onChange property </p>

                <div>
                    <SimpleCheckbox label="India" value="ind" onChange={this.handleCountryChange} />
                    <SimpleCheckbox label="United States" value="US" onChange={this.handleCountryChange} />
                    <SimpleCheckbox label="Australia" value="Aus" onChange={this.handleCountryChange} />
                </div>

                { 
                    this.state && (
                        <CodeBlock> {JSON.stringify(this.state, null, 3)}</CodeBlock>
                    )
                }

          </div>
        )
    }
}

export default UncontrolledSimpleCheckboxExample;