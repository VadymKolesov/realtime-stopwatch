import { refs } from './js/refs';
import { checkLogin, clickOnBusyRoom, logOut, onReload } from './js/utilites';
import { checkIsBusy } from './js/firebase-api';

// checkIsBusy('default_stopwatch_1');
checkLogin();

refs.reloadBtn.addEventListener('click', onReload);
refs.logOutBtn.addEventListener('click', logOut);
refs.navName.innerHTML = JSON.parse(localStorage.getItem('log')).user;

refs.roomsList.addEventListener('click', clickOnBusyRoom);
