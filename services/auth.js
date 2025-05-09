const sessionIdToUserMap = new Map();

const setUser = (sessionId, user) => {
  sessionIdToUserMap.set(sessionId, user);
}

const getUser = (sessionId) => {
  return sessionIdToUserMap.get(sessionId);
}

export { setUser, getUser };