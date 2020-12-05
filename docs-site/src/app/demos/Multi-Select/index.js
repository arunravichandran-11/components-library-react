import React from 'react';
import ComponentRenderer from './ComponentRenderer';

import MultiComponent from 'sample-react-lib-by-arun/lib/Multi-Select';

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
                <h2>MultiSelect Component</h2>
                <ComponentRenderer title="Simple Multi Select Example" codeBlock={SimpleMultiSelectExampleCode}>
                    <SimpleMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Nested Multi Select Example" codeBlock={NestedMultiSelectExampleCode}>
                    <NestedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Multi Select With Nested and Single Checkbox" codeBlock={MixedMultiSelectExampleCode}>
                    <MixedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="DeeplyNestedMultiSelectExample" codeBlock={DeeplyNestedMultiSelectExampleCode}>
                    <DeeplyNestedMultiSelectExample />
                </ComponentRenderer>

                <PropsDescriptor properties={MultiComponent.propTypes} />
            </div>
        )
    }
}

export default MultiSelectDemoPage;