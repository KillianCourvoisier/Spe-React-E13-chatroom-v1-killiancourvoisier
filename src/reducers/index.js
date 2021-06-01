import {
  SET_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_INPUT_VALUE,
  SAVE_PSEUDO,
} from 'src/actions';

const initialState = {
  messages: [

  ],
  newMessage: '',
  open: true,
  user: {
    email: '',
    password: '',
    pseudo: 'Anonyme',
  },
  isLogged: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...state,
        newMessage: action.value,
      };
    case ADD_MESSAGE: {
      // on vient tester la valeur de newMessage
      // si c'est une string vide on retourne le state courant sans modifs
      // if (!state.newMessage) {
      //   return state;
      // }

      // on prépare un nouvel obet à insérer dans le tableau de messages
      // const message = {
      //   id: getHighestId(state) + 1,
      //   author: state.user.pseudo,
      //   content: state.newMessage,
      // };

      // ici on crée une nouvelle référence de tableau qui
      // viendra les anciens messages du state et on ajoute
      // en dernier le nouveau message
      const messages = [
        ...state.messages,
        action.message,
      ];

      return {
        ...state,
        messages,
        newMessage: '',
      };
    }
    case TOGGLE_SETTINGS:
      return {
        ...state,
        open: !state.open,
      };
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          // pour modifier dynamiquement des propriété d'objets,
          // on doit ouvrir les crochets et placer une chaine de caractère
          // àl'intérieur. Ici cette string est contenue dans la proriété name
          // de l'action
          [action.name]: action.value,
        },
      };
    case SAVE_PSEUDO:
      return {
        ...state,
        user: {
          ...state.user,
          pseudo: action.pseudo,
        },
        isLogged: true,
        open: false,
      };
    default:
      return state;
  }
};

export default reducer;
