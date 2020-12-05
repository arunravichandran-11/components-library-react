import React from 'react';
import './multi-select.scss';
var classNames = require('classnames');
import PropTypes from 'prop-types';
import CheckboxList from '../Checkbox/checkbox-list';

  class MultiComponent extends React.Component {  
    constructor(props){
      super(props)
      this.state = {
        selectedOptions: {},
        selectedItems: {},
        codeShowing: false
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

          <div>
             <h2>{title}</h2>

             <CheckboxList
               options={data} 
               onChange={this.handleCheckListChange}
               selectedOptions={this.state.selectedItems} 
              />
           </div>
       )
    }
  }  

  MultiComponent.propTypes = {
    data: PropTypes.array,
    title: PropTypes.string,
    selectedItems: PropTypes.func,
  };

  export default MultiComponent;
