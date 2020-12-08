import React from 'react';
import PropTypes, { element } from 'prop-types';
import CheckboxComponent from './index';

class CheckboxList extends React.Component {

  state = {
    toggle: false
  }

  toggleChild = (option) => {
    // console.log('option', option);
    option.showChild = !option.showChild;

    this.setState({
      toggle: !this.state.toggle
    })

  }

  setAllChildSelected = (selectedObj) => {

    console.log('setAAllChild');
    selectedObj.selected = (!selectedObj.selected || selectedObj.selected === 'none') ? 'selected' : 'none';

    selectedObj.subOptions.forEach((option) => {
      // option.selected = 'selected';
      option.selected = selectedObj.selected;

      if(option.subOptions) {
        this.setAllChildSelected(option);
      }
    });

    // selectedObj.subOptions()
  }

  unSelectAllChild = (selectedObj) => {
    selectedObj.selected = 'none';

    selectedObj.subOptions.forEach((option) => {
      // option.selected = 'selected';
      option.selected = 'none';

      if(option.subOptions) {
        this.unSelectAllChild(option);
      }
    });

  }



  handleSelected = (selectedObj, isSelected, parent) => {
    console.log('handleSelect', selectedObj);

    if(!selectedObj.selected || selectedObj.selected === 'none') {
      if(selectedObj.subOptions && selectedObj.subOptions.length > 0) {
        // it has child
        console.log('child is there');
        this.setAllChildSelected(selectedObj);

      } else {
        console.log('no chidl');
        selectedObj.selected = 'selected';
      }
    } else {
      console.log('sele', selectedObj);
      if(selectedObj.selected === 'selected') {
        selectedObj.selected = 'none';
        if(selectedObj.subOptions && selectedObj.subOptions.length > 0) {
          // it has child
          console.log('unselect all child');
          this.unSelectAllChild(selectedObj);
        }

      } else {
        selectedObj.selected = 'none';
      }
    }

    // if(selectedObj.subOptions && selectedObj.subOptions.length>0) {
    //   selectedObj.subOptions.forEach(element => {
    //     element.selected = 'selected';
    //   });
    // } else {
    //   selectedObj.selected = isSelected;
    // }

      // selectedObj.selected = isSelected ? 'selected' : 'none';
      this.props.onSelect(selectedObj, parent);
  }

  handleOnSelect(selObj, onSelect, parent) {
    // console.log('hd', parent, selObj);

    let every = parent.subOptions.every((sub) => (sub.selected === 'selected'));
    let few = parent.subOptions.some((sub) => (sub.selected === 'selected'));
    
    parent.selected = every ? 'selected' : few ? 'partial' : 'none';

    console.log('handleONSelect', parent);
    this.props.onSelect(selObj, parent);
  }

