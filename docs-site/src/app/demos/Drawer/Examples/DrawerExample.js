import React from 'react';

import DrawerComponent from 'sample-react-lib-by-arun/lib/Drawer';

class DrawerExample extends React.Component {

    state = {
        openLeft: false,
        openRight: false,
        openTop: false
    }
    render() {

        return (
            <div>
                <p>Open Drawer from left right and top directions</p>
                <button onClick={() => this.setState({openLeft: !this.state.openLeft})}>Open</button>
                <button onClick={() => this.setState({openRight: !this.state.openRight})}>Open Right</button>
                <button onClick={() => this.setState({openTop: !this.state.openTop})}>Open Top</button>

                <DrawerComponent open={this.state.openLeft} direction="left"/>

                <DrawerComponent open={this.state.openRight} direction="right"/>

                <DrawerComponent open={this.state.openTop} direction="top"/>

            </div>
        )
    }
}

export default DrawerExample;