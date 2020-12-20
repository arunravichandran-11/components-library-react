import React from 'react';

import IconCheckBox from '../Checkbox/Icon-Checkbox';

class NodeList extends React.Component {

  state = {
    toggle: false
  }

  toggleChild = (option) => {
    option.showChild = !option.showChild;
    this.setState({
      toggle: !this.state.toggle
    })
  }

  setAllChildSelected = (selectedOption) => {
    selectedOption.selected = (!selectedOption.selected || selectedOption.selected === 'none') ? 'selected' : 'none';
    selectedOption.selected = 'selected';
    selectedOption.subOptions.forEach((option) => {
      option.selected = 'selected';
      if(option.subOptions) {
        this.setAllChildSelected(option);
      }
    });
  }

  unSelectAllChild = (selectedOption) => {
    selectedOption.selected = 'none';
    selectedOption.subOptions.forEach((option) => {
      option.selected = 'none';
      if(option.subOptions) {
        this.unSelectAllChild(option);
      }
    });
  }

  handleSelected = (selectedOption, parent) => {
    if(!selectedOption.selected || selectedOption.selected === 'none') {
      if(selectedOption.subOptions && selectedOption.subOptions.length > 0) {
        this.setAllChildSelected(selectedOption);
      } else {
        selectedOption.selected = 'selected';
      }
    } else {
      if(selectedOption.selected === 'selected' || selectedOption.selected === 'partial') {
        selectedOption.selected = 'none';
        if(selectedOption.subOptions && selectedOption.subOptions.length > 0) {
          this.unSelectAllChild(selectedOption);
        }
      } else {
        selectedOption.selected = 'none';
      }
    }

      this.props.onSelect(selectedOption, parent);
  }

  handleOnSelect(selObj, onSelect, parent) {
    let every = parent.subOptions.every((sub) => (sub.selected === 'selected'));
    let few = parent.subOptions.some((sub) => (sub.selected === 'selected'));
    parent.selected = every ? 'selected' : few ? 'partial' : 'none';
    this.props.onSelect(selObj, parent);
  }

  render() {

    const {options, onSelect, align} = this.props;

    return (
        <div className="nested-check-list-container">
          {
            options.subOptions.map((option, index) => {
                let childCondition = (option.subOptions && option.subOptions.length > 0);
                return (
                  <div key={index} className={`check-box-wrapper ${align}`}>
                      { 
                        childCondition && (
                          <i className={`fa ${option.showChild ? 'fa-caret-down' : 'fa-caret-right'} toggle-icon`} 
                              onClick={() => this.toggleChild(option)}
                          >
                          </i>
                          )
                      }
                      <IconCheckBox
                          checkedstate={option.selected}
                          label={option.name}
                          onCheck={(isSelected) => {
                            this.handleSelected(option, options, isSelected);
                          }} />

                          {
                            option.showChild && (
                              <div className="check-list-wrapper">
                                <NodeList options={option} 
                                          align={align}
                                          onSelect={(selectedOption) => this.handleOnSelect(selectedOption, onSelect, option)} 
                                />
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

export default NodeList;