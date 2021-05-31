import {
  SET_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_INPUT_VALUE,
  SAVE_PSEUDO,
} from 'src/actions';
import { getHighestId } from 'src/selectors';

const initialState = {
  messages: [
    {
      id: 11,
      author: 'Super Chat',
      content: 'lorem ipsum',
    },
    {
      id: 22,
      author: 'Super Chat',
      content: 'lorem ipsum',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'lorem ipsum',
    },
  ],
  newMessage: '',
  open: true,
  user: {
    email: '',
    password: '',
    pseudo: 'Anonyme',
  },
};

const reducer = (state = initialState, action = {}) => {
  console.log('reducer');
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
      const message = {
        id: getHighestId(state) + 1,
        author: state.user.pseudo,
        content: state.newMessage,
      };

      // ici on crée une nouvelle référence de tableau qui
      // viendra les anciens messages du state et on ajoute
      // en dernier le nouveau message
      const messages = [
        ...state.messages,
        message,
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
      };
    default:
      return state;
  }
};

export default reducer;
