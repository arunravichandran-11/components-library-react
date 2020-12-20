import React from 'react';
import './header-bar.scss';

export const SubHeader = (props) => {
    return (
        <div className="sub-header">
            {props.children}
        </div>
    )
};

class HeaderBar extends React.Component {

    renderLeftRightMenu(menu, menuAction) {
        if(menu) {
            if(menuAction) {
                return (
                    <a onClick={menuAction}>
                       {menu}
                    </a>
                )
            } else {
                return menu;
            }
        } else {
            return null;
        }
    }

    render() {
        const {leftMenu, title, rightMenu, className, onLeftMenuClick, onRightMenuClick, children, showSubheader} = this.props;

        let subHeader = null;
        let childComponents = React.Children.toArray(children);

        if(childComponents) {
            childComponents = childComponents.filter((child) => {
                if(child.type.name === 'SubHeader' || child.type === 'SubHeader') {
                    subHeader = child;
                } else {
                    return child;
                }
            });
        }

        return (
            <header className={`header-bar ${className}`}>
                <div className="title">
                    <div className="left-section">
                        {this.renderLeftRightMenu(leftMenu, onLeftMenuClick)}
                        {title && <span>{title}</span>}
                    </div>
                    <div className="middle-section">
                        {childComponents}
                    </div>
                    <div className="right-section">
                        {this.renderLeftRightMenu(rightMenu, onRightMenuClick)}
                    </div>
                </div>
                {
                    showSubheader && (
                        <div>
                            {showSubheader && subHeader}
                        </div>
                    )
                }
                
            </header>
        )
    }
}

export default HeaderBar;