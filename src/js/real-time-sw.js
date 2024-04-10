import * as FirebaseApi from './firebase-api';
import * as ManageListeners from './manage-listeners';
import { refs } from './refs';
import { checkLogin, onBack, logOut } from './utilites';

checkLogin();

refs.readyBtn.addEventListener('click', ManageListeners.setReady);
refs.startBtn.addEventListener('click', ManageListeners.onStart);
refs.stopBtn.addEventListener('click', ManageListeners.onStop);
refs.resetBtn.addEventListener('click', ManageListeners.onReset);
refs.backBtn.addEventListener('click', onBack);
refs.logOutBtn.addEventListener('click', logOut);
refs.stepsList.addEventListener('click', onDelete);
refs.sendBtn.addEventListener('click', onSend);
document.addEventListener('scroll', showBtnsList);

FirebaseApi.checkData();
FirebaseApi.checkList();
FirebaseApi.checkCurrentLine();

const listPosition = refs.stepsList.getBoundingClientRect().top;
const windowInnerHeight = window.innerHeight;

refs.navName.innerHTML = JSON.parse(localStorage.getItem('log')).user;

refs.taskForm.addEventListener('submit', onSaveLine);

function onSaveLine(e) {
  e.preventDefault();
  FirebaseApi.setCurrentLine(refs.taskInput.value);
}

function showBtnsList() {
  const windowScrollHeight = window.scrollY;

  if (refs.listBtns && windowScrollHeight >= listPosition - windowInnerHeight) {
    refs.listBtns.classList.remove('button-hidden');
  } else {
    refs.listBtns.classList.add('button-hidden');
  }
}

async function onDelete(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  FirebaseApi.deleteStepById(e.target.id);
}

async function onSend() {
  refs.sendBackdrop.classList.remove('visually-hidden');
  const data = await FirebaseApi.getStepsList();
  data.type = 'realtime-stop-watch';

  refs.listBtns.classList.add('button-hidden');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbwQfPNpDsZK7s3qT5Jt8PBS7B2YnK_ILFqPV65fPhuc7J9jd8vJYz4g8oSnoR0GqPSE/exec',
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
  } catch (error) {
    onErrorToast('Oops. Something went wrong.', '#');
  } finally {
    refs.listBtns.classList.remove('button-hidden');
    refs.sendBackdrop.classList.add('visually-hidden');
  }
}
