import React from 'react';
import MultiComponent from 'sample-react-lib-by-arun/lib/Multi-Select';
import CodeBlock from '../../../CodeBlock';

const languageTree = [
    {
        name: "Java Frameworks",
        id: "java-id",
        subOptions: [
        ]
    },
    {
        name: "CSS Frameworks",
        id: "css-id",
        subOptions: [
            {
                name: "bootstrap",
                id: "bos-id",
            },
            {
                name: "foundation",
                id: "foud-id",
            },
            {
                name: "Materialize",
                id: "matl-id",
            },
            {
                name: "Pure",
                id: "pure-id",
            }
        ]
    },
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
    },
];

class MixedMultiSelectExample extends React.Component {

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
                <MultiComponent title="Projects" data={languageTree} selectedItems={this.getSelected}/>

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

export default MixedMultiSelectExample;