import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';

import Tabs from 'sample-react-lib-by-arun/lib/Tabs';

import ControlledTabsExample from './Examples/ControlledTabExample';
import ControlledTabsExampleCode from '!raw-loader!./Examples/ControlledTabExample.js';

import FullWidthTabExample from './Examples/FullWidthTabExample';
import FullWidthTabsExampleCode from '!raw-loader!./Examples/FullWidthTabExample.js';

import TabsWithoutBackdropExample from './Examples/WithoutBackdropExample';
import TabsWithoutBackdropExampleCode from '!raw-loader!./Examples/WithoutBackdropExample.js';

import PropsDescriptor from '../../PropsDescriptor';

class TabsDemoPage extends React.Component {

    render() {
        return (
            <div>
                <h2>Examples</h2>
                <h3>Tabs Component</h3>
                <p>Tabs Component allows the different set of organised contents within multiple tabs and allowed to navigate between them.</p>
                <ComponentRenderer title="Controlled Tabs" codeBlock={ControlledTabsExampleCode}>
                    <ControlledTabsExample />
                </ComponentRenderer>
                <ComponentRenderer title="FullWidth Tabs" codeBlock={FullWidthTabsExampleCode}>
                    <FullWidthTabExample />
                </ComponentRenderer>
                <ComponentRenderer title="Tab without backdrop" codeBlock={TabsWithoutBackdropExampleCode}>
                    <TabsWithoutBackdropExample />
                </ComponentRenderer>
                <PropsDescriptor properties={Tabs.propTypes} />
            </div>
        )
    }
}

export default TabsDemoPage;