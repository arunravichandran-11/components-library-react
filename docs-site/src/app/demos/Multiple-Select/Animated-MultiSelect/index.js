import React from 'react';
import ComponentRenderer from '../../../ComponentRenderer';
import AnimatedMultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select/AnimatedMultiSelect';

import AnmatedMultiSelectExample from './Examples/NestedMultipleExample';
import AnmatedMultiSelectExampleCode from '!raw-loader!./Examples/NestedMultipleExample.js';

import AnmatedMultiSelectExampleSimple from './Examples/SimpleExample';
import AnmatedMultiSelectExampleSimpleCode from '!raw-loader!./Examples/SimpleExample.js';

import OneLevelNestedExample from './Examples/OneLevelNestedExample';
import OneLevelNestedExampleCode from '!raw-loader!./Examples/OneLevelNestedExample';

import ExampleWithNoData from './Examples/ExampleWithNoData';
import ExampleWithNoDataCode from '!raw-loader!./Examples/ExampleWithNoData';


import PropsDescriptor from '../../../PropsDescriptor';
import dataModel from './DataModel/dataModel.json';
import CodeBlock from '../../../CodeBlock';


class AnimatedMultiSelectDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>MultiSelect Component - Animated</h3>
                <p>An animated multiselect component accepts array of object as input and works as same as multi select.</p>
                <p>Note: Both MultiSelect and Animated MultiSelect will be served as a single component with a property to differentiate in upcoming release.</p>
                
                <ComponentRenderer title="Simple Example" codeBlock={AnmatedMultiSelectExampleSimpleCode}>
                    <AnmatedMultiSelectExampleSimple />
                </ComponentRenderer>

                <ComponentRenderer title="No Data Property" codeBlock={ExampleWithNoDataCode}>
                    <ExampleWithNoData />
                </ComponentRenderer>

                <ComponentRenderer title="One Level Nested" codeBlock={OneLevelNestedExampleCode}>
                    <OneLevelNestedExample />
                </ComponentRenderer>

                <ComponentRenderer title="Nested Example" codeBlock={AnmatedMultiSelectExampleCode}>
                    <AnmatedMultiSelectExample />
                </ComponentRenderer>

                <PropsDescriptor properties={AnimatedMultiSelectComponent.propTypes} />

                <h2>Data Model</h2>
                <p>Here is the sample data model format which will be given as an input to Animated multiselect component through a property name - `data`. 
                </p>
                
                <p className="short-notes">Note that the `id`, `name` and `subOptions` keys in the below object are used inside the component and so the component requests you to give the data with the same key names.</p>
                <CodeBlock>
                    <p>{JSON.stringify(dataModel, null, 4)}</p>                    
                </CodeBlock>

            </div>
        )
    }
}

export default AnimatedMultiSelectDemoPage;