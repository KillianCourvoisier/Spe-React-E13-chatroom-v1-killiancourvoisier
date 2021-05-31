import React from 'react';
import './style.scss';

const Settings = () => (
  <div className="settings settings--open">
    <button type="button" className="settings__button">+</button>
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

export default Settings;
