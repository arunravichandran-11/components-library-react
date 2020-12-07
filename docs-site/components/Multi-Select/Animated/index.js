
import React from 'react';
import '../multi-select.scss';
import AnimatedCheckbox from '../../Checkbox/Animated';

class AnimatedMultiSelectComponent extends React.Component {

    checkBoxClicked= (isChecked, item, inputData=null) => {
        item.selected = isChecked;
        item.checkState = isChecked ? 'checked' : 'dont-select';   

        this.props.selectedItems(inputData);
        
    }
    checkParentBoxClicked = (isChecked, item, inputData=null) => {
        item.selected = isChecked;
        this.props.selectedItems(inputData);
    }

    handleSelection = (item, data) => {

        if(item.subOptions) {
            let isSomethingSelected = item.subOptions.some((option) => option.selected);
            let isEvery = item.subOptions.every((option) => option.selected);

            if(isEvery) {
                item.checkState = 'checked';
                item.allSelected = true;
            } else if(isSomethingSelected) {
                item.checkState = 'indeterminate';
                item.allSelected = false;
            } else {
                item.checkState = 'dont-check';
                item.allSelected = false;
            }
        } else {
            item.selected = isChecked;
            item.checkState = isChecked ? 'checked' : 'dont-select';    
        }

        this.props.selectedItems(data);

    }

    onSelectAll = (isAllSelected, item) => {
        item.subOptions.map((option) => {
            option.selected = isAllSelected;
            option.checkState = isAllSelected ? 'checked' : 'un-checked';
        });

        item.allSelected = isAllSelected;
        item.checkState = isAllSelected ? 'checked' : 'un-checked';

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