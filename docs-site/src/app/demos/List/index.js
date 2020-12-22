import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';
// import List from 'sample-react-lib-by-arun/lib/List';
import PropsDescriptor from '../../PropsDescriptor';

import ListExample from './Examples/ListExample';
import ListExampleCode from '!raw-loader!./Examples/ListExample.js';


class ListDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>List Component</h3>
                
                <ComponentRenderer title="Example" codeBlock={ListExampleCode}>
                    <ListExample />
                </ComponentRenderer>

                {/* <PropsDescriptor properties={List.propTypes} /> */}

            </div>
        )
    }
}

export default ListDemoPage;