
import React from 'react';
import '../multi-select.scss';
import AnimatedCheckbox from '../../Checkbox/Animated';

class MultiSelectHelper extends React.Component {

    formSelectedItems = (selectedOptions, optionId, type) => {

        if(type && type=='select-all') {

            if(selectedOptions[optionId]){
            } else {
                selectedOptions[optionId] = {};
            }
    
        } else if(type && type=='deselect-all') {

            if(selectedOptions[optionId]){
                delete selectedOptions[optionId];
            } else {
                // selectedOptions[optionId] = {};
            }
    
        } else {
            if(selectedOptions[optionId]){
                delete selectedOptions[optionId];
            } else {
                selectedOptions[optionId] = {};
            }    
        }

    }

    checkBoxClicked= (isChecked, item, selectedOptions, checkedState) => {

        item.selected = isChecked;
        item.checkState = isChecked ? 'checked' : 'dont-select';
        this.formSelectedItems(selectedOptions, item.id);
        this.props.selectedItems(selectedOptions);
    }

    checkParentBoxClicked = (isChecked, item, selectedOptions, data) => {
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
            this.formSelectedItems(selectedOptions, item.id);
        }

        this.props.selectedItems(selectedOptions);
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

    handleSelection = (item, selectedOptions) => {

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

        // this.formSelectedItems(selectedOptions[item.id], selectedOptions)
        this.props.selectedItems(selectedOptions);
    }

    checkAllNested(item, selectedOptions) {
        if(item.subOptions.length > 0) {
            item.subOptions.map((subItem) => {
                subItem.checkState = 'checked';
                subItem.selected = true;
                subItem.allSelected = true;
                
                if(subItem.subOptions) {
                    if(selectedOptions[item.id][subItem.id]) {
                    } else {
                        selectedOptions[item.id][subItem.id] = {};
                    }
                    this.checkAllNested(subItem, selectedOptions[item.id]);
                    // this.formSelectedItems(selectedOptions[item.id], subItem.id, 'select-all');
                } else {
                    if(selectedOptions[item.id][subItem.id]) {
                    } else {
                        selectedOptions[item.id][subItem.id] = {};
                    }
                }
            });
        }
    }

    uncheckAllNested(item, selectedOptions ) {
        if(item.subOptions.length > 0) {
            item.subOptions.map((subItem) => {
                subItem.checkState = 'un-checked';
                subItem.selected = false;
                subItem.allSelected = false;
                if(subItem.subOptions) {
                    this.uncheckAllNested(subItem, selectedOptions[item.id]);
                } else {
                    subItem.checkState = 'un-checked';
                    subItem.allSelected = false;
                }
                this.formSelectedItems(selectedOptions[item.id], subItem.id, 'deselect-all');
            });
        }
    }

    onSelectAll = (isAllSelected, item, selectedOptions) => {

        if(isAllSelected) {
            this.checkAllNested(item, selectedOptions);
        } else {
            this.uncheckAllNested(item, selectedOptions);
        }

        item.allSelected = isAllSelected;
        item.checkState = isAllSelected ? 'checked' : 'show-child';

        this.props.selectedItems(selectedOptions);
    }

    render() {

        const {selectedOptions, data} = this.props;

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
                                                onChange={(isChecked, checkedState) => this.checkParentBoxClicked(isChecked, item, selectedOptions, checkedState)} />
                                        {
                                            item.selected && 
                                            <div style={{paddingLeft: 20}}>
                                                <AnimatedCheckbox
                                                        label={item.allSelected ? "Unselect all" : "Select All"}
                                                        style={{background: 'rgba(0,0,0,0.1)', color: 'grey'}}
                                                        checked={item.allSelected}
                                                        checkState={item.allSelected ? 'checked' : 'un-checked'}
                                                        onChange={(isChecked, checkedState) => 
                                                            this.onSelectAll(isChecked, item, selectedOptions, checkedState)
                                                        }
                                                />
                                                <MultiSelectHelper data={item.subOptions}
                                                    data={item.subOptions}
                                                    selectedOptions={selectedOptions[item.id]}
                                                    selectedItems={(data) => {
                                                        this.handleSelection(item, selectedOptions)
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
                                    onChange={(isChecked, checkedState) => this.checkBoxClicked(isChecked, item, selectedOptions, checkedState)} />
                            )
                        }
                    })
                }
            </div>
        )
    }

}

export default MultiSelectHelper;