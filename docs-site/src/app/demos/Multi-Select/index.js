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

import dataModel from './dataModel.json';
import PropsDescriptor from '../../PropsDescriptor';
import CodeBlock from '../../CodeBlock';

class MultiSelectDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>MultiSelect Component</h3>
                <p>A multiselect component accepts array of object as input and returns the selected options as an object. It uses checkbox component internally.</p>
                <p style={{background: '#f9f3f3',padding: 8}}>Please take a look at the data model mentioned at the bottom of the page</p>
                <ComponentRenderer title="Simple Select" codeBlock={SimpleMultiSelectExampleCode}>
                    <SimpleMultiSelectExample />
                </ComponentRenderer>
                {/* <ComponentRenderer title="Nested Example" codeBlock={NestedMultiSelectExampleCode}>
                    <NestedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Nested" codeBlock={MixedMultiSelectExampleCode}>
                    <MixedMultiSelectExample />
                </ComponentRenderer>
                <ComponentRenderer title="Deeply Nested" codeBlock={DeeplyNestedMultiSelectExampleCode}>
                    <DeeplyNestedMultiSelectExample />
                </ComponentRenderer> */}

                <PropsDescriptor properties={MultiSelectComponent.propTypes} />

                <h2>Data Model</h2>
                <p>Here is the sample data model format which will be given as an input to multiselect component through a property name - `data`. <b>Note that the `id`, `name` and `subOptions` keys in the below object are used inside the component and so the component requests you to give the data with the same key names.</b></p>
                <CodeBlock>
                    <p>{JSON.stringify(dataModel, null, ' ')}</p>                    
                </CodeBlock>
            </div>
        )
    }
}

export default MultiSelectDemoPage;