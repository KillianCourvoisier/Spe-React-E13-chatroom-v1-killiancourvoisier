import { connect } from 'react-redux';
import Message from 'src/components/Messages/Message';
import { isAuthorMessage } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  isMine: isAuthorMessage(state, ownProps.author),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
