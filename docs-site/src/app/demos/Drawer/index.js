import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';
import Drawer from 'sample-react-lib-by-arun/lib/Drawer';
import PropsDescriptor from '../../PropsDescriptor';

import DrawerExample from './Examples/DrawerExample';
import DrawerExampleCode from '!raw-loader!./Examples/DrawerExample.js';


class DrawerDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>Drawer Component</h3>
                
                <ComponentRenderer title="Example" codeBlock={DrawerExampleCode}>
                    <DrawerExample />
                </ComponentRenderer>

                <PropsDescriptor properties={Drawer.propTypes} />

            </div>
        )
    }
}

export default DrawerDemoPage;