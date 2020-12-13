import React from 'react';
import MultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select';

import CodeBlock from '../../../CodeBlock';

const languageTree = {

  id: 'Progs',
  name: 'Category',
  subOptions: [
  {
    name: "JavaScript",
    id: "JS-id",
    subOptions: [
        {
            "id": "Bike-Id",
            "name": "Bike"
        },
        {
            "id": "Car-Id",
            "name": "Car"
        }
     ]
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

  ]
};

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
                <MultiSelectComponent title="Programming Languages" data={languageTree} selectedItems={this.getSelected}/>
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