import React from 'react';
import './nested-tree.scss';
import NodeList from './tree-node-list';
import PropTypes from 'prop-types';

class NestedTree extends React.Component {  
    
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
            <NodeList
              options={data}
              align={align}
              onSelect = {this.onCheckListSelection} 
            />
          </div>
      )
  }
}  

NestedTree.defaultProps = {
  align : 'vertical'
}

NestedTree.propTypes = {
  data: PropTypes.object.isRequired,
  align: PropTypes.string,
  // optionalEnum: PropTypes.oneOf(['News', 'Photos']),
  title: PropTypes.string,
  selectedItems: PropTypes.func,
};

export default NestedTree;
