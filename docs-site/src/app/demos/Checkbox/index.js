import React from 'react';

import PropsDescriptor from '../../PropsDescriptor';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

import SimpleCheckboxExample from './Examples/SimpleCheckbox';
import SimpleCheckboxExampleCode from '!raw-loader!./Examples/SimpleCheckbox';


import CheckboxWithLabelExample from './Examples/CheckboxWithLabel';
import CheckboxWithLabelExampleCode from '!raw-loader!./Examples/CheckboxWithLabel';

import CheckboxWithLabelAlignmentExample from './Examples/CheckboxWithLabelAlignment';
import CheckboxWithLabelAlignmentExampleCode from '!raw-loader!./Examples/CheckboxWithLabelAlignment';


import ComponentRenderer from '../../ComponentRenderer';

class CheckboxDemoPage extends React.Component {

    render() {

        const propsNotes = `onUnselect, allSelected, isPartiallySelected and hasChild - these props are used internally in Checkboxlist Component which is used in multi select component`;
        return (
            <div>
                <h2>Examples</h2>
                <ComponentRenderer title="Simple Checkbox" codeBlock={SimpleCheckboxExampleCode}>
                    <SimpleCheckboxExample />
                </ComponentRenderer>

                <ComponentRenderer title="CheckBox With Label (Horizontal)" codeBlock={CheckboxWithLabelExampleCode}>
                    <CheckboxWithLabelExample />
                </ComponentRenderer>

                <ComponentRenderer title="CheckBox With Label (Vertical)" codeBlock={CheckboxWithLabelAlignmentExampleCode}>
                    <CheckboxWithLabelAlignmentExample />
                </ComponentRenderer>

                <PropsDescriptor properties={CheckboxComponent.propTypes} notes={propsNotes} />
            </div>
        )
    }
}

export default CheckboxDemoPage;