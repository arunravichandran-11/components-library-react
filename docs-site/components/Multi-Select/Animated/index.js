
import React from 'react';
import '../multi-select.scss';
import AnimatedCheckbox from '../../Checkbox/Animated';

class AnimatedMultiSelectComponent extends React.Component {

    checkBoxClicked= (isChecked, item, inputData=null) => {
        item.selected = isChecked;
        item.checkState = isChecked ? 'checked' : 'dont-select';   
        this.props.selectedItems(inputData);
    }

    unCheckAll = (options) => {
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

    checkParentBoxClicked = (isChecked, item, inputData=null) => {
        let anythingchecked = this.checkIfAnyChildChecked(item);
        let isEveryChildChecked = this.checkIfAllChildChecked(item);
        let anyIndeterminate = this.checkIfSomeIntermediate(item);

        if(isEveryChildChecked) {
            item.checkState = 'checked';
            item.selected = isChecked;
        } else if(anythingchecked || anyIndeterminate) {
            item.checkState = 'indeterminate';
            item.selected = isChecked;
        } else {
            item.checkState = isChecked ? 'show-child' : 'new-logic';
            item.selected = isChecked;
        }   

        this.props.selectedItems(inputData);
    }

    checkIfAllSelected = (item) => {
        return item.subOptions.every((option) => option.selected);
    }

    checkIfAnyChildChecked = (item) => {
        return item.subOptions.some((option) => (option.checkState==='checked'));
    }

    checkIfAllChildChecked = (item) => {
        return item.subOptions.every((option) => (option.checkState==='checked'));
    }

    checkIfAllIntermediate = (item) => {
        return item.subOptions.every((option) => (option.checkState==='indeterminate'));
    }

    checkIfSomeIntermediate = (item) => {
        return item.subOptions.some((option) => (option.checkState==='indeterminate'));
    }

    checkIfAnyChildSelected = (item) => {
        let isSomethingSelected = item.subOptions.some((option) => option.selected);
        return isSomethingSelected;
    }

    handleSelection = (item, data) => {

        if(item.subOptions) {
            let anythingchecked = this.checkIfAnyChildChecked(item);
            let isEveryChildChecked = this.checkIfAllChildChecked(item);
            let anyIndeterminate = this.checkIfSomeIntermediate(item);
            if(isEveryChildChecked) {
                item.checkState = 'checked';
                item.allSelected = true;
            } else if(anythingchecked || anyIndeterminate) {
                item.checkState = 'indeterminate';
                item.allSelected = false;
            } else {
                item.checkState = item.selected ? 'show-child' : 'un-checked';
                item.allSelected = false;
            }
        }
        this.props.selectedItems(data);
    }

    checkAllNested(item) {
        if(item.subOptions.length > 0) {
            item.subOptions.map((subItem) => {
                subItem.checkState = 'checked';
                subItem.allSelected = true;
                if(subItem.subOptions) {
                    this.checkAllNested(subItem);
                }
            });
        }
    }

    uncheckAllNested(item) {
        if(item.subOptions.length > 0) {
            item.subOptions.map((subItem) => {
                subItem.checkState = 'un-checked';
                subItem.allSelected = false;
                if(subItem.subOptions) {
                    this.uncheckAllNested(subItem);
                } else {
                    subItem.checkState = 'un-checked';
                    subItem.allSelected = false;
                }
            });
        }
    }

    onSelectAll = (isAllSelected, item) => {

        if(isAllSelected) {
            this.checkAllNested(item);
        } else {
            this.uncheckAllNested(item);
        }

        item.allSelected = isAllSelected;
        item.checkState = isAllSelected ? 'checked' : 'show-child';

        this.props.selectedItems({item});
    }

    render() {
        return (
            <div className="animated-multi-select-wrapper">
                { 
                    this.props.data.map((item) => {                      
                        if(item.subOptions && item.subOptions.length > 0) {
                            return (
                                <div key={item.id}>
                                    <AnimatedCheckbox hasChild={true}
                                        checked={item.selected}
                                                key={item.id} label={item.name}
                                                checked={item.selected}
                                                checkState={item.checkState}
                                                onChange={(isChecked) => this.checkParentBoxClicked(isChecked, item)} />
                                        {
                                            item.selected && 
                                            <div style={{paddingLeft: 20}}>
                                                <AnimatedCheckbox
                                                        label="Select All"
                                                        style={{background: 'rgba(0,0,0,0.1)', color: 'grey'}}
                                                        checked={item.allSelected}
                                                        checkState={item.allSelected ? 'checked' : 'un-checked'}
                                                        onChange={(isChecked) => 
                                                            this.onSelectAll(isChecked, item)
                                                        }
                                                />
                                                <AnimatedMultiSelectComponent data={item.subOptions} 
                                                    selectedItems={(data) => {
                                                        this.handleSelection(item, data)
                                                    }} />
                                            </div>
                                        }
                                    
                                </div>
                            )
                        }
                        else {
                            return (
                                <AnimatedCheckbox key={item.id} 
                                    label={item.name}
                                    checked={item.selected}
                                    checkState={item.checkState}
                                    onChange={(isChecked) => this.checkBoxClicked(isChecked, item)} />
                            )
                        }
                    })
                }
            </div>
        )
    }

}

export default AnimatedMultiSelectComponent;