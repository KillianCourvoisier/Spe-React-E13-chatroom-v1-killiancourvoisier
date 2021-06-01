import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue, sendMessage } from 'src/actions';

// branchement en lecture du state
const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

// branchement en écriture du state
const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    // pour modifier une valeur du state
    // il faut créer une action : action types + action creator
    const action = setInputValue(value);
    // dispatch l'action
    dispatch(action);
    // gérer l'action dans le reducer + renvoyer le nouveau state
  },
  onSubmitForm: () => {
    const action = sendMessage();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
