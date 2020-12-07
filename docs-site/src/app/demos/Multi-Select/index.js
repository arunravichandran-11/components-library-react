import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';

import MultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';

import SimpleMultiSelectExample from './Examples/SimpleExample';
import SimpleMultiSelectExampleCode from '!raw-loader!./Examples/SimpleExample.js';

import NestedMultiSelectExample from './Examples/NestedOneLevel';
import NestedMultiSelectExampleCode from '!raw-loader!./Examples/NestedOneLevel';

import MixedMultiSelectExample from './Examples/MixedExample';
import MixedMultiSelectExampleCode from '!raw-loader!./Examples/MixedExample';

import DeeplyNestedMultiSelectExample from './Examples/NestedExample';
import DeeplyNestedMultiSelectExampleCode from '!raw-loader!./Examples/NestedExample.js';


import PropsDescriptor from '../../PropsDescriptor';

class MultiSelectDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>MultiSelect Component</h3>
                <p>A multiselect component accepts array of object as input and returns the selected options as an object. It uses checkbox component internally.</p>
                <ComponentRenderer title="Simple Select" codeBlock={SimpleMultiSelectExampleCode}>
                    <SimpleMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Nested Example" codeBlock={NestedMultiSelectExampleCode}>
                    <NestedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Nested" codeBlock={MixedMultiSelectExampleCode}>
                    <MixedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Deeply Nested" codeBlock={DeeplyNestedMultiSelectExampleCode}>
                    <DeeplyNestedMultiSelectExample />
                </ComponentRenderer>

                <PropsDescriptor properties={MultiSelectComponent.propTypes} />
            </div>
        )
    }
}

export default MultiSelectDemoPage;