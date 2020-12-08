import React from 'react';
import './multi-select.scss';
import CheckboxList from '../Checkbox/checkbox-list';
import PropTypes from 'prop-types';
import CodeBlock from '../../src/app/CodeBlock';

class MultiSelectComponent extends React.Component {  
    constructor(props){
      super(props)
      this.state = {
        selectedOptions: {},
        selectedItems: {},
        newObject: {}
      }
    }

    filterResult = (subOptions) => {
      return subOptions.filter((subOption) => {
        if(subOption.selected) {
          return subOption;
        }
      });
    }

    checkChildren = (options) => {

        // let res = options.subOptions.filter((subOption) => {
        //   if(subOption.selected) {
        //     return subOption;
        //   }
        // });


        if(options.subOptions) {
          this.checkChildren(options.subOptions);
        } else {
          let res = this.filterResult(options);
        }

        // console.log('filtered', res);

        // let newObject = {
        //   id: options.id,
        //   subOptions: res
        // };


        // if(selectedChild) {
        //   // someting is selected - so add paarent;
        //   let filtered = options.subOptions.filter((option) => option.selected);

        //   let newObj = {
        //     ...options.id,
        //     ...options.name,
        //     selected:
        //   }
        // } else {

        //   console.log('po', options);
        // }
    }

    handleCheckListChange = (selectedOptions, selectedItems) => {

      // console.log('outside', selectedOptions);

      if(selectedOptions) {
        let data = this.checkChildren(selectedOptions);
        // console.log('res', data);
      }

      // if(selectedOptions)
      

      this.setState({selectedItems});

      if(this.props.selectedItems) {
        this.props.selectedItems({selectedItems});
      }
    }



    addSelectedId = (child) => {
        child.subOptions.map((sub) => {
          console.log('map');
          if(sub.selected) {
            child.selectedIds = [...sub.id];
          } else {
            child.selectedIds = []
          }
        });
    }

    checkParent(parent) {
      if(parent.subOptions.every((child) => child.selected)){
        parent.selected = true;
      } else if(parent.subOptions.some((child) => child.selected)) {
        parent.selected = 'partial';
      } else {
        parent.selected = false;
      }
    }
    
    processSelection(parent, child, isChildSelected, originalData) {
      console.log('finally', parent, child, originalData);

      if(child.subOptions.length > 0) {
        this.addSelectedId(child);
      } else {
        child.selected = isChildSelected;

        this.checkParent(parent);
      }

      

      // child.selected = isChildSelected;
      this.setState(new Object());
    }

    processFiltered(filtered) {
      filtered.map((item) => {
        if(item.subOptions) {

        } else {

        }
      })

      for(var i=0; i<filtered.length; i++) {
        if(filtered.subOptions) {

        }
      }
    }

    attachChild(parent, result) {

      let filtered = parent.subOptions ? parent.subOptions.filter((option) => {
        if(option.selected === 'selected' || option.selected === 'partial') {
          return option;
        }
      }) : [];

      // console.log('filterred', filtered);

      filtered.forEach((item) => {
        this.attachChild(item, {});
      });


      var newArray = filtered.map((item) => {
        return {
          id: item.id,
          name: item.name,
          selectedChild: item.selectedChild
        }
      });

      parent.selectedChild = newArray;

      console.log('parent', parent);

      if(parent.selectedChild.length == 0) {
        this.props.selectedItems({});
      } else {
        this.props.selectedItems(parent);
      }
    }

    processData(obj, parent) {
      console.log('obj', obj, parent);

      if(parent) {
        if(parent.selected === 'selected' || parent.selected === 'partial') {

          var result = {
            [parent.id] : {
  
            }
          };
  
          if(parent.subOptions) {
            let resp = this.attachChild(parent, result);
          } 
  
          // console.log('res', result);
  
        } else {
          console.log('go unset');
          this.attachChild(parent);  
        }
      } else {

      }
      

      // this.setState({});
    }
    render() {
      const {data, title, align} = this.props;
      
      return (

          <div className="multi-select-container">
             <h2 className="title">{title}</h2>

             <CheckboxList
               options={data} 
               align={align}
               onSelect = {(obj, parent) => {
                 this.processData(obj, parent);
               }}
               onChange={(parent, child, isChildSelected) => {
                 this.processSelection(parent, child, isChildSelected, data);
               }}
               selectedOptions={this.state.selectedItems} 
              />
           </div>
       )
    }
}  

MultiSelectComponent.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  selectedItems: PropTypes.func,
};

export default MultiSelectComponent;
