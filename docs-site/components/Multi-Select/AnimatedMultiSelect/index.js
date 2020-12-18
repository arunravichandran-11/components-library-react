import React from 'react';
import MultiSelectHelper from './helper';
import PropTypes from 'prop-types';

import '../multi-select.scss';

class AnimatedMultiSelectComponent extends React.Component {

    state = {
        toggle: false,
    }
    
    toggleDropdown = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {

        const {data} = this.props;

        return (
            <div className="helper-container">
                <div className="helper-container-wrapper">
                    <div className="drop-down" onClick={this.toggleDropdown}>
                        {this.props.title || 'Select'}
                        <i className={`fa fa-1x ${this.state.toggle ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </div>
                    {
                        this.state.toggle && (
                            <div>
                                {
                                    (data && data.subOptions && data.subOptions.length > 0) ?  
                                        <MultiSelectHelper {...this.props} data={this.props.data.subOptions} /> :
                                            <div className="no-data-block">
                                                Please Provide Options
                                                <i className="fa fa-2x fa-battery-empty"></i>
                                            </div>
                                }

                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

AnimatedMultiSelectComponent.propTypes = {
    data: PropTypes.any,
    title: PropTypes.string,
    selectedItems: PropTypes.func,
};

export default AnimatedMultiSelectComponent;