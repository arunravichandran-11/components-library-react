import PropTypes from 'prop-types';

const isCorrectPropType = (method, propType) => {
  return (method === PropTypes[propType]) || (method === PropTypes[propType].isRequired);
};
const isPropTypeRequired = (method, propType) => (method === PropTypes[propType].isRequired);

const getPropInfo = (method) => {
  const availableProptypes = [
    'any',
    'string',
    'bool',
    'array',
    'func'
  ];

  return availableProptypes.reduce((obj, curr) => {
    if (obj.type) {
      return obj;
    }
    const isCorrect = isCorrectPropType(method, curr);
    if (isCorrect) {
      obj.type = curr;
      obj.required = isPropTypeRequired(method, curr);
    }
    return obj;
  }, {});
};

const propTypesModifier = ({ propTypes }) => {
  let newProps = Object.keys(propTypes).reduce((obj, curr) => {
    const info = getPropInfo(propTypes[curr]);
    const updatedPropsInfo = {
      ...obj,
      [curr]: {
        type: info.type,
        required: info.required
      }
    }
    return updatedPropsInfo;
  }, {});
  return newProps;
};

export default propTypesModifier;