import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';

import MultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';

import TabsExample from './Examples/SimpleExample';
import TabsExampleCode from '!raw-loader!./Examples/SimpleExample.js';

import PropsDescriptor from '../../PropsDescriptor';

class TabsDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>Tabs Component</h3>
                <p style={{background: '#f9f3f3',padding: 8}}>Please take a look at the data model mentioned at the bottom of the page</p>
                <ComponentRenderer title="Simple Select" codeBlock={TabsExampleCode}>
                    <TabsExample />
                </ComponentRenderer>
                <PropsDescriptor properties={MultiSelectComponent.propTypes} />
            </div>
        )
    }
}

export default TabsDemoPage;