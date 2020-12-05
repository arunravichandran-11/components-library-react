import React from 'react';
import MultiComponent from '@Components/Multi-Select';

import CodeBlock from '../../../CodeBlock';

const languageTree = [
  {
    name: "JavaScript",
    id: "JS-id",
  },
  {
    name: "Java",
    id: "java-id",
  },
  {
    name: "Python",
    id: "py-id",
  },
  {
    name: "C++",
    id: "cpp-id",
  },
  {
    name: "GoLang",
    id: "go-id",
  },
];

class SimpleMultiSelectExample extends React.Component {

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
                <MultiComponent title="Programming Languages" data={languageTree} selectedItems={this.getSelected}/>

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

export default SimpleMultiSelectExample;