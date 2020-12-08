import React from 'react';
import MultiSelectComponent from '@Components/Multi-Select';
import CodeBlock from '../../../CodeBlock';

const projectTree = [
  {
    name: "Pulse",
    id: "pulse-id",
    subOptions: [
      {
        name: "Cosmo",
        id: "cosmo-id",
        subOptions: [
          {
              name: "My_pedia",
              id: "my-pedia-id",
          },
        ],
      },
      {
        name: "Letura",
        id: "letura-id",
        subOptions: [
        ],
      },
    ]
  },
  {
    name: "Wall Street English",
    id: "wse-id",
    subOptions: [
      {
        name: "NSE",
        id: "nse-id",
        subOptions: [
          {
            name: "Learning Service",
            id: 'ls-id',
            subOptions: [
              {
                  name: "Digital Classroom",
                  id: 'DC-id',
                  subOptions: [],
              },
              {
                  name: "Activity Player",
                  id: 'IAP-id',
                  subOptions: [],
              },
            ],
          },
          {
            name: "Teaching Service",
            id: 'ts-id',
            subOptions:[]
          },
        ]
      },
      {
        name: "Marketting",
        id: 'marketting-id',
        subOptions: [],
      }
    ]
  },
];

class DeeplyNestedMultiSelectExample extends React.Component {

    state = {
        selectedItems: null,
    }

    getSelected = (selectedItem) => {

        console.log('gett', selectedItem);

        var resultSelectedItems = {
          id: selectedItem.id,
          name: selectedItem.name,
          selectedChild: selectedItem.selectedChild
        };
        
        this.setState({
            selectedItems: resultSelectedItems
        });
    }

    render() {
        return (
            <div>
                <MultiSelectComponent title="Projects" data={projectTree} selectedItems={this.getSelected}/>

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

export default DeeplyNestedMultiSelectExample;