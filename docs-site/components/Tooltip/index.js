import React from 'react';
import './tooltip.scss';

class TooltipComponent extends React.Component {

    render() {
        const {position, text} = this.props;

        return (
            <div className="tooltip-container">
                <div className="hover-element"></div>
                <span className={`tooltip tooltip__${position || 'bottom'}`}>{text || 'Tooltip! Please Provide the text'}</span>
            </div>
        );
    }
}

export default TooltipComponent;