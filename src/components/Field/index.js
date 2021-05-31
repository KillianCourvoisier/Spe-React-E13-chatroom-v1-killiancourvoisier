import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Field = ({ label, name, type }) => (
  <div className="field">
    <label
      htmlFor={name}
      className="field__label"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      placeholder={label}
      className="field__input"
    />
  </div>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Field.defaultProps = {
  type: 'text',
};

export default Field;
