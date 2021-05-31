import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';
import './style.scss';

const Settings = ({ open, onClickButton }) => {
  const handleOnClick = () => {
    onClickButton();
  };
  const classnames = open ? 'settings settings--open' : 'settings';
  return (
    <div className={classnames}>
      <button
        type="button"
        className="settings__button"
        onClick={handleOnClick}
      >
        +
      </button>
      <form className="settings__form">
        <Field
          type="email"
          label="Email"
          name="email"
        />
        <Field
          type="password"
          label="Password"
          name="password"
        />
        <button
          type="submit"
          className="settings__submit"
        >Envoyer
        </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  onClickButton: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Settings;
