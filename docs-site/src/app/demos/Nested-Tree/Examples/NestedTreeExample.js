import React from 'react';
import data from '../dataModel.json';
import CodeBlock from '../../../CodeBlock';
import NestedTree from '@Components/Multi-Select/NestedTree';

class NestedTreeExampleComponent extends React.Component {

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
                <NestedTree align="horizontal" title="Frameworks" data={data.subOptions} selectedItems={this.getSelected}/>

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