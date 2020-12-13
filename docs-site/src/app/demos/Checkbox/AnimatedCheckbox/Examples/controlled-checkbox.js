import React from 'react';
import AnimatedCheckbox from 'sample-react-lib-by-arun/lib/AnimatedCheckbox';
import CodeBlock from '../../../../CodeBlock';

class ControlledAnimatedCheckboxExample extends React.Component {

    state = {
        checkState: ''
    }
    handleChange = (isChecked, checkedState) => {
        this.setState({
            checkState: (checkedState === 'checked') ? 'un-checked' : 'checked'
        });
    }

    render() {
        return (
            <div>
                <p>A simple checkbox example with no label</p>
                <div style={{display: 'flex'}}>
                    <AnimatedCheckbox checkState='checked' />
                    <AnimatedCheckbox checkState='indeterminate' />
                    <AnimatedCheckbox checkState='unchecked' />
                    <AnimatedCheckbox checkState='anything other than checked and indeterminate'/>
                </div>

                <p>A simple checkbox example with label</p>

                <div style={{display: 'flex'}}>
                    <AnimatedCheckbox checkState="checked" label="Bikes" />
                    <AnimatedCheckbox checkState="indeterminate" label="Cars" />
                    <AnimatedCheckbox checkState="unchecked" label="Home" />
                </div>
                <p>A checkbox example with value and onchange</p>

                <AnimatedCheckbox checkState="checked" label="Cars" value="car" />

                <p>Controlled By Parent</p>
                <AnimatedCheckbox 
                    label="onChangeControlledComponent"
                    checkState={this.state.checkState}
                    onChange={this.handleChange} />
                {
                    this.state && <CodeBlock>{ JSON.stringify(this.state, null, 3) } </CodeBlock>
                }
            </div>
        )
    }
}

export default ControlledAnimatedCheckboxExample;
