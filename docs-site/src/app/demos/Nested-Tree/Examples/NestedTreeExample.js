import React from 'react';
import data from '../dataModel.json';
import CodeBlock from '../../../CodeBlock';
import NestedTree from 'sample-react-lib-by-arun/lib/NestedTree';

class NestedTreeExampleComponent extends React.Component {

    state = {
        selectedItems: {},
    }

    getSelected = (selectedItem) => {
        this.setState({
            selectedItems: selectedItem
        });
    }

    render() {
        return (
            <div>
                <NestedTree title="Node Tree" data={data} selectedOptions={this.state.selectedItems} selectedItems={this.getSelected}/>

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

export default NestedTreeExampleComponent;