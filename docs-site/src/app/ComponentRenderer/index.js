import React from 'react';
import CodeBlock from '../CodeBlock';
import './component-renderer.scss';
import TooltipComponent from '@Components/Tooltip';

class ComponentRenderer extends React.Component {

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

        const showClassName = `code-block-wrapper ${this.state.showCode ? `expand` : 'shrink'}`;

        const rootElementStyle = {
            margin: '32px 0px',
        }
        return (
            <div style={rootElementStyle} className="component-renderer-root">
                <div className={showBlockClassName}>
                    <header>
                        <div>{this.props.title}</div>
                        <div>
                            <div onClick={this.expandCodeBlock} className="icon-button">
                                <i className="fa fa-code" aria-hidden="true"></i>
                                <TooltipComponent position="top" text="Source Code"/>
                            </div>
                            {/* <span>Click to expand</span> */}
                        </div>
                    </header>
                    <div className={showClassName}>
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

export default ComponentRenderer;