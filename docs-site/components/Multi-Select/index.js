import React from 'react';
import './multi-select.scss';
import CheckboxList from './checkbox-list';
import PropTypes from 'prop-types';

class MultiSelectComponent extends React.Component {  
    constructor(props){
      super(props);
      this.selectedItem = {};
      this.state = {
        selectedOptions: {},
        selectedItems: {},
      }
    }

    handleCheckListChange = (selectedItems, selectedOptions) => {

      console.log('selectedOptions', selectedOptions);
      this.setState({
        selectedItems : selectedItems
      });

      // if(this.props.selectedOptions) {
      //   this.props.selectedItems({selectedOptions});
      // }
    }

    formSelectedObj = (option, child) => {
      let optionId = option.id;
      // console.log('this.selectedItem', this.selectedItem);
      if(this.selectedItem[option.id]) {
        const filtered = Object.keys(this.selectedItem).reduce((object, key) => {
          if (key !== optionId) {
            object[key] = this.selectedItem[key]
          }
          return object
        }, {});
        this.selectedItem = filtered;
      } else {
  
        console.log('this.selectedItem', this.selectedItem);
        this.selectedItem = {
          ...this.selectedItem,
          [option.id] : {}
        };
  
        if(child) {
          this.selectedItem[option.id] = child;
        }
      }
  
    }

    setFlags = (data) => {
      data.checked = data.indeterminate = false;

      if(data.subOptions && data.subOptions.length > 0) {
        data.subOptions.forEach(element => {
          this.setFlags(element);
        });
      }

      return data;
    }
    
    render() {
      const { title, align} = this.props;

      console.log('this.state', this.state.selectedItems);
      
      const data = this.setFlags(this.props.data);

      return (

          <div className="multi-select-container">
             <h2 className="title">{title}</h2>

             <CheckboxList
                options={data.subOptions} 
                align={align}
                onSelect={this.handleCheckListChange}
                selectedItem={this.state.selectedItems}
              />
           </div>
       )
    }
}  

MultiSelectComponent.propTypes = {
  data: PropTypes.any,
  title: PropTypes.string,
  selectedItems: PropTypes.func,
};

export default MultiSelectComponent;
