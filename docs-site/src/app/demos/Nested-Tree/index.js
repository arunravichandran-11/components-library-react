import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';
import AnimatedMultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';

import NestedTreeExampleComponent from './Examples/NestedTreeExample';
import NestedTreeExampleComponentCode from '!raw-loader!./Examples/NestedTreeExample.js';


import PropsDescriptor from '../../PropsDescriptor';
import dataModel from './dataModel.json';
import CodeBlock from '../../CodeBlock';


class NestedTreeDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>NestedTree Component</h3>
                
                <ComponentRenderer title="Simple Example" codeBlock={NestedTreeExampleComponentCode}>
                    <NestedTreeExampleComponent />
                </ComponentRenderer>

                <p className="short-notes">Note that the `id`, `name` and `subOptions` keys in the below object are used inside the component and so the component requests you to give the data with the same key names.</p>
                <CodeBlock>
                    <p>{JSON.stringify(dataModel, null, 4)}</p>                    
                </CodeBlock>

            </div>
        )
    }
}

export default NestedTreeDemoPage;