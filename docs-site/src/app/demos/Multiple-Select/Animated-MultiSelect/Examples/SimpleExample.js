import React from 'react';
import AnimatedMultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select/AnimatedMultiSelect';

import CodeBlock from '../../../../CodeBlock';

import bikesTree from '../DataModel/data-model.json';

class AnmatedMultiSelectExampleSimple extends React.Component {

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
                <AnimatedMultiSelectComponent 
                    title="Bikes"
                    data={bikesTree}
                    selectedItems={this.getSelected} // should change this as onChange
                    selectedOptions={this.state.selectedItems || {}} 
                />
                {
                    this.state.selectedItems && (
                        <CodeBlock>
                            { JSON.stringify(this.state.selectedItems, null, 3) }
                        </CodeBlock>
                    )
                }
                
            </div>
        )
    }
}

export default AnmatedMultiSelectExampleSimple;