import * as FirebaseApi from './firebase-api';
import * as ManageListeners from './manage-listeners';
import { refs } from './refs';
import { checkLogin } from './utilites';

checkLogin();

refs.readyBtn.addEventListener('click', ManageListeners.setReady);
refs.startBtn.addEventListener('click', ManageListeners.onStart);
refs.stopBtn.addEventListener('click', ManageListeners.onStop);

FirebaseApi.checkData();
FirebaseApi.checkList();
