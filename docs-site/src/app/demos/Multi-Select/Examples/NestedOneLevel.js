import React from 'react';
import MultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';

import CodeBlock from '../../../CodeBlock';

const frameworkTree = [
    {
        name: "JavaScript Frameworks",
        id: "JS-id",
        subOptions: [
            {
                name: "Angular",
                id: "JS-an-id",
            },
            {
                name: "React",
                id: "JS-re-id",
            },
            {
                name: "Vue",
                id: "JS-vu-id",
            },
            {
                name: "Ember",
                id: "JS-em-id",
            },
            {
                name: "Magento",
                id: "JS-ma-id",
            }
        ]
    },
    {
        name: "Java Frameworks",
        id: "java-id",
        subOptions: [
            {
                name: "Spring",
                id: "java-sp-id",
            },
            {
                name: "Hibernate",
                id: "java-hib-id",
            },
        ]
    },
    {
        name: "Python",
        id: "py-id",
        subOptions: [
            {
                name: "Django",
                id: "py-dj-id",
            },
            {
                name: "web2py",
                id: "py-web-id",
            },
        ]
    },
    {
        name: "C# Framework",
        id: "cpp-id",
        subOptions: [
            {
                name: "ASP .NET",
                id: "cpp-an-id",
            },
            {
                name: ".NET CORE",
                id: "cpp-re-id",
            },
            {
                name: "ADO.NET",
                id: "cpp-vu-id",
            },
        ]
    },
];

class NestedMultiSelectExample extends React.Component {

    state = {
        selectedItems: null,
    }

    getSelected = (selectedItem) => {
        this.setState({
            selectedItems: selectedItem
        });
    }

    render() {
        return (
            <div>
                <MultiSelectComponent title="Frameworks" data={frameworkTree} selectedItems={this.getSelected}/>

                {/* Note: The below codeblock is used only for displaying the selected data. */}

                {this.state.selectedItems &&
                <CodeBlock>
                 { JSON.stringify(this.state.selectedItems, null, 3) }
                </CodeBlock>
                }
            </div>
        )
    }
}

export default NestedMultiSelectExample;