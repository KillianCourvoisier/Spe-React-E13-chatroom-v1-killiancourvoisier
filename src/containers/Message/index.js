import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
