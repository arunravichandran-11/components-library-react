import React from 'react';
import PropTypes from 'prop-types';
import CheckboxComponent from './index';

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

    selectedObj.subOptions.forEach((option) => {
      option.selected = selectedObj.selected;
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
        <div>
          {
              options.map((option, index) => {
                  return (
                          <div key={index}>
                              { 
                                option.subOptions && option.subOptions.length > 0 && (<i className="fa fa-plus" onClick={() => this.toggleChild(option)}></i>)
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
  onChange: PropTypes.func,
};

export default CheckboxList;