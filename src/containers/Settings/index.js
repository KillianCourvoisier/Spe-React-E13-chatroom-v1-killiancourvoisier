import { connect } from 'react-redux';
import Settings from 'src/components/Settings';
import { toggleSettings, login } from 'src/actions';

const mapStateToProps = (state) => ({
  open: state.open,
});

const mapDispatchToProps = (dispatch) => ({
  onClickButton: () => {
    const action = toggleSettings();
    dispatch(action);
  },
  onSubmitForm: () => {
    console.log('je veux envoyer une requête');
    dispatch(login());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
