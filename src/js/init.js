const getCurrentPage = () => {
  const pathname = window.location.pathname;
  const split = pathname.split('/');
  return split[split.length - 1];
};

const checkPage = (page) => {
  return getCurrentPage() === page;
};

const isLog = () => {
  return localStorage.getItem('user') !== null ? true : false;
};

// Events
document.addEventListener('DOMContentLoaded', () => {
  const isLogged = isLog();

  if (!isLogged && !checkPage('login.html')) {
    window.location.href = 'login.html';
  }
});
