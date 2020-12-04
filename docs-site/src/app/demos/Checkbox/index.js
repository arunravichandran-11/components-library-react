import React from 'react';
import CheckBoxDemoComponent from './Page';
import file from '!raw-loader!./Page.js';

import CodeBlock from '../../CodeBlock';

class CheckboxDemoPage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            showCode: false
        }
    }

    expandCodeBlock = () => {
        this.setState({
            showCode: !this.state.showCode
        })
    }

    render() {

        const showBlockClassName = `code-block ${this.state.showCode ? `expand` : 'shrink'}`;

        return (
            <div>
                <h2>CheckBox Component</h2>
                <div className={showBlockClassName}>
                    <header>
                        <div>Code Block</div>
                        <div onClick={this.expandCodeBlock} className="icon-button">
                            <i className="fa fa-code" aria-hidden="true"></i>
                        </div>
                    </header>
                    <div>
                        <CodeBlock>
                            {file}
                        </CodeBlock>
                    </div>
                </div>
                <div className="example-demo-block">
                    <CheckBoxDemoComponent />
                </div>
            </div>
        )
    }
}

export default CheckboxDemoPage;