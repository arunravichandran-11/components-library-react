import React from 'react';
import '../multi-select.scss';
import CheckboxList from './check-list';
import PropTypes from 'prop-types';

class NestedTree extends React.Component {  
    constructor(props){
      super(props);

      this.selectedItems = [];
      this.state = {
        selectedOptions: {},
        selectedItems: {},
      }
    }

    formSelectedObject(obj) {
      const res = {};
      function getSelectedOption(obj, parent) {
        if(obj.subOptions) {
          let filtered = obj.subOptions.filter(option => ((option.selected === 'selected') || option.selected === 'partial'));
          if(filtered.length > 0) {
            parent[obj.id] = {};
            filtered.forEach((item) => {
              if(item.selected === 'selected' || item.selected === 'partial') {
                parent[obj.id][item.id] = {};
                getSelectedOption(item, parent[obj.id]);
              }
            });
          }
        }
      }
      getSelectedOption(obj, res);
    
      return res;
  }
  

    filterSelected = (data) => {
      let selectedResult = this.formSelectedObject(data);
      this.props.selectedItems(selectedResult);
    }

    onCheckListSelection = () => {
      this.filterSelected(this.props.data);  
    }

    render() {
      const {data, title, align} = this.props;

      return (

          <div className="multi-select-container nested-tree-container">
             <h2 className="title">{title}</h2>
             <CheckboxList
               options={data}
               align={align}
               onSelect = {this.onCheckListSelection}
               selectedOptions={this.state.selectedItems} 
              />
           </div>
       )
    }
}  

NestedTree.propTypes = {
  // data: PropTypes.array,
  title: PropTypes.string,
  selectedItems: PropTypes.func,
};

export default NestedTree;
