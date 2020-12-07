import React from 'react';
import AnimatedMultiSelectComponent from '@Components/Multi-Select/Animated';

import CodeBlock from '../../../CodeBlock';

import bikesTree from './data-model.json';

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
                    // title="Bikes"
                    // data={bikesTree}
                    // selectedItems={this.getSelected} // should change this as onChange
                    // selectedOptions={this.state.selectedItems || {}} 
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