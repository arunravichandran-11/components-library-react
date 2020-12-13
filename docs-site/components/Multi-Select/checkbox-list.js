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

  handleOnSelect(checkState, option) {
    console.log('chec', option)
    // let every = parent.subOptions.every((sub) => (sub.selected === 'selected'));
    // let few = parent.subOptions.some((sub) => (sub.selected === 'selected'));
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

  formSelectedObj = (option) => {


    let optionId = option.id;
    if(this.selectedItem[option.id]) {
      var obj = {company: {}, model: {}, "Bike-id": {}};
      //obj = this.selectedItem;
      const { ...newobj } = obj;

      console.log('dummy', newobj);

      // const { optionId, ...newobj } = this.selectedItem;
      // console.log('obj----->', optionId, newobj);
    } else {
      this.selectedItem = {
        ...this.selectedItem,
        [option.id] : {}
      };
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

    console.log('select', selectedOption);


    this.formSelectedObj(selectedOption, selectedOption)

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
                                  indeterminate={option.indeterminate}
                                  onChange={(checkState) => {
                                    console.log('ise', checkState);
                                    this.handleSelected(checkState, option, option.subOptions);
                                  }} />
                              <div style={{padding: 2}}>
                                  {
                                    option.showChild && (
                                      <CheckboxList 
                                        options={option.subOptions} 
                                        onSelect={(selectedObj) => this.handleOnSelect(selectedObj, onSelect, option)} />
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