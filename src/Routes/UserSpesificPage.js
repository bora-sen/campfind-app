function UserSpesificPage({ user, isAuthEl, isNotAuthEl }) {
  if (user) {
    return isAuthEl;
  } else {
    return isNotAuthEl;
  }
}

export default UserSpesificPage;
