
import React from 'react';
import { bool, string, func } from 'prop-types';
import  './animated-checkbox.scss';

class AnimatedCheckbox extends React.Component {

    state = {
        checked: false,
    }

    handleClick = (event) => {
        this.props.onChange(!this.props.checked, this.props.checkState);

        // if(this.props.checked !== undefined) {
        //     if(this.props.onChange) {
        //         this.props.onChange(!this.props.checked, this.props.checkState);
        //     }
        // } else {
        //     this.setState({ checked: !this.state.checked });
        //     if(this.props.onChange) {
        //         this.props.onChange(!this.state.checked, this.props.checkState);
        //     }
        // }
    }
    render() {

        const {checkState} = this.props;
        const classBasesOnCheckState = ((checkState === 'checked') || (checkState === 'indeterminate')) ? checkState : 'unchecked';
        const checkBoxLabelClass = ("check-box "+classBasesOnCheckState).trim();

        return (
            <div className="animated-checkbox-container" onClick={this.handleClick} style={this.props.style}>
                <input type="checkbox" className="checkbox-input" />
                <label className={checkBoxLabelClass}>
                    <span></span>
                </label> 
                <span className="checkbox-label">{this.props.label}</span>
            </div>
        )
    }
}

AnimatedCheckbox.propTypes = {
    checked: bool,
    checkState: string,
    label: string,
    onChange: func
}

export default AnimatedCheckbox;


// import React from 'react';
// import ReactDOM from "react-dom";
// import { bool, string, func } from 'prop-types';
// import  './animated-checkbox.scss';

// class AnimatedCheckbox extends React.Component {

//     constructor(props) {
//         super(props);
//         this.inputElementRef = React.createRef()
//     }
//     state = {
//         checked: false,
//     }

//     handleClick = (event) => {
//         if(this.props.checkState) {
//             this.props.onChange(!this.props.checked, this.props.checkState);
//         } else if(this.state.checked) {
//             this.props.onChange(!this.state.checked);
//         } else {
//             this.setState({
//                 checked: !this.state.checked
//             });
//         }
//     }

//     renderCheckboxWithDifferentStates() {
//         const checkboxLabelClass = "check-box "+this.props.checkState;
//         return (
//             <div className="animated-checkbox-container" onClick={this.handleClick} style={this.props.style}>
//                 <input type="checkbox" className="checkbox-input" />
//                 <label className={checkboxLabelClass}>
//                     <span></span>
//                 </label> 
//                 <span className="checkbox-label">{this.props.label}</span>
//             </div>
//         )
//     }

//     renderCheckbox() {

//         console.log('here it is');

//         const classCheck = "check-box "+this.props.checkState;

//         return (
//             <div className="animated-checkbox-container" onClick={this.handleClick} style={this.props.style}>
//                 <input type="checkbox" className="checkbox-input" checked />
//                 <label className={classCheck}>
//                     <span></span>
//                 </label> 
//                 <span className="checkbox-label">{this.props.label}</span>
//             </div>
//         )
//     }

//     render() {

//         const {checked, checkState} = this.props;


//         if(checkState) {
//             return this.renderCheckboxWithDifferentStates()
//         }
//         // } else {
//         //     return this.renderCheckbox()
//         // } 
//         else {
//             return (
//                     <div className="animated-checkbox-container" style={this.props.style}>
//                         <input type="checkbox" className="checkbox-input" checked={true} ref={this.inputElementRef} />
//                         <label>
//                             <span className="checkbox-label">{this.props.label || 'label'}</span>
//                         </label> 
//                         {/* <span className="checkbox-label">{this.props.label}</span> */}
//                     </div>
//                 )
//         }

//         // return (
//         //     <div className="animated-checkbox-container" onClick={this.handleClick} style={this.props.style}>
//         //         <input type="checkbox" className="checkbox-input" />
//         //         <label className={classCheck}>
//         //             <span className="checkbox-label">{this.props.label || 'label'}</span>
//         //         </label> 
//         //         {/* <span className="checkbox-label">{this.props.label}</span> */}

//         //         Chckbox
//         //     </div>
//         // )
//     }

//     componentDidMount() {
//         console.log('', this.inputElementRef.current);

//         console.log('this.rops', this.props);
//         if(this.inputElementRef.current) {
//             // this.inputElementRef.current.indeterminate = true;
//         }
//         // this.inputElementRef.indeterminate = true;
//     }
    
// }

// AnimatedCheckbox.propTypes = {
//     checked: bool,
//     checkState: string,
//     label: string,
//     onChange: func
// }

// export default AnimatedCheckbox;