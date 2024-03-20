import { refs } from './js/refs';
import { checkLogin, logOut, onBack } from './js/utilites';

checkLogin();

const arr = '/realtime-stopwatch'.split('/');
console.log(arr);

refs.logOutBtn.addEventListener('click', logOut);
refs.navName.innerHTML = JSON.parse(localStorage.getItem('log')).user;
