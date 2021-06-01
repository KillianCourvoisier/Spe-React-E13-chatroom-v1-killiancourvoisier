import { connect } from 'react-redux';
import Chatroom from 'src/components/Chatroom';
import { wsConnect } from 'src/actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  webSocketConnect: () => {
    console.log('wsConnect au webscocket');
    const action = wsConnect();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
