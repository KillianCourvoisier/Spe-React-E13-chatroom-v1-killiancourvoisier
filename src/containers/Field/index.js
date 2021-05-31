import { connect } from 'react-redux';
import Field from 'src/components/Field';
import { onChangeInputValue } from 'src/actions';

const mapStateToProps = (state, { name }) => ({
  inputValue: state.user[name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onChangeInputValue: (value) => {
    const action = onChangeInputValue(value, ownProps.name);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
