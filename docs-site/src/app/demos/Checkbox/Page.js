import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class CheckBoxDemoComponent extends React.Component {
    render() {
        return (
            <div>
                    <CheckboxComponent label="Bike" />
            </div>
        )
    }
}

export default CheckBoxDemoComponent;

// import React from 'react';
// // import CheckboxComponent from '@Components/Checkbox';

// import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

// class CheckBoxDemoComponent extends React.Component {

//     state = {
//         vehicle: {
//             bike: false,
//             car: false,
//             train: false
//         },
//     }

//     handleSelected = (selectedItem, isSelected) => {
//         const updatedState = {
//             vehicle: {
//                 ...this.state.vehicle,
//                 [selectedItem]: isSelected
//             }
//         };

//         this.setState({
//             ...updatedState
//         })
//     }

//     getDataStructureDisplay = () => {
//         return (
//             <pre className="data-structure"><code className="json">{JSON.stringify(this.state.vehicle, null, 3)}</code></pre>
//         )
//     }

//     render() {

//         return (
//             <div>
//                 <CheckboxComponent
//                         selected={this.state.vehicle.bike}
//                         label="Bike"
//                         onCheck={(isSelected) => {
//                               console.log('isSelected', isSelected);
//                               this.handleSelected('bike', isSelected);
//                         }}
//                 />
//                 <CheckboxComponent
//                         selected={this.state.vehicle.car}
//                         label="Car"
//                         onCheck={(isSelected) => {
//                               console.log('isSelected', isSelected);
//                               this.handleSelected('car', isSelected);
//                         }}
//                 />
//                 <CheckboxComponent
//                         selected={this.state.vehicle.train}
//                         label="Train"
//                         onCheck={(isSelected) => {
//                               console.log('isSelected', isSelected);
//                               this.handleSelected('train', isSelected);
//                         }}
//                 />
//                 {this.state.vehicle && (
//                     <div className="data-block">
//                         {this.getDataStructureDisplay()}
//                     </div>
//                 )}
                
//             </div>
//         )
//     }
// }

// export default CheckBoxDemoComponent;