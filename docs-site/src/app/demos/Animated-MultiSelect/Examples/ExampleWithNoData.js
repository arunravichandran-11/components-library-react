import React from 'react';
import AnimatedMultiSelectComponent from 'sample-react-lib-by-arun/lib/Multi-Select/Animated';

class ExampleWithNoData extends React.Component {

    state = {
        selectedItems: null,
    }

    getSelected = (selectedItem) => {
        this.setState({
            selectedItems: selectedItem
        });
    }

    render() {
        return (
            <div>
                <AnimatedMultiSelectComponent />
            </div>
        )
    }
}

export default ExampleWithNoData;