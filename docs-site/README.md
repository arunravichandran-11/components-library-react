# components-library-react

> This is a simple react component library with two components[MultiSelect and Checkbox] and it can be integrated with any react application.
## Usage
1. Install it using npm `npm i sample-react-lib-by-arun --save-dev`.
2. After installing, you can find `sample-react-lib-by-arun` folder inside node_modules
3. Font awesome min css is used inside component for UI. Make sure to include it as cdn.
	[Refer fontawesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css)

>>> Note: The fontawesome dependency will be removed soon. 
3. Sample Reactjs component file.
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
