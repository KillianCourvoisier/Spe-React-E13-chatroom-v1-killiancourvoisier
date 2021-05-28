import { connect } from 'react-redux';
import Form from 'src/components/Form';
import { setInputValue } from 'src/actions';

const mapStateToProps = (state) => ({
  inputValue: state.newMessage,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInputValue: (value) => {
    const action = setInputValue(value);

    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
