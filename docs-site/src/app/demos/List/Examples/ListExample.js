import React from 'react';
import ListComponent from 'sample-react-lib-by-arun/lib/List/list';
import ListItemLink from 'sample-react-lib-by-arun/lib/List/list-item-link';
import ListItemComponent from 'sample-react-lib-by-arun/lib/List/list-item';


class DrawerExample extends React.Component {

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between'}}> 
                <ListComponent>
                    <ListItemLink label="Tabs" href="/tabs" />
                    <ListItemLink label="Checkbox" href="/checkbox" />
                    <ListItemLink label="Nested Tree" href="/nested-tree" />
                    <ListItemLink label="MultiSelect" href="/multi-select" />
                    <ListItemLink label="Drawer" href="/drawer" />
                </ListComponent>

                <ListComponent>
                    <ListItemComponent label="Email" leftIcon={<i className="fa fa-1x fa-envelope"></i>} />
                    <ListItemComponent label="Envelope" leftIcon={<i className="fa fa-1x fa-envelope-o"></i>} />
                    <ListItemComponent label="Share" leftIcon={<i className="fa fa-1x fa-share"></i>} />
                    <ListItemComponent label="Inbox" leftIcon={<i className="fa fa-1x fa-inbox"></i>} />
                    {/* <ListItemComponent label="Nested Tree" />
                    <ListItemComponent label="MultiSelect" />
                    <ListItemComponent label="Drawer" /> */}
                </ListComponent>

                <ListComponent>
                    <ListItemComponent label="Email" rightIcon={<i className="fa fa-1x fa-envelope"></i>} />
                    <ListItemComponent label="Envelope" rightIcon={<i className="fa fa-1x fa-envelope-o"></i>} />
                    <ListItemComponent label="Share" rightIcon={<i className="fa fa-1x fa-share"></i>} />
                    <ListItemComponent label="Inbox" rightIcon={<i className="fa fa-1x fa-inbox"></i>} />
                    <ListItemComponent label="Email" rightIcon={<i className="fa fa-1x fa-envelope"></i>} />
                    <ListItemComponent label="Envelope" rightIcon={<i className="fa fa-1x fa-envelope-o"></i>} />
                    <ListItemComponent label="Share" rightIcon={<i className="fa fa-1x fa-share"></i>} />
                    <ListItemComponent label="Inbox" rightIcon={<i className="fa fa-1x fa-inbox"></i>} />
                    {/* <ListItemComponent label="Nested Tree" />
                    <ListItemComponent label="MultiSelect" />
                    <ListItemComponent label="Drawer" /> */}
                </ListComponent>

                <ListComponent>
                    <ListItemComponent label="Tabs" type="checklist" />
                    <ListItemComponent label="Checkbox" type="checklist" />
                    <ListItemComponent label="Nested Tree" type="checklist" />
                    <ListItemComponent label="MultiSelect" type="checklist" />
                    <ListItemComponent label="Drawer" type="checklist" />
                </ListComponent>
            </div>
        )
    }
}

export default DrawerExample;