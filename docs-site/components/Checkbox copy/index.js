// import React from 'react';
// import './checkbox.scss';
// import PropTypes from 'prop-types';
// var classNames = require('classnames');

// class CheckboxComponent extends React.Component {

//     state = {
//         arrowDown: false,
//     }

//     /**
//      * toggles the check and uncheck state of this component.
//      * In order of make it as a controlled form component, the state of check and uncheck is not maintained here and the control will be done by the parent component with this callback value.
//      * @param {object} event 
//      */
//     handleClick = (event) => {
//         if(this.props.onCheck) {
//             this.props.onCheck(this.props.selected, this.props.option);
//         }
//     };

//     /**
//      * unchecks all the child elements
//      * you have to pass a callback function to receive the status of unselect inorder to set the unselect from the parent component
//      * This is made as a controlled component and so, the unselect will be passed as a props and will let the control to the parent.
//      * @param {object} event 
//      */
//     unCheckAll = (event) => {
//         this.props.onUnselect(false);
//     };

//     /**
//      * initial checkbox rendering based on checkbox selection state('checked' || 'unchecked' || 'indeterminate')
//      */
//     renderCheckBox() {
//         if(this.props.allSelected) {
//             return <div className={classNames('fa', 'fa-2x', 'checkbox__icon fa-check-square')} onClick={this.unCheckAll}></div>
//         } else if(this.props.isPartiallySelected) {
//             return <div className={classNames('fa', 'fa-2x', 'checkbox__icon fa-pencil-square-o')}></div>
//         } else {
//             return (
//                 <div className={classNames('fa', 'fa-2x', 'checkbox__icon fa-square-o')}></div>
//             )
//         }
//     }

//     /**
//      * initial icons before checkbox label based on state('checked' || 'unchecked' || 'indeterminate')
//      */
//     renderToggleIcons() {
//         if(this.props.selected) {
//             if(this.props.allSelected) {
//                 return <div className={classNames('fa', 'fa-2x', 'checkbox__icon fa-check-square')} onClick={this.unCheckAll}></div>
//             } else if(this.props.isPartiallySelected) {
//                 return <div className={classNames('checkbox__icon')} onClick={this.unCheckAll}>
//                     <div className="intermediate">
//                         <div className="fa fa-square"></div>
//                     </div>
//                 </div>
//             } else  {
//                 return <div className={classNames('fa', 'fa-2x', 'checkbox__icon fa-minus-square-o')} onClick={this.handleClick}></div>
//             }
//         } else {
//             return (
//                 <div className={classNames('fa', 'fa-2x', 'checkbox__icon fa-plus-square-o')} onClick={this.handleClick}></div>
//             )
//         }

//     }

//     render() {

//         const { selected, label, align, hasChild } = this.props;
//         const checkboxClass = ((selected === 'selected' || selected === true) ? 'fa-check-square-o' : (selected === 'partial') ? 'fa-square-o partially-selected':'fa-square-o');

//         const containerClass = (`checkbox ${align || ''}`).trim();

//         return (
//             <div className={containerClass}>
//                 {/* {hasChild && this.renderToggleIcons()} */}
//                 {!hasChild && <div className={classNames('fa', 'fa-2x', 'checkbox__icon', checkboxClass)} onClick={this.handleClick}></div>}
//                 <div className="checkbox__label">{label}</div>
//             </div>
//         )
//     }

//   }

//   CheckboxComponent.propTypes = {
//     selected: PropTypes.any,
//     label: PropTypes.string,
//     onCheck: PropTypes.func,
//     onUnselect: PropTypes.func,
//     allSelected: PropTypes.bool, 
//     isPartiallySelected: PropTypes.bool,
//     hasChild: PropTypes.bool
//   };

// //   MultiSelectComponent.propTypes = {
// //     data: PropTypes.array,
// //     title: PropTypes.string,
// //     selectedItems: PropTypes.func,
// //   };
//   export default CheckboxComponent;