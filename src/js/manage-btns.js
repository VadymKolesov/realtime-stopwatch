import * as Utilites from './utilites';
import { refs } from './refs';
import editIcon from '../img/edit.svg';
import { getName } from './utilites';
import * as FirebaseApi from './firebase-api';

export async function manageBtns(data) {
  if (data.isReady === 0) {
    localStorage.setItem('readyID', 3);
  }

  const readyID = JSON.parse(localStorage.getItem('readyID'));

  if (data.isReady < 2 && !data.isStart && readyID !== data.isReady) {
    Utilites.enableBtn(refs.readyBtn);
    Utilites.disableBtn(refs.stopBtn);
    refs.readyContent.textContent = `I'm ready`;
  } else if (data.isReady === 2 && !data.isStart) {
    Utilites.enableBtn(refs.startBtn);
    refs.readyContent.textContent = `All users ready`;
    refs.loader.classList.add('hide-loader');
  } else if (data.isStart) {
    Utilites.enableBtn(refs.stopBtn);
    Utilites.disableBtn(refs.startBtn);
    refs.readyContent.textContent = `Timer is active`;
  } else if (!data.isStart && readyID === data.isReady) {
    refs.readyContent.textContent = `Waiting for users`;
    refs.loader.classList.remove('hide-loader');
  }
}

export async function manageBtnsDefault(data) {
  if (data.isStart) {
    Utilites.enableBtn(refs.stopBtn);
    Utilites.disableBtn(refs.startBtn);
    return;
  }

  Utilites.enableBtn(refs.startBtn);
  Utilites.disableBtn(refs.stopBtn);
}

export function checkLine(line) {
  console.log(line);

  refs.editWrap.innerHTML = `<button type="button" class="edit-btn"><img class="edit-icon" src="${editIcon}"/></button>`;
  document.querySelector('.edit-btn').disabled = true;
  document.querySelector('.edit-btn').style.visibility = 'hidden';
  refs.taskForm.classList.remove('task-form-hidden');
  refs.username.innerHTML = `Hi ${getName()},`;
  refs.taskFormDescription.innerHTML = `Before you begin, please enter the name of the task in the box below and click on the "Save" button.`;

  if (line && line !== '') {
    document.querySelector('.edit-btn').disabled = false;
    document.querySelector('.edit-btn').style.visibility = 'visible';
    refs.taskForm.classList.add('task-form-hidden');
    refs.username.innerHTML = `Great ${getName()}!`;
    refs.taskFormDescription.innerHTML = `The process you'll be timing is "${line}".`;
    document.querySelector('.edit-btn').addEventListener('click', onLineEdit);
  }
}

export function onLineEdit() {
  FirebaseApi.setCurrentLine('');
}
