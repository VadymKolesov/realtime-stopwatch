import { getUsers } from './firebase-api';
import { refs } from './refs';
import { onErrorToast } from './utilites';

refs.loginForm.addEventListener('submit', onLogin);
refs.loginInput.addEventListener('input', () => {
  refs.loginInput.classList.remove('login-input-required');
});

async function onLogin(e) {
  e.preventDefault();

  if (!refs.loginInput.value) {
    onErrorToast('Please, entrer a token', '#');
    refs.loginInput.classList.add('login-input-required');
    return;
  }

  try {
    refs.loginBtn.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
    const users = await getUsers();
    const token = refs.loginInput.value;

    let isTokenTrue = false;
    let userData;

    for (let user of users) {
      if (user.token === token) {
        isTokenTrue = true;
        userData = user;
        break;
      }
    }

    if (!isTokenTrue) {
      refs.loginInput.classList.add('login-input-required');
      onErrorToast('Wrong token', '#');
    } else {
      refs.loginInput.classList.remove('login-input-required');
      localStorage.setItem(
        'log',
        JSON.stringify({ ...userData, logIn: Date.now() })
      );
      // const arr = location.pathname.split('/');
      // location.pathname = `/${arr[1]}`;
      location.pathname = `/`;
    }
  } catch {
    onErrorToast('Oops, something went wrong! Please, try again', '#');
  } finally {
    refs.loginBtn.innerHTML = 'Log in';
  }
}
