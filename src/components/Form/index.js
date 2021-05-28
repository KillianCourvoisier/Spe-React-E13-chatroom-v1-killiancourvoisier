import React from 'react';
import './style.scss';

const Form = () => (
  <form className="form">
    <input
      className="form__input"
      type="text"
      placeholder="Saisissez votre message"
    />
    <button
      className="form__button"
      type="submit"
    >Envoi
    </button>
  </form>
);

export default Form;
