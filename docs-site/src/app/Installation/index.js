import React, {Component} from 'react';
import './installation.scss';
import { NavLink } from 'react-router-dom';
import CodeBlock from '../CodeBlock';

import CheckboxExampleCode from '!raw-loader!./ExampleCode.md';

const InstallationGuide = () => {

    return (
        <div className="installation-guide-container">
            <h2>Installation Guide and Usage:</h2>
            <p> This library has react components available as an npm package.
                <a href="https://www.npmjs.com/package/sample-react-lib-by-arun" target="_blank">npm link</a>
            </p>
            <div>
                <h3>Install via npm</h3>
                <p>To install and save in your package.json dependencies, run:</p>
                <CodeBlock>
                    <p>npm install sample-react-lib-by-arun --save</p>
                </CodeBlock>
                <p>Please note that <a href="https://www.npmjs.com/package/react">react</a> &gt;= 16.8.0 and <a href="https://www.npmjs.com/package/react-dom">react-dom</a> &gt;= 16.8.0 are peer dependencies.</p>

                <h3>Fonts</h3>
                <p>This Documentation site is using RobotoFont and so the same is reflected in Components but if you are using only the components, the fonts are up to your choice.</p>

                <h3>Icons</h3>
                <p>This library is using FontAwesome(4.7) Icons and so it expects font-awesome to be included in your application.</p>
                <p>
                    Refer <a href="https://fontawesome.com/v4.7.0/icons/">FontAwesome(4.7)</a> to install and use the icons. Use the below link, if you prefer to install it as CDN.
                </p>
                <CodeBlock>
                    <p>
                        {`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />`}
                    </p>
                </CodeBlock>
                <p><b>Note: FontAwesome Icon dependencies will be removed soon!!!</b></p>

                <h3>Available Components </h3>
                <p>The list of components available when you install the latest version of this library from npm.</p>
                <ul>
                    <li>
                        <NavLink to="/select">MultiSelect</NavLink>
                    </li>
                    <li>
                        <NavLink to="/checkbox">Checkbox</NavLink>
                    </li>
                </ul>

                <hr />

                <h2>Usage</h2>
                <p>It is easy to get started with this library. After installation, the components can be imported inside any react component.The components are reusuable and customizable and the styles aren't dependent on any global styles.</p>
                <p>You can use any of the components as demonstrated in the documentation. Please refer to each component demo page (click the left menu) to see how they should be imported.</p>

                <h3>Quick Start</h3>
                <p>Here's a quick example to get you started:</p>
                <CodeBlock>
                    {CheckboxExampleCode}
                </CodeBlock>
                <p>The above code is all you need to do, once after the npm installation.</p>

                <hr />
                <h2>Documentation Site</h2>
                <p>This Documentation site is created using react js and internally using the library as an npm package[latest version]</p>
                <p><small>Please make sure to install the latest version always.</small></p>
                
                <h3>Site Setup Local</h3>
                <p>If you are interested to setup this whole documation site in your local, Please visit the 
                    <a href='https://github.com/arunravichandran-11/components-library-react/'>Github Link</a> or click github icon in header. 
                    Lazy to navigate ? Just follow the below instructions then :P
                </p>
                <CodeBlock>
                    <u>Steps:</u>
                    <p>
                        git clone https://github.com/arunravichandran-11/components-library-react.git
                    </p>
                    <p>
                        cd components-library-react/docs-site
                    </p>
                    <p>
                        npm install
                    </p>
                    <p>
                        npm start [development]
                    </p>
                    <p>
                        npm run prod [Production]
                    </p>
                </CodeBlock>
                <p>
                    Site will be opened in: <a href="http://localhost:3000/">http://localhost:3000/</a>
                </p>
            </div>
        </div>
    )
}

export default InstallationGuide;
