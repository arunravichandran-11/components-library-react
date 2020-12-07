import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';

import AnimatedMultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';
import AnmatedMultiSelectExample from './Examples/NestedMultipleExample';
import AnmatedMultiSelectExampleCode from '!raw-loader!./Examples/NestedMultipleExample.js';

import PropsDescriptor from '../../PropsDescriptor';

class AnimatedMultiSelectDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>MultiSelect Component - Animated</h3>
                <p>An animated multiselect component accepts array of object as input and works as same as multi select.</p>
                <p>Note: Both MultiSelect and Animated MultiSelect will be served as a single component with props to show the difference in upcoming release.</p>
                <ComponentRenderer title="Nested Example" codeBlock={AnmatedMultiSelectExampleCode}>
                    <AnmatedMultiSelectExample />
                </ComponentRenderer>

                <PropsDescriptor properties={AnimatedMultiSelectComponent.propTypes} />
            </div>
        )
    }
}

export default AnimatedMultiSelectDemoPage;