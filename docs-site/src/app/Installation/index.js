import React, {Component} from 'react';
import './installation.scss';
import { NavLink } from 'react-router-dom';
import CodeBlock from '../CodeBlock';

const InstallationGuide = () => {

    return (
        <div className="installation-guide-container">
            <h2>Installation Guide and Usage of this library and it's components</h2>
            <div>
                <h3>COMPONENTS</h3>
                <h3>Install via npm</h3>
                <CodeBlock>
                    <div>npm install sample-react-lib-by-arun --save</div>
                    <p>
                        <a href="https://www.npmjs.com/package/sample-react-lib-by-arun" target="_blank">Click to view the npm page</a>
                    </p>
                </CodeBlock>
                <p>Please note that <a href="https://www.npmjs.com/package/react">react</a> &gt;= 16.8.0 and <a href="https://www.npmjs.com/package/react-dom">react-dom</a> &gt;= 16.8.0 are peer dependencies.</p>
                <div>                    
                    <h4>Available components</h4>

                           <ul>
                            <li>
                                <NavLink to="/select">MultiSelect</NavLink>
                            </li>
                            <li>
                                <NavLink to="/checkbox">Checkbox</NavLink>
                            </li>
                        </ul>
                </div>
            </div>
            <div>
                <h3>Steps To setup this library in local</h3>
                <p>
                    <a href='https://github.com/arunravichandran-11/components-library-react/'>Github Link[Refer this link for installation] or use the below steps.</a>
                </p> 
                <div>
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

                    <div>
                        The application will be opened in: <a href="http://localhost:3000/">http://localhost:3000/</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InstallationGuide;
