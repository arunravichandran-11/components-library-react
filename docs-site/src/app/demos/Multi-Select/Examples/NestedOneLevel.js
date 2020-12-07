import React from 'react';
import MultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';
import data from '../dataModel.json';
import CodeBlock from '../../../CodeBlock';

class NestedMultiSelectExample extends React.Component {

    state = {
        selectedItems: null,
    }

    getSelected = (selectedItem) => {
        this.setState({
            selectedItems: selectedItem
        });
    }

    render() {
        return (
            <div>
                <MultiSelectComponent align="horizontal" title="Frameworks" data={data} selectedItems={this.getSelected}/>

                {/* Note: The below codeblock is used only for displaying the selected data. */}

                {this.state.selectedItems &&
                <CodeBlock>
                 { JSON.stringify(this.state.selectedItems, null, 3) }
                </CodeBlock>
                }
            </div>
        )
    }
}

export default NestedMultiSelectExample;