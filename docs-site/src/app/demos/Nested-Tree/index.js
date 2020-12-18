import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';
import NestedTree from 'sample-react-lib-by-arun/lib/NestedTree';
import PropsDescriptor from '../../PropsDescriptor';

import NestedTreeExampleComponent from './Examples/NestedTreeExample';
import NestedTreeExampleComponentCode from '!raw-loader!./Examples/NestedTreeExample.js';

import sampleDataModel from './DataModel/sample.json';
import CodeBlock from '../../CodeBlock';


class NestedTreeDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>NestedTree Component</h3>
                
                <ComponentRenderer title="Nested Example" codeBlock={NestedTreeExampleComponentCode}>
                    <NestedTreeExampleComponent />
                </ComponentRenderer>

                <PropsDescriptor properties={NestedTree.propTypes} />

                <p className="short-notes">Note that the `id`, `name` and `subOptions` keys in the below object are used inside the component and so the component requests you to give the data with the same key names.</p>
                <CodeBlock>
                    <p>{JSON.stringify(sampleDataModel, null, 4)}</p>                    
                </CodeBlock>

            </div>
        )
    }
}

export default NestedTreeDemoPage;