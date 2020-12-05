import React from 'react';
import PropTypes from 'prop-types';

import './prop-table.scss';

const getRows = propTypes => Object.keys(propTypes).map(prop => (
  <tr key={prop}>
    <td>{prop}</td>
    <td>{propTypes[prop].type}</td>
    <td>{propTypes[prop].required.toString()}</td>
  </tr>
));

const PropTableComponent = ({ propTypes, notes }) => {
    return (
      <div className="props-table-container">
        <h2>Component Props</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>isRequired?</th>
            </tr>
          </thead>
          <tbody>
            {getRows(propTypes)}
          </tbody>
        </table>
        {
          notes && <p className="short-notes">Note: {notes}</p>
        }
      </div>
)
    };

PropTableComponent.propTypes = {
  propTypes: PropTypes.object.isRequired
}

export default PropTableComponent;