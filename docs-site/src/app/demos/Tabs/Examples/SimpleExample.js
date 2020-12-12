import React from 'react';

import Tabs from 'sample-react-lib-by-arun/lib/Tabs';
import Pane from 'sample-react-lib-by-arun/lib/Tabs/Pane';

class TabsExample extends React.Component {

    state = {
        selectedTabIndex: 1
    }

    handleTabChange = (selected) => {
        this.setState({
            selectedTabIndex: selected
        });
    }

    render() {
        return (
            <div>
                <Tabs selected={this.state.selectedTabIndex} onChange={this.handleTabChange}>
                    <Pane label="Tab 1">
                        <div>This is my tab 1 contents!</div>
                    </Pane>
                    <Pane label="Tab 2">
                        <div>This is my tab 2 contents!</div>
                    </Pane>
                    <Pane label="Tab 3">
                        <div>This is my tab 3 contents!</div>
                    </Pane>
                </Tabs>

                <h3>Another Example</h3>
                <Tabs>
                    <Pane label="Tab 1">
                        <div>This is my tab 1 contents!</div>
                    </Pane>
                    <Pane label="Tab 2">
                        <div>This is my tab 2 contents!</div>
                    </Pane>
                    <Pane label="Tab 3">
                        <div>This is my tab 3 contents!</div>
                    </Pane>
                </Tabs>
            </div>
        )
    }
}

export default TabsExample;