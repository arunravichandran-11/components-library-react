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
    
    render() {
      const {data, title} = this.props;
      
      return (

          <div>
             <h1>{title}</h1>

             <CheckboxList
               options={data} 
               onChange={(selectedOptions, selectedItems) => {

                this.setState({selectedItems});

                if(this.props.selectedItems) {
                  this.props.selectedItems({selectedItems});
                }
                
               }}
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
