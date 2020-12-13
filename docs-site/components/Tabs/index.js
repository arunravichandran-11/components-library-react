
import React from 'react';
import PropTypes from 'prop-types';

import './tabs.scss';

class Tabs extends React.Component {

    state = {
        selected: this.props.selected === undefined ? 0 : this.props.selected,
    };

    handleClick = (event, index) => {
        event.preventDefault();
        if(this.props.onChange) {
            this.props.onChange(index);
        } else {
            this.setState({
                selected: index
            });
        }
    }


    renderTabItems() {
        return (
            <ul className="tab-items">
                {
                    this.props.children.map((child, index) => {
                    let activeIndex = (this.props.selected === undefined) ? this.state.selected : this.props.selected;
                    let activeClass = (activeIndex === index ? 'active' : '');
                    return (
                        <li className={activeClass} key={index}
                            onClick={(event) => this.handleClick(event, index)}
                        >
                            <a>
                                {child.props.label}
                            </a>
                        </li>
                        );
                    })    
                }
            </ul>
        );
    }

    renderContent() {
        let activeIndex = (this.props.selected === undefined) ? this.state.selected : this.props.selected;

        return (
            <div className="tab-content" key={activeIndex}>
              {this.props.children[activeIndex]}
            </div>
        );
    }
    render() {
        const {fullWidth, withBackdrop } = this.props;

        const rootContainerClassName = (`tab_container ${fullWidth && 'full-width'} ${withBackdrop && 'backdrop'}`).trim();

        return (
            <div className={rootContainerClassName}>
                <div className="tabs-wrapper">
                    {this.renderTabItems()}
                    {this.renderContent()}
                </div>
		    </div>
        )
    }
 }

 Tabs.propTypes = {
    fullWidth: PropTypes.bool,
    selected: PropTypes.number,
    withBackdrop: PropTypes.bool,
    onChange: PropTypes.func,
    label: PropTypes.string,
    children: PropTypes.node
 }


export default Tabs;