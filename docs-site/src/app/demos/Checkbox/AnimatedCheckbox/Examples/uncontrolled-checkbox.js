import React from 'react';
import AnimatedCheckbox from 'sample-react-lib-by-arun/lib/AnimatedCheckbox';
import CodeBlock from '../../../../CodeBlock';

class UncontrolledAnimatedCheckboxExample extends React.Component {

    handleChange = (isChecked, checkedState) => {
        this.setState({
            checked: isChecked,
            checkedState: checkedState
        })
    }

    render() {
        return (
            <div>
                <AnimatedCheckbox />
                <AnimatedCheckbox label="Checkbox With Label" />
                <AnimatedCheckbox label="With Value Props" value="car" />
                <AnimatedCheckbox label="OnchangeEventHandler" onChange={this.handleChange} />

                {
                    this.state && <CodeBlock>{ JSON.stringify(this.state, null, 3) } </CodeBlock>
                }
            </div>
        )
    }
}

export default UncontrolledAnimatedCheckboxExample;