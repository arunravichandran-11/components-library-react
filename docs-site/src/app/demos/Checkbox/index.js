import React from 'react';

import Tabs from 'sample-react-lib-by-arun/lib/Tabs';
import Pane from 'sample-react-lib-by-arun/lib/Tabs/pane';

import SimpleCheckboxDemoPage from './SimpleCheckbox';
import AnimatedCheckboxDemoPage from './AnimatedCheckbox';

class CheckboxDemoPage extends React.Component {

    state = {
        selectedTabIndex: 1
    }

    handleTabChange = (selected) => {
        this.setState({
            selectedTabIndex: selected
        });
    }
    render() {

        const propsNotes = `onUnselect, allSelected, isPartiallySelected and hasChild - these props are used internally in Checkboxlist Component which is used in multi select component`;
        
        return (
            <div>
                <Tabs selected={this.state.selectedTabIndex} onChange={this.handleTabChange}>
                    <Pane label="Basic Checkbox">                        
                        <SimpleCheckboxDemoPage />
                    </Pane>
                    <Pane label="Animated Checkbox">
                        <AnimatedCheckboxDemoPage />
                    </Pane>
                </Tabs>
            </div>
        )
    }
}

export default CheckboxDemoPage;