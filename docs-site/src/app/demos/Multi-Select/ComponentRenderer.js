import React from 'react';
import CodeBlock from '../../CodeBlock';
class MultiSelectExampleRenderer extends React.Component {

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

        const rootElementStyle = {
            margin: '16px 0px',
        }
        return (
            <div style={rootElementStyle}>
                <div className={showBlockClassName}>
                    <header>
                        <div>Code Block - {this.props.title}</div>
                        <div onClick={this.expandCodeBlock} className="icon-button">
                            <i className="fa fa-code" aria-hidden="true"></i>
                        </div>
                    </header>
                    <div>
                        <CodeBlock>
                            {this.props.codeBlock}
                        </CodeBlock>
                    </div>
                </div>
                <div className="example-demo-block">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default MultiSelectExampleRenderer;