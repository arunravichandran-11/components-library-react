import React from 'react';
import './multi-select.scss';
import CheckboxList from '../Checkbox/checkbox-list';
import PropTypes from 'prop-types';

class MultiSelectComponent extends React.Component {  
    constructor(props){
      super(props)
      this.state = {
        selectedOptions: {},
        selectedItems: {},
      }
    }

    handleCheckListChange = (selectedOptions, selectedItems) => {
      this.setState({selectedItems});

      if(this.props.selectedItems) {
        this.props.selectedItems({selectedItems});
      }
    }
    
    render() {
      const {data, title} = this.props;
      
      return (

          <div className="multi-select-container">
             <h2 className="title">{title}</h2>

             <CheckboxList
               options={data} 
               onChange={this.handleCheckListChange}
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
