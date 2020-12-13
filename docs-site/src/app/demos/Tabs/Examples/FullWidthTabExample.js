import React from 'react';

import Tabs from 'sample-react-lib-by-arun/lib/Tabs';
import Pane from 'sample-react-lib-by-arun/lib/Tabs/pane';

class FullWidthTabExample extends React.Component {
    render() {
        return (
            <div>
                <Tabs fullWidth={true} withBackdrop>
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

export default FullWidthTabExample;