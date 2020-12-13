import React from 'react';
import PropTypes from 'prop-types';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';
import SimpleCheckbox from 'sample-react-lib-by-arun/lib/SimpleCheckbox'; 

class CheckboxList extends React.Component {

  selectedItem = {}

  state = {
    toggle: false,
    selectedOption: null
  }

  toggleChild = (option) => {
    option.showChild = !option.showChild;
    this.setState({
      toggle: !this.state.toggle
    })
  }


  unSelectAllChild = (selectedObj) => {
    selectedObj.selected = 'none';
    selectedObj.subOptions.forEach((option) => {
      option.selected = 'none';
      if(option.subOptions) {
        this.unSelectAllChild(option);
      }
    });
  }



  // handleSelected = (selectedObj, isSelected, parent) => {
  //   if(!selectedObj.selected || selectedObj.selected === 'none') {
  //     if(selectedObj.subOptions && selectedObj.subOptions.length > 0) {
  //       this.setAllChildSelected(selectedObj);
  //     } else {
  //       selectedObj.selected = 'selected';
  //     }
  //   } else {
  //     if(selectedObj.selected === 'selected' || selectedObj.selected === 'partial') {
  //       selectedObj.selected = 'none';
  //       if(selectedObj.subOptions && selectedObj.subOptions.length > 0) {
  //         this.unSelectAllChild(selectedObj);
  //       }
  //     } else {
  //       selectedObj.selected = 'none';
  //     }
  //   }

  //   this.props.onSelect(selectedObj, parent);
  // }

  // handleOnSelect(selObj, onSelect, parent) {
  //   let every = parent.subOptions.every((sub) => (sub.selected === 'selected'));
  //   let few = parent.subOptions.some((sub) => (sub.selected === 'selected'));
  //   parent.selected = every ? 'selected' : few ? 'partial' : 'none';
  //   this.props.onSelect(selObj, parent);
  // }

  handleOnSelect = (selectedItem, parentObj) => {

    console.log('jand', parentObj);
    // if(parentObj && parentObj.subOptions && parentObj.subOptions.length > 0) {
      let every = parentObj.subOptions.every((sub) => (sub.checked));
      let few = parentObj.subOptions.some((sub) => (sub.checked));  
    // }

    console.log('eve', every, few);
    if(every) {
      parentObj.checked = true;
      parentObj.indeterminate = false;
    } else if(few) {
      parentObj.checked = false;
      parentObj.indeterminate = true;
    } else {
      parentObj.checked = false;
      parentObj.indeterminate = false;
    }
    
    console.log('receiived', selectedItem);
    // this.formSelectedObj(parentObj, selectedItem);
    if(parentObj) {
      this.selectedItem = {
        [parentObj.id]: selectedItem
      }
    } else {
      // no child case
      console.log('np child');
    }
    if(this.props.onSelect) {
      console.log('pare', parentObj, this.selectedItem);
      this.props.onSelect(this.selectedItem, parentObj);
    }

    // parent.selected = every ? 'selected' : few ? 'partial' : 'none';
    // this.props.onSelect(selObj, parent);
  }

  // setAllChildSelected = (selectedObj) => {
  //   selectedObj.selected = (!selectedObj.selected || selectedObj.selected === 'none') ? 'selected' : 'none';

  //   selectedObj.subOptions.forEach((option) => {
  //     option.selected = selectedObj.selected;
  //     if(option.subOptions) {
  //       this.setAllChildSelected(option);
  //     }
  //   });
  // }

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

      console.log('Js - this.selectedItem', this.selectedItem);
      this.selectedItem = {
        ...this.selectedItem,
        [option.id] : {}
      };

      if(child) {
        this.selectedItem[option.id] = child;
      }
    }

  }

  setAllChildSelected = (subOptions, state) => {
    subOptions.forEach((option) => {
      option.checked = state;
      option.indeterminate = false;

      if(option.checked) {
        this.formSelectedObj(subOptions);
      } else {
        this.formSelectedObj(subOptions);
      }

      if(option.subOptions) {
        this.setAllChildSelected(option);
      }
    })
  }

  handleSelected = (checkState, selectedOption, selectedSubOptions) => {
    selectedOption.checked = checkState.checked;
    selectedOption.indeterminate = false;
    if(selectedSubOptions && selectedSubOptions.length > 0) {
      this.setAllChildSelected(selectedSubOptions, checkState.checked);
    }

    this.formSelectedObj(selectedOption, null);

    console.log('res', this.selectedItem);

    this.props.onSelect(this.selectedItem, selectedOption);

    // this.props.onSelect(selectedObj, parent);
  }

  render() {

    const {options, onSelect} = this.props;

    return (
        <div>
          
          {
              options.map((option, index) => {

                  return (
                          <div key={index}>
                              { 
                                option.subOptions && option.subOptions.length > 0 && (<i className="fa fa-caret-right" onClick={() => this.toggleChild(option)}></i>)
                              }
                              <SimpleCheckbox
                                  checked={option.checked}
                                  label={option.name}
                                  value={option.name}
                                  // indeterminate={option.indeterminate}
                                  onChange={(checkState) => {
                                    this.handleSelected(checkState, option, option.subOptions);
                                  }} />
                              <div style={{padding: 2}}>
                                  {
                                    option.showChild && (
                                      <CheckboxList 
                                        options={option.subOptions} 
                                        onSelect={(selectedObj) => this.handleOnSelect(selectedObj, option)} />
                                    )
                                  }
                              </div>
                          </div>
                  )
              })
          }
        </div>
    )
  }
}

CheckboxList.propTypes = {
  options: PropTypes.array, 
  selectedOptions: PropTypes.object, 
  onSelect: PropTypes.func,
};

export default CheckboxList;


// options.map((option, index) => {
//   return (
//           <div key={index}>
//               { 
//                 option.subOptions && option.subOptions.length > 0 && (<i className="fa fa-plus" onClick={() => this.toggleChild(option)}></i>)
//               }
//               <CheckboxComponent
//                   selected={option.selected}
//                   option={option}
//                   label={option.name}
//                   onCheck={(isSelected, selectedObj) => {
//                     this.handleSelected(selectedObj, isSelected, option);
//                   }} />
//               <div style={{padding: 2}}>
//                   {
//                     option.showChild && (
//                       <CheckboxList 
//                         options={option.subOptions} 
//                         onSelect={(selectedObj) => this.handleOnSelect(selectedObj, onSelect, option)} />
//                     )
//                   }
//               </div>
//           </div>
//   )
// })