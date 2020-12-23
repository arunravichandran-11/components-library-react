import React from 'react';
import ComponentRenderer from '../../ComponentRenderer';
import ListComponent from 'sample-react-lib-by-arun/lib/List/list';
import ListItemLink from 'sample-react-lib-by-arun/lib/List/list-item-link';
import ListItemComponent from 'sample-react-lib-by-arun/lib/List/list-item';

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

                <PropsDescriptor properties={ListComponent.propTypes} label="List Props" />
                <PropsDescriptor properties={ListItemComponent.propTypes} label="ListItem Props" />
                <PropsDescriptor properties={ListItemLink.propTypes} label="List Item Link Props" />
            </div>
        )
    }
}

export default ListDemoPage;