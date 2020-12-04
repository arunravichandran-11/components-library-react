import React from 'react';
import MultiComponent from '@Components/Multi-Select';
import CodeBlock from '../../CodeBlock';

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
              subOptions: [],
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

class MultiSelectDemoComponent extends React.Component {

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
                <MultiComponent title="Projects" data={projectTree} selectedItems={this.getSelected}/>
                {this.state.selectedItems &&
                <CodeBlock>
                 { JSON.stringify(this.state.selectedItems, null, 3) }
                </CodeBlock>
                }
            </div>
        )
    }
}

export default MultiSelectDemoComponent;