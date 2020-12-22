import React from 'react';
import AnimatedCheckbox from 'sample-react-lib-by-arun/lib/Checkbox/AnimatedCheckbox';

class ListItemComponent extends React.Component {

    handleClick = (event) => {
        if(this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
    
        const {type, label, onClick} = this.props;

        return (
            <li className="list-item">
                {   
                    type == 'checklist' ?  <AnimatedCheckbox label={label} /> :
                         <a href={this.props.href} onClick={this.handleClick}>{label}</a>
                }
            </li>
        )
    }
}

export default ListItemComponent;