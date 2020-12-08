import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './check-box';

class CheckboxList extends React.Component {

  state = {
    toggle: false
  }

  toggleChild = (option) => {
    option.showChild = !option.showChild;
    this.setState({
      toggle: !this.state.toggle
    })
  }

  setAllChildSelected = (selectedObj) => {
    selectedObj.selected = (!selectedObj.selected || selectedObj.selected === 'none') ? 'selected' : 'none';
    selectedObj.selected = 'selected';
    selectedObj.subOptions.forEach((option) => {
      option.selected = 'selected';
      if(option.subOptions) {
        this.setAllChildSelected(option);
      }
    });
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

  handleSelected = (selectedObj, isSelected, parent) => {

    if(!selectedObj.selected || selectedObj.selected === 'none') {
      if(selectedObj.subOptions && selectedObj.subOptions.length > 0) {
        this.setAllChildSelected(selectedObj);
      } else {
        selectedObj.selected = 'selected';
      }
    } else {
      if(selectedObj.selected === 'selected' || selectedObj.selected === 'partial') {
        selectedObj.selected = 'none';
        if(selectedObj.subOptions && selectedObj.subOptions.length > 0) {
          this.unSelectAllChild(selectedObj);
        }
      } else {
        selectedObj.selected = 'none';
      }
    }

      this.props.onSelect(selectedObj, parent);
  }

  handleOnSelect(selObj, onSelect, parent) {
    let every = parent.subOptions.every((sub) => (sub.selected === 'selected'));
    let few = parent.subOptions.some((sub) => (sub.selected === 'selected'));
    parent.selected = every ? 'selected' : few ? 'partial' : 'none';
    this.props.onSelect(selObj, parent);
  }

  render() {

    const {options, onSelect} = this.props;

    return (
        <div className="nested-check-list-container">
          {
              options.subOptions.map((option, index) => {
                  let childCondition = (option.subOptions && option.subOptions.length > 0);
                  return (
                          <div key={index} className={`check-box-wrapper ${childCondition ? 'isParent': ''}`}>
                              { 
                                childCondition && (
                                  <i className={`fa ${option.showChild ? 'fa-caret-down' : 'fa-caret-right'} toggle-icon`} 
                                      onClick={() => this.toggleChild(option)}
                                  >
                                  </i>
                                  )
                              }
                              <CheckBox
                                  selected={option.selected}
                                  option={option}
                                  label={option.name}
                                  onCheck={(isSelected, selectedObj) => {
                                    this.handleSelected(selectedObj, isSelected, options);
                                  }} />

                                  {
                                    option.showChild && (
                                      <div className="check-list-wrapper">
                                        <CheckboxList options={option} onSelect={(selectedObj) => this.handleOnSelect(selectedObj, onSelect, option)} />
                                       </div>
                                    )
                                  }
                          </div>
                  )
              })
          }
        </div>
                  
    )
  }
}

CheckboxList.propTypes = {
  // options: PropTypes.array,
  onChange: PropTypes.func,
};

export default CheckboxList;