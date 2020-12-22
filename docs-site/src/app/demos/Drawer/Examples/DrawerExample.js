import React from 'react';
import Drawer from 'sample-react-lib-by-arun/lib/Drawer';

class DrawerExample extends React.Component {

    state = {
        showLeftDrawer: false,
        showRightDrawer: false,
        showTopDrawer: false,
        showBottomDrawer: false
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <button onClick={(event) => this.setState({showRightDrawer: !this.state.showRightDrawer})}>Open Drawer (Right)</button>
                <Drawer open={this.state.showRightDrawer}
                        align='right'
                        onClose={(event) => this.setState({showRightDrawer: false})}
                />
                
                <button onClick={(event) => this.setState({showLeftDrawer: !this.state.showLeftDrawer})}>Open Drawer (Left)</button>
                <Drawer open={this.state.showLeftDrawer}
                        align='left'
                        onClose={(event) => this.setState({showLeftDrawer: false})}
                />

                <button onClick={(event) => this.setState({showTopDrawer: !this.state.showTopDrawer})}>Open Drawer (Top)</button>
                <Drawer open={this.state.showTopDrawer}
                        align='top'
                        onClose={(event) => this.setState({showTopDrawer: false})}
                />

                <button onClick={(event) => this.setState({showBottomDrawer: !this.state.showBottomDrawer})}>Open Drawer (Bottom)</button>
                <Drawer open={this.state.showBottomDrawer}
                        align='bottom'
                        onClose={(event) => this.setState({showBottomDrawer: false})}
                />

            </div>
        )
    }
}

export default DrawerExample;