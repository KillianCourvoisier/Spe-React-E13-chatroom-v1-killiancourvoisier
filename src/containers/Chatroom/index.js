import { connect } from 'react-redux';
import Chatroom from 'src/components/Chatroom';
import { wsConnect } from 'src/actions';

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    const action = wsConnect();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
