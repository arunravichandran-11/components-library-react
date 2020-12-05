import React from 'react';
import PropTypes from 'prop-types';
import CheckboxComponent from './index';

const CheckboxList = ({ options, selectedOptions, onChange }) => {

    const handleCheckboxClicked = (selectedOptionId, option, isSelected) => {
      option.selected = isSelected;
      if(selectedOptions[selectedOptionId]){
        delete selectedOptions[selectedOptionId];
      } else {
        selectedOptions[selectedOptionId] = {};
      }
      onChange(option, selectedOptions);
    }

    /**
     * handles the child options selection of multiselect component and send the id's of selected items to callback function provides as props.
     * @param {string} selectedOptionId 
     * @param {object} option 
     * @param {object} subSelections 
     */
    
    const handleSubOptionsListChange = (selectedOptionId, option, subSelections) => {
      option.isAllSelected = checkIfAllSelected(option);
      option.isPartiallySelected = checkIfPartiallySelected(option);
      onChange(option, selectedOptions);
    };

    /**
     * checks if atleast one of the child item is selected.
     * @param {object} option
     * @returns {boolean}
     */
    const checkIfPartiallySelected = (option) => {
      const isAnyChildSelected = option.subOptions.some((item) => item.selected);
      return isAnyChildSelected;
    };

    /**
     * checks if all the subOptions(child) are selected.
     * @param {object} option
     * @returns {boolean}
     */

    const checkIfAllSelected = (option) => {
      const allSelected = option.subOptions.every((item) => item.selected);
      return allSelected;
    };

    /**
     * Recursives called till it set all selected options (deeply nested) to be unselected.
     * @param {object} options 
     * @return {object} options with all selection flag set to false.
     */
    const unCheckAll = (options) => {
      options.isAllSelected = false;
      options.isPartiallySelected = false;
      options.subOptions.forEach(element => {
        element.selected = false;
        if(element.subOptions) {
          unCheckAll(element);
        } else {
          return options;
        }
      });
    }

    /**
     * This is a callback function executes on click of uncheck all button when nested checkbox is used.
     * @param {boolean} unselectStatus 
     * @param {object} option 
     * @param {string} optionId 
     */

    const handleUnseletAll = (unselectStatus, option, optionId) => {
        if(option.subOptions.length > 0) {
          let value = unCheckAll(option);
          option[optionId] = {};
          selectedOptions[optionId] = {};
          onChange(option, selectedOptions);
        }
    };

    return (
      <div>
        {
            options.map((option, index) => {
            return (
                    <div key={index}>
                        <CheckboxComponent
                            selected={option.selected}
                            label={option.name}
                            allSelected={option.isAllSelected}
                            isPartiallySelected={option.isPartiallySelected}
                            hasChild={option.subOptions ? option.subOptions.length > 0 : false}
                            onUnselect={(unselectStatus) => handleUnseletAll(unselectStatus, option, option.id)}
                            onCheck={(isSelected) => {
                              handleCheckboxClicked(option.id, option, isSelected);
                            }}
                        />
                        {
                            (option.subOptions && option.subOptions.length > 0 && option.selected) &&
                            <ul>
                              <CheckboxList 
                                  options={option.subOptions}
                                  allChecked = {option.isAllSelected} 
                                  selectedOptions={selectedOptions[option.id]}
                                  onChange={(subSelections) => {
                                      handleSubOptionsListChange(option.id, option, subSelections)
                                  }}
                              />
                            </ul>
                        }
                </div>
            )
        })
       }
      </div>
    )
  }
  
  CheckboxList.propTypes = {
    options: PropTypes.array, 
    selectedOptions: PropTypes.object, 
    onChange: PropTypes.func,
  };

  export default CheckboxList;