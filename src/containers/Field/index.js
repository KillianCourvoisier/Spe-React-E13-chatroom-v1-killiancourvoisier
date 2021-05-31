import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { changeInputValue } from 'src/actions';
// Container
// c'est un composant qui va englober un stateless component ici Field
// son rôle
// - passer les valeurs du state au statless component via ses props (mapStateToProps)
// - passer des fonctions qui vont modifier le state via ses props (mapDispatchToProps)

// lecture de state
// on peut déclarer des props sur les containers, les containers restent
// des composants React. Du coup, on peut récupérer l'objet de props via
// le 2e argument de maptStateToProps et mapDispatchToProps
// l'astuce ici c'est de faire correspondre une valeur de props
// avec ce qu'on veut venir lire dans le state
const mapStateToProps = (state, ownProps) => ({
  inputValue: state.user[ownProps.name],
});

// ownProps est un objet qu'on reçoit en params donc on peut le destructurer
// const mapStateToProps = (state, { name }) => ({
//   inputValue: state.user[name],
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    const action = changeInputValue(value, ownProps.name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
