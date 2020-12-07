
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
            } else if(isSomethingSelected) {
                item.checkState = 'indeterminate';
            } else {
                item.checkState = 'dont-check';
            }
        } else {
            item.selected = isChecked;
            item.checkState = isChecked ? 'checked' : 'dont-select';    
        }

        this.props.selectedItems(data);

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