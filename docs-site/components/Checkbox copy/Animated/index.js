// import React from 'react';
// import { bool, string, func } from 'prop-types';
// import  './animated-checkbox.scss';

// class AnimatedCheckbox extends React.Component {

//     handleClick = (event) => {
//         this.props.onChange(!this.props.checked, this.props.checkState);
//     }
//     render() {
//         const classCheck = "check-box "+this.props.checkState;

//         return (
//             <div className="animated-checkbox-container" onClick={this.handleClick} style={this.props.style}>
//                 <input type="checkbox" className="checkbox-input" />
//                 <label className={classCheck}>
//                     <span></span>
//                 </label> 
//                 <span className="checkbox-label">{this.props.label}</span>
//             </div>
//         )
//     }
// }

// AnimatedCheckbox.propTypes = {
//     checked: bool,
//     checkState: string,
//     label: string,
//     onChange: func
// }

// export default AnimatedCheckbox;