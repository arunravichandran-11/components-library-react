# components-library-react


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

### Documentation Site: [(https://arun-ravichandran-1101.netlify.app/)] 
## Github Link: [(https://github.com/arunravichandran-11/components-library-react/)]
> This is a simple react component library with two components[MultiSelect and Checkbox] and it can be integrated with any react application.

## Stack

1. React JS
2. Webpack
3. prop-types
4. babel

## Follow the below instructions to run this codebase in local.

1. git clone https://github.com/arunravichandran-11/components-library-react.git
2. Navigate to docs-site folder
`cd components-library-react/docs-site`
3. npm install
4. npm start

#Open the link.[Local](http://localhost:3000/)

## For the Production Build.

> Step 1 to 3 from above instruction
4. npm run prod

>> A dist folder will be created inside the docs-site directory.

<!-- ## Usage
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
``` -->
