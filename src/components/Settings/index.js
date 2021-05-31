import React from 'react';
import PropTypes from 'prop-types';
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
        <input
          type="email"
          placeholder="Email"
          className="settings__input"
        />
        <input
          type="password"
          placeholder="Password"
          className="settings__input"
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
