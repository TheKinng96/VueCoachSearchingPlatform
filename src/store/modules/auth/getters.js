export default {
  userId(state) {
    return state.userId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    //double ! will turn it to a boolean
    return !!state.token;
  },
  didAutoLogout(state) {
    state.didAutoLogout;
  }
};
