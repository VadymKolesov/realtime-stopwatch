import { refs } from './js/refs';
import { checkLogin, logOut } from './js/utilites';
import { checkIsBusy } from './js/firebase-api';

checkIsBusy('default_stopwatch_1');
checkLogin();

refs.logOutBtn.addEventListener('click', logOut);
refs.navName.innerHTML = JSON.parse(localStorage.getItem('log')).user;
