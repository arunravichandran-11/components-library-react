import React from 'react';

import PropsDescriptor from '../../../PropsDescriptor';
import SimpleCheckbox from 'sample-react-lib-by-arun/lib/SimpleCheckbox';

import UncontrolledSimpleCheckboxExample from './Examples/uncontrolled-checkbox';
import UncontrolledSimpleCheckboxExampleCode from '!raw-loader!./Examples/uncontrolled-checkbox';

import ControlledSimpleCheckboxExample from './Examples/controlled-checkbox';
import ControlledSimpleCheckboxExampleCode from '!raw-loader!./Examples/controlled-checkbox';

import ComponentRenderer from '../../../ComponentRenderer';

class SimpleCheckboxDemoPage extends React.Component {

    render() {

        const propsNotes = `onUnselect, allSelected, isPartiallySelected and hasChild - these props are used internally in Checkboxlist Component which is used in multi select component`;
        return (
            <div>
                <h3>Simple Checkbox Component</h3>
                <p>A simple checkbox which is created as a controlled component, meaning, the check and uncheck has to be controlled by parent component using `selected` prop.</p>

                <ComponentRenderer title="Uncontrolled Checkbox" codeBlock={UncontrolledSimpleCheckboxExampleCode}>
                    <UncontrolledSimpleCheckboxExample />
                </ComponentRenderer>

                <ComponentRenderer title="Controlled Checkbox" codeBlock={ControlledSimpleCheckboxExampleCode}>
                    <ControlledSimpleCheckboxExample />
                </ComponentRenderer>
                <PropsDescriptor properties={SimpleCheckbox.propTypes} />
            </div>
        )
    }
}

export default SimpleCheckboxDemoPage;