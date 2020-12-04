import React from 'react';
import MultiComponent from '@Components/Multi-Select/multi-select';

import {
    toppingOptions
} from './data';

class MultiSelectDemoComponent extends React.Component {

    state = {
        selectedItems: null,
    }

    getSelected = (selectedItem) => {
        this.setState({
            selectedItems: selectedItem
        });
    }

    getDataStructureDisplay = () => {
      return (
          <pre className="data-structure"><code className="json">{JSON.stringify(this.state.selectedItems, null, 3)}</code></pre>
      )
    }

    render() {

        return (
            <div>
                <MultiComponent data={toppingOptions} selectedItems={this.getSelected}/>
                {this.state.selectedItems && (
                    <div className="data-block">
                    {this.getDataStructureDisplay()}
                </div>
                )}
                
            </div>
        )
    }
}

export default MultiSelectDemoComponent;