  render() {

    const {options, onSelect} = this.props;

    return (
        <div>
          {
              options.map((option, index) => {
                  return (
                          <div key={index}>
                              { option.subOptions && option.subOptions.length > 0 && (<i className="fa fa-plus" onClick={() => this.toggleChild(option)}></i>)
                              }
                              <CheckboxComponent
                                  selected={option.selected}
                                  option={option}
                                  label={option.name}
                                  onCheck={(isSelected, selectedObj) => {
                                    this.handleSelected(selectedObj, isSelected, option);
                                  }} />
                              <div style={{padding: 20}}>
                                  {
                                    option.showChild && (
                                      <CheckboxList options={option.subOptions} onSelect={(selectedObj) => this.handleOnSelect(selectedObj, onSelect, option)} />
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

// const CheckboxList = ({ options, onSelect, selectedOptions = {}, onChange, align, parent }) => {

//     console.log('ren', options);
//     const handleCheckboxClicked = (selectedOptionId, option, isSelected) => {

//       let childSelected;
//       if(option.subOptions) {
//         childSelected = checkIfPartiallySelected(option);
//         if(childSelected) {
//           option.selected = isSelected;
//           if(selectedOptions[selectedOptionId]){
//             delete selectedOptions[selectedOptionId];
//           } else {
//             selectedOptions[selectedOptionId] = {};
//           }
//         } else {
//           option.selected = isSelected;
//         }
//       } else {
//         option.selected = isSelected;
//           if(selectedOptions[selectedOptionId]){
//             delete selectedOptions[selectedOptionId];
//           } else {
//             selectedOptions[selectedOptionId] = {};
//           }
//       }

//       onChange(option, selectedOptions);

//       console.log('parent', parent);
//     }

//     /**
//      * handles the child options selection of multiselect component and send the id's of selected items to callback function provides as props.
//      * @param {string} selectedOptionId 
//      * @param {object} option 
//      * @param {object} subSelections 
//      */
    
//     const handleSubOptionsListChange = (selectedOptionId, option, subSelections) => {

//       option.isAllSelected = checkIfAllSelected(option);
//       option.isPartiallySelected = checkIfPartiallySelected(option);

//       console.log('opt', option);

//       if(!option.subOptions || option.subOptions.length == 0) {
//         onSelect(option);
//       }
//       onChange(option, selectedOptions);
//     };

//     /**
//      * checks if atleast one of the child item is selected.
//      * @param {object} option
//      * @returns {boolean}
//      */
//     const checkIfPartiallySelected = (option) => {
//       const isAnyChildSelected = option.subOptions.some((item) => item.selected);
//       return isAnyChildSelected;
//     };

//     /**
//      * checks if all the subOptions(child) are selected.
//      * @param {object} option
//      * @returns {boolean}
//      */

//     const checkIfAllSelected = (option) => {
//       const allSelected = option.subOptions.every((item) => item.selected);
//       return allSelected;
//     };

//     /**
//      * Recursives called till it set all selected options (deeply nested) to be unselected.
//      * @param {object} options 
//      * @return {object} options with all selection flag set to false.
//      */
//     const unCheckAll = (options) => {
//       options.isAllSelected = false;
//       options.isPartiallySelected = false;
//       options.subOptions.forEach(element => {
//         element.selected = false;
//         if(element.subOptions) {
//           unCheckAll(element);
//         } else {
//           return options;
//         }
//       });
//     }

//     /**
//      * This is a callback function executes on click of uncheck all button when nested checkbox is used.
//      * @param {boolean} unselectStatus 
//      * @param {object} option 
//      * @param {string} optionId 
//      */

//     const handleUnseletAll = (unselectStatus, option, optionId) => {
//         if(option.subOptions.length > 0) {
//           let value = unCheckAll(option);
//           option[optionId] = {};
//           selectedOptions[optionId] = {};
//           onChange(option, selectedOptions);
//         }
//     };

//     const handleCheckBox = (isSel, child, option, parent) => {
//       // console.log('handleCheckbox', isSel, child, option, parent);

//       // option.selected = isSel;

//       onChange(parent, child, isSel);
//     }

//     return (
      // <div>
      //   {
      //       options.map((option, index) => {
      //       return (
      //               <div key={index}>
      //                   { option.subOptions && (<div className="fa fa-plus" onClick={}></div>)
      //                   }
      //                   <CheckboxComponent
      //                       selected={option.selected}
      //                       option={option}
      //                       label={option.name}
      //                       onCheck={(isSelected, selectedObj) => {
      //                         handleCheckBox(isSelected, selectedObj, option, parent);
      //                       }}
//                         />
//                         {/* {
//                             (option.subOptions && option.subOptions.length > 0) &&
//                             <ul className={align}>
//                               <CheckboxList 
//                                   options={option.subOptions}
//                                   parent = {option}
//                                   onChange={(par, child, isChildSelected)=> {
//                                     // console.log('captured on change', par, child);
//                                     onChange(par, child, isChildSelected);
//                                   }}
//                               />
//                             </ul>
//                         } */}
//                 </div>
//             )
//         })
//        }
//       </div>
//     )
//   }
  
  CheckboxList.propTypes = {
    options: PropTypes.array, 
    selectedOptions: PropTypes.object, 
    onChange: PropTypes.func,
  };

  export default CheckboxList;