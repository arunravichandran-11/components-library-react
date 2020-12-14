import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';

import Drawer from 'sample-react-lib-by-arun/lib/Drawer';

import DrawerExample from './Examples/DrawerExample';
import DrawerExampleCode from '!raw-loader!./Examples/DrawerExample.js';

import PropsDescriptor from '../../PropsDescriptor';

class DrawerDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>Drawer Component</h3>
                <ComponentRenderer title="Drawer Direction" codeBlock={DrawerExampleCode}>
                    <DrawerExample />
                </ComponentRenderer>
                <PropsDescriptor properties={Drawer.propTypes} />
            </div>
        )
    }
}

export default DrawerDemoPage;