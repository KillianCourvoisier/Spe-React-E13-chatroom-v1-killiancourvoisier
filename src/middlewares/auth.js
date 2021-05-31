import axios from 'axios';
import { LOGIN, savePseudo } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // je peux récupérer le state courant via le store
      const state = store.getState();
      // const { user: { email, password } } = store.getState();

      // à ce niveau là on va traiter la requête de connexion
      axios.post('http://localhost:3001/login', {
        email: state.user.email,
        password: state.user.password,
      })
        .then((response) => {
          // une fois qu'on a la réponse on peut venir stocker le pseudo
          // du user dans le state. Modification de state => dispatch d'action
          const pseudo = response.data.pseudo;

          // ici on a accès au store, donc on peut utiliser la fonction store.dispatch
          store.dispatch(savePseudo(pseudo));
        })
        .catch((err) => console.log('err', err));

      // next(action);
      break;
    }
    default:
      next(action);
  }
};

export default auth;
