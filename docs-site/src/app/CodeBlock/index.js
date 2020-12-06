import React from 'react';
import './code-block.scss';

class CodeBlock extends React.Component {
    render() {
        return (
            <div className="code-block-container">
                <pre>
                        <code language="language-html">
                            {this.props.children}
                        </code>
                </pre>
            </div>
        )
    }
}

export default CodeBlock;