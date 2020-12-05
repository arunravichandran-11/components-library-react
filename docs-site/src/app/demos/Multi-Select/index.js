import React from 'react';
import ComponentRenderer from './ComponentRenderer';

import MultiComponent from '@Components/Multi-Select';

import SimpleMultiSelectExample from './Examples/SimpleExample';
import SimpleMultiSelectExampleCode from '!raw-loader!./Examples/SimpleExample.js';

import NestedMultiSelectExample from './Examples/NestedOneLevel';
import NestedMultiSelectExampleCode from '!raw-loader!./Examples/NestedOneLevel';

import DeeplyNestedMultiSelectExample from './Examples/NestedExample';
import DeeplyNestedMultiSelectExampleCode from '!raw-loader!./Examples/NestedExample.js';

console.log('MultiComponent', MultiComponent.propTypes);

class MultiSelectDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>MultiSelect Component</h2>
                <ComponentRenderer title="SimpleMultiSelectExample" codeBlock={SimpleMultiSelectExampleCode}>
                    <SimpleMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="NestedMultiSelectExample" codeBlock={NestedMultiSelectExampleCode}>
                    <NestedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="DeeplyNestedMultiSelectExample" codeBlock={DeeplyNestedMultiSelectExampleCode}>
                    <DeeplyNestedMultiSelectExample />
                </ComponentRenderer>
            </div>
        )
    }
}

export default MultiSelectDemoPage;