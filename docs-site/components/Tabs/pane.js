import React from 'react';

class Pane extends React.Component {

  render() {
    return (
        <div>
           {this.props.children}
         </div>
    )
  }
}
export default Pane;

// const Pane = ({children}) => {
//     return (
//         <div>
//           {children}
//         </div>
//     )
// }

// export default Pane;