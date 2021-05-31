import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// plan d'action submit du form
// --composant
// handler du submit
// préparation de la props
// --container
// relier la props du composant avec une fonction
// préparer une action : action type + action creator
// importer l'action et créer l'action
// dispatch de l'action
// --reducer
// traitement de l'action => gérer le case
// retourner le nouveau state,
// ajout du nouveau message à la liste de messages :
// attention bien retourner une nouvelle référence du tableau

// bonus
// focus sur l'input text avec hooks
// vidage du champs quand on ajoute un nouveau message
// scroll en js
// effet d'apparition pour les messages
// CSS pour le triangle + icone sur le bouton (npm)

const Form = ({ inputValue, onChangeInputValue, onSubmitForm }) => {
  // la référence est moyen d'atteindre le composant React
  // une fois qu'il sera injecté dans le DOM
  // simplification pour ne pas à avoir à faire un document.getElementById
  // on a déjà sa référence
  const inputRef = useRef(null);

  // au 1e rendu composant input je veux mettre le focus dessus
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleOnChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    // pour faire le submit, il faut une valeur dans inputValue
    if (inputValue) {
      onSubmitForm();
    }
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        ref={inputRef}
        className="form__input"
        type="text"
        placeholder="Saisissez votre message"
        value={inputValue}
        onChange={handleOnChange}
      />
      <button
        className="form__button"
        type="submit"
      >
        Envois
      </button>
    </form>
  );
};

Form.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};

export default Form;
