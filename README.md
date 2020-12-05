# components-library-react [Documentation Site](https://arun-ravichandran-1101.netlify.app/)

> This is a simple react component library with two components[MultiSelect and Checkbox] and it can be integrated with any react application.
## Installation
1. Install it using npm `npm i sample-react-lib-by-arun --save-dev`.
2. After installing, you can find `sample-react-lib-by-arun` folder inside node_modules
3. Font awesome min css is used inside component for UI. Make sure to include it as cdn.
	[Fontawesome (4.7) min css link](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css)
### 4. react, react-dom, prop-types and classnames are peer dependencies for this plugin. 
> Note: The fontawesome dependency will be removed soon. 

## Example Usage:
```
import React from 'react';
import CheckboxComponent from 'sample-react-lib-by-arun/lib/Checkbox';

class App extends React.Component {
	render() {
		return (
			<div>
					<CheckboxComponent label="Bike" />
			</div>
		)
	}
}

export default App;
```
