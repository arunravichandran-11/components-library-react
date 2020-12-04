import React from 'react';
import MultiSelectDemoComponent from './Page';
import CodeBlock from '../../CodeBlock';
import file from '!raw-loader!./Page.js';

class MultiSelectDemoPage extends React.Component {

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
                <h2>MultiSelect Component</h2>
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
                    <MultiSelectDemoComponent />
                </div>
            </div>
        )
    }
}

export default MultiSelectDemoPage;