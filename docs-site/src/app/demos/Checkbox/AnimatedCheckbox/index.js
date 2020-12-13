import React from 'react';

import PropsDescriptor from '../../../PropsDescriptor';
import AnimatedCheckbox from 'sample-react-lib-by-arun/lib/AnimatedCheckbox';

import UncontrolledAnimatedCheckboxExample from './Examples/uncontrolled-checkbox';
import UncontrolledAnimatedCheckboxExampleCode from '!raw-loader!./Examples/uncontrolled-checkbox';
import ControlledAnimatedCheckboxExample from './Examples/controlled-checkbox';
import ControlledAnimatedCheckboxExampleCode from '!raw-loader!./Examples/controlled-checkbox';

import ComponentRenderer from '../../../ComponentRenderer';

class AnimatedCheckboxDemoPage extends React.Component {

    render() {

        const propsNotes = `onUnselect, allSelected, isPartiallySelected and hasChild - these props are used internally in Checkboxlist Component which is used in multi select component`;
        return (
            <div>
                <h2>Examples</h2>
                <h3>Animated Checkbox Component</h3>

                <ComponentRenderer title="Uncontrolled Checkbox" codeBlock={UncontrolledAnimatedCheckboxExampleCode}>
                    <UncontrolledAnimatedCheckboxExample />
                </ComponentRenderer>

                <ComponentRenderer title="Controlled Checkbox" codeBlock={ControlledAnimatedCheckboxExampleCode}>
                    <ControlledAnimatedCheckboxExample />
                </ComponentRenderer>
                <PropsDescriptor properties={AnimatedCheckbox.propTypes} notes={propsNotes} />
            </div>
        )
    }
}

export default AnimatedCheckboxDemoPage;