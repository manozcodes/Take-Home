const logoutMe = () => {
  localStorage.removeItem('access_token');
};

export { logoutMe };
