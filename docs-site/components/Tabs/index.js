
import React from 'react';

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
        return (
            <div className="tab_container">
                {this.renderTabItems()}
                {this.renderContent()}
		    </div>
        )
    }
 }

export default Tabs;