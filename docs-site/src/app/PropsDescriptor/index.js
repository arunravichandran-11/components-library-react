import React from 'react';
import PropTableComponent from './props-table';
import propTypesModifier from './proptype-modifier';

const PropsDescriptor = (props) => {
    const modifiedPropsObject = propTypesModifier({
        propTypes: props.properties
    });

    return (
        <PropTableComponent propTypes={modifiedPropsObject} />
    )
}

export default PropsDescriptor;