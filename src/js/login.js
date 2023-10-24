const submitBtn = document.querySelector('button[type=submit]');
const fieldInputs = document.querySelectorAll('input');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const [emailDOM, passwordDOM] = fieldInputs;

  if (emailDOM.value !== '' && passwordDOM.value !== '') {
    const userData = {
      email: emailDOM.value,
      password: passwordDOM.value,
    };

    localStorage.setItem('user', JSON.stringify(userData));
    window.location.href = 'index.html';
  }
});
