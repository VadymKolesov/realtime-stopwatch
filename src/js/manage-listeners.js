import {
  getData,
  setData,
  getStepsList,
  addStepToList,
  getCurrentLine,
  resetStepList,
} from './firebase-api';
import * as Utilites from './utilites';
import { refs } from './refs';
import { nanoid } from 'nanoid';

export async function setReady() {
  const data = await getData();
  if (data.isReady < 2) {
    const newReadyID = data.isReady + 1;
    localStorage.setItem('readyID', newReadyID);
    Utilites.disableBtn(refs.readyBtn);
    setData({
      ...data,
      isReady: newReadyID,
    });
  }
}

export async function onStart() {
  const data = await getData();
  const startDate = Date.now();
  setData({
    ...data,
    isStart: true,
    start: startDate,
  });
}

export async function onStop() {
  const user = JSON.parse(localStorage.getItem('log')).user;
  const data = await getData();
  const stepsList = await getStepsList();
  const currentLine = await getCurrentLine();

  const stopDate = Date.now();
  const stepNum = stepsList.items.length > 0 ? stepsList.items.length + 1 : 1;
  const seconds = stopDate - data.start;

  const newStepItem = {
    id: nanoid(),
    user: user,
    task: currentLine,
    step: stepNum,
    time: seconds,
  };

  addStepToList(newStepItem);

  setData({
    ...data,
    isReady: 0,
    isStart: false,
    stop: stopDate,
  });
}

export function onReset() {
  refs.resetBackdrop.classList.remove('visually-hidden');
  document.querySelector('body').style.overflow = 'hidden';
  refs.resetBackdrop.addEventListener('click', onClose);
  refs.listBtns.classList.add('button-hidden');
  document.addEventListener('keydown', onCloseByEsc);
}

function onClose(e) {
  if (
    e.target.classList.contains('reset-backdrop') ||
    e.target.classList.contains('no-btn')
  ) {
    document.querySelector('body').style.overflow = 'auto';
    refs.resetBackdrop.classList.add('visually-hidden');
    refs.listBtns.classList.remove('button-hidden');
  }
  if (e.target.classList.contains('yes-btn')) {
    document.querySelector('body').style.overflow = 'auto';
    refs.resetBackdrop.classList.add('visually-hidden');
    resetStepList();
  }
}

function onCloseByEsc(e) {
  if (e.keyCode === 27) {
    document.querySelector('body').style.overflow = 'auto';
    refs.resetBackdrop.classList.add('visually-hidden');
    refs.listBtns.classList.remove('button-hidden');
  }
}
