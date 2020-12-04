import React from 'react';
var classNames = require('classnames');
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

  export default MultiComponent;
