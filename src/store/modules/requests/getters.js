export default {
  requests(state, _, _1, rootGetters) {
    const coachId = rootGetters.userId;
    return state.requests.filter(req => req.id === coachId);
  },
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  }
};
