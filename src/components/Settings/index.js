import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './style.scss';

const Settings = ({ open, onClickButton, onSubmitForm }) => {
  const handleOnClick = () => {
    onClickButton();
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('submit du form');
    onSubmitForm();
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
      <form className="settings__form" onSubmit={handleOnSubmit}>
        <Field
          type="email"
          label="Email"
          name="email"
        />
        <Field
          type="password"
          label="Mot de passe"
          name="password"
        />
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  onClickButton: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default Settings;
