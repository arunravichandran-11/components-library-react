import React from 'react';
// import AnimatedMultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select/Animated';

import AnimatedMultiSelectComponent from '@Components/Multi-Select/Animated';

import CodeBlock from '../../../CodeBlock';

const frameworkTree = [
  {
      name: "JavaScript Frameworks",
      id: "JS-id",
      subOptions: [
          {
              name: "Angular",
              id: "JS-an-id",
              subOptions: [
                {
                    name: "AngualrJS",
                    id: "ng-id",
                    subOptions: [
                        {
                            name: "Version-1",
                            id: "ng-v-1-id",
                            subOptions: []
                        },
                        {
                            name: "Version-2",
                            id: "ng-v-2-id",
                            subOptions: []
                        }
                    ]
                },
                {
                    name: "Angular2+",
                    id: "a2+-id",
                    subOptions: [
                        {
                            name: "Version-7",
                            id: "ng-7-id",
                            subOptions: []
                        },
                        {
                            name: "Version-9",
                            id: "ng-9-id",
                            subOptions: []
                        }
                    ]
                }
              ]
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


class AnmatedMultiSelectExample extends React.Component {

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
                <AnimatedMultiSelectComponent title="Projects" data={frameworkTree} selectedItems={this.getSelected}/>
            </div>
        )
    }
}

export default AnmatedMultiSelectExample;