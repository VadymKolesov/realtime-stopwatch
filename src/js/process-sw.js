import { refs } from './refs';
import * as FirebaseApi from './firebase-api';
import { renderProcessesList } from './render-processes-list';
import { renderProcessesStepsList } from './render-processes-steps-list';
import { renderTotalList } from './render-total-list';
import {
  checkLogin,
  debounce,
  disableBtn,
  enableBtn,
  getName,
  getProcess,
  onBack,
  onErrorToast,
} from './utilites';
import editIcon from '../img/edit.svg';
import { renderWatch } from './watch';
import { nanoid } from 'nanoid';

let timerInterval;
const listPosition = refs.sectionList.getBoundingClientRect().top;

if (!localStorage.getItem('processes')) {
  localStorage.setItem('processes', '[]');
}

if (!localStorage.getItem('allProcesses')) {
  localStorage.setItem('allProcesses', '[]');
}

checkLogin();
checkProcess();

document.addEventListener('click', onProcessInputFocus);
refs.backBtn.addEventListener('click', onBack);
refs.processInput.addEventListener('focus', onProcessInputFocus);
refs.processInput.addEventListener('input', () =>
  debounce(filterProcesses, 500)
);
refs.processList.addEventListener('click', onChooseProcessItem);
refs.taskForm.addEventListener('submit', onSaveTask);
refs.startBtn.addEventListener('click', onStart);
refs.pauseBtn.addEventListener('click', onPause);
refs.resumeBtn.addEventListener('click', onResume);
refs.lapBtn.addEventListener('click', onNewStep);
refs.stopBtn.addEventListener('click', onStop);
refs.sendBtn.addEventListener('click', onSave);
refs.showListBtn.addEventListener('click', onShowList);
document.querySelector('.send-btn-wrap').addEventListener('click', onSend);
window.addEventListener('scroll', showSaveBtn);

if (refs.deleteTotalBtn[0]) {
  refs.totalList.addEventListener('click', onDeleteTotalItem);
}

refs.navName.innerHTML = JSON.parse(localStorage.getItem('log')).user;

async function onProcessInputFocus() {
  const data = await FirebaseApi.getProcesses();
  refs.processList.innerHTML = renderProcessesList(data);

  if (refs.processInput === document.activeElement) {
    refs.taskForm.style.overflow = 'visible';
    refs.processList.classList.remove('visually-hidden');
  } else {
    refs.taskForm.style.overflow = 'hidden';
    refs.processList.classList.add('visually-hidden');
  }
}

function onChooseProcessItem(e) {
  const processName = e.target.textContent.trim();
  refs.processInput.value = processName;
}

async function filterProcesses() {
  const val = refs.processInput.value;
  const data = await FirebaseApi.getProcesses();

  const filteredItems = data.filter(el =>
    el.name.toLowerCase().includes(val.toLowerCase())
  );

  const render = renderProcessesList(filteredItems);
  refs.processList.innerHTML = render;
}

async function onSaveTask(e) {
  e.preventDefault();
  const val = refs.processInput.value;
  const data = await FirebaseApi.getProcesses();

  const process = data.find(el => el.name === val);

  if (process) {
    localStorage.setItem('process', JSON.stringify(process));
  } else {
    onErrorToast('Please, choose a process from list.', '#');
  }
  enableBtn(refs.startBtn);

  checkProcess();
}

function showSaveBtn() {
  const windowScrollHeight = window.scrollY;

  if (refs.processesSaveBtn && windowScrollHeight >= 200) {
    refs.processesSaveBtn.classList.remove('button-hidden');
  } else {
    refs.processesSaveBtn.classList.add('button-hidden');
  }
}

function checkProcess() {
  const process = JSON.parse(localStorage.getItem('process'));
  const savedProcesses = JSON.parse(localStorage.getItem('processes'));
  const allProcesses = JSON.parse(localStorage.getItem('allProcesses'));
  renderProcessesStepsList(savedProcesses);

  if (allProcesses.length <= 0) {
    refs.totalList.innerHTML = `<p class="empty-message">List is empty</p>`;
    refs.sendBtnWrap.innerHTML = ``;
    document.querySelector('.total-quantity').classList.add('visually-hidden');
    document.querySelector('.total-quantity-number').innerHTML = 0;
  } else {
    refs.totalList.innerHTML = renderTotalList(allProcesses);
    refs.sendBtnWrap.innerHTML = `<button class="send-total-btn active-btn">Send</button>`;
    document
      .querySelector('.total-quantity')
      .classList.remove('visually-hidden');
    document.querySelector('.total-quantity-number').innerHTML =
      allProcesses.length;
  }

  if (!process) {
    clearInterval(timerInterval);
    refs.taskForm.classList.remove('task-form-hidden');
    disableBtn(refs.startBtn);
    disableBtn(refs.lapBtn);
    disableBtn(refs.stopBtn);
    refs.username.innerHTML = `Hi ${getName()},`;
    refs.taskFormDescription.innerHTML = `Before you begin, please enter the name of the task in the box below and click on the "Save" button.`;
    return;
  }

  refs.editWrap.innerHTML = `<button type="button" class="edit-btn"><img class="edit-icon" src="${editIcon}"/></button>`;

  document.querySelector('.edit-btn').disabled = true;
  document.querySelector('.edit-btn').style.visibility = 'hidden';

  if (process.startDate && !timerInterval && !process.onPause) {
    timerInterval = setInterval(() => {
      const currentTime = Date.now() - process.startDate;
      renderWatch(currentTime);
    }, 10);

    enableBtn(refs.pauseBtn);
    disableBtn(refs.startBtn);
    enableBtn(refs.lapBtn);
    enableBtn(refs.stopBtn);
  } else if (!process.startDate) {
    disableBtn(refs.pauseBtn);
    disableBtn(refs.lapBtn);
    disableBtn(refs.stopBtn);
    enableBtn(refs.startBtn);
    document.querySelector('.edit-btn').disabled = false;
    document.querySelector('.edit-btn').style.visibility = 'visible';
  }

  if (process.onPause) {
    clearInterval(timerInterval);
    timerInterval = null;
    enableBtn(refs.resumeBtn);
    disableBtn(refs.pauseBtn);
    disableBtn(refs.stopBtn);
    disableBtn(refs.startBtn);
    disableBtn(refs.lapBtn);
  }

  refs.taskForm.classList.add('task-form-hidden');
  refs.username.innerHTML = `Great ${getName()}!`;
  refs.taskFormDescription.innerHTML = `The process you'll be timing is "${
    getProcess().name
  }".`;
  document.querySelector('.edit-btn').addEventListener('click', onEdit);
  document
    .querySelector('.list-btns-processes')
    .classList.remove('btns-list-visible');

  if (savedProcesses.length >= process.steps.length) {
    clearInterval(timerInterval);

    const process = JSON.parse(localStorage.getItem('process'));

    delete process.startDate;
    localStorage.setItem('process', JSON.stringify(process));

    document
      .querySelector('.list-btns-processes')
      .classList.add('btns-list-visible');

    disableBtn(refs.startBtn);
    disableBtn(refs.pauseBtn);
    disableBtn(refs.resumeBtn);
    disableBtn(refs.lapBtn);
    enableBtn(refs.stopBtn);
  }
}

function onEdit() {
  localStorage.removeItem('process');
  document.querySelector('.edit-btn').remove();
  localStorage.setItem('processes', '[]');
  checkProcess();
}

function onStart() {
  const process = JSON.parse(localStorage.getItem('process'));

  if (!process) {
    refs.taskInput.classList.add('task-input-required');
    onErrorToast('Please, enter the task', '#task');
    return;
  }

  process.onPause = false;

  const startDate = Date.now();
  process.startDate = startDate;
  localStorage.setItem('process', JSON.stringify(process));

  checkProcess();
}

function onPause() {
  const process = JSON.parse(localStorage.getItem('process'));

  process.onPause = true;

  const pauseTime = Date.now();
  process.pauseDate = pauseTime;

  localStorage.setItem('process', JSON.stringify(process));

  checkProcess();
}

function onResume() {
  const process = JSON.parse(localStorage.getItem('process'));
  const savedProcesses = JSON.parse(localStorage.getItem('processes'));
  const stepIndex = savedProcesses.length;

  const startTime = process.startDate;
  const pauseTime = process.pauseDate;
  const currentTime = Date.now();
  const resumeTime = currentTime - (pauseTime - startTime);

  if (stepIndex > 0) {
    const diffrenceTime = currentTime - pauseTime;
    savedProcesses[stepIndex - 1].currentTime += diffrenceTime;
    localStorage.setItem('processes', JSON.stringify(savedProcesses));
  }

  process.startDate = resumeTime;
  process.onPause = false;

  delete process.pauseDate;

  localStorage.setItem('process', JSON.stringify(process));

  disableBtn(refs.resumeBtn);
  enableBtn(refs.pauseBtn);
  enableBtn(refs.stopBtn);
  enableBtn(refs.lapBtn);

  checkProcess();
}

function onNewStep() {
  const process = JSON.parse(localStorage.getItem('process'));
  const savedProcesses = JSON.parse(localStorage.getItem('processes'));
  const log = JSON.parse(localStorage.getItem('log'));

  process.onPause = false;

  refs.watch.classList.add('push-watch');
  setTimeout(() => {
    refs.watch.classList.remove('push-watch');
  }, 200);

  const currentTime = Date.now();

  const stepIndex = savedProcesses.length;
  const time =
    savedProcesses.length > 0
      ? currentTime - savedProcesses[stepIndex - 1].currentTime
      : currentTime - process.startDate;

  const item = {
    id: nanoid(),
    step: stepIndex + 1,
    user: log.user,
    time: time,
    currentTime: currentTime,
    process: process.name,
    task: process.steps[stepIndex],
  };

  savedProcesses.push(item);
  localStorage.setItem('processes', JSON.stringify(savedProcesses));

  checkProcess();
}

function onStop() {
  const process = JSON.parse(localStorage.getItem('process'));

  process.onPause = false;

  delete process.startDate;
  localStorage.setItem('process', JSON.stringify(process));
  clearInterval(timerInterval);
  timerInterval = null;

  localStorage.setItem('processes', '[]');

  renderWatch(0);
  checkProcess();
}

function onSave() {
  const processes = JSON.parse(localStorage.getItem('processes'));
  const allProcesses = JSON.parse(localStorage.getItem('allProcesses'));

  const item = {
    id: nanoid(),
    type: 'process-stop-watch',
    process: processes[0].process,
    items: processes,
  };

  allProcesses.push(item);

  localStorage.setItem('allProcesses', JSON.stringify(allProcesses));
  localStorage.setItem('processes', '[]');

  clearTimeout(timerInterval);
  timerInterval = null;

  checkProcess();
}

function onShowList() {
  document.querySelector('body').style.overflow = 'hidden';
  refs.hideListBtn.addEventListener('click', onHideList);
  refs.listBackdrop.classList.remove('visually-hidden');
}

function onHideList() {
  document.querySelector('body').style.overflow = 'visible';
  refs.listBackdrop.classList.add('visually-hidden');
}

function onDeleteTotalItem(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = e.target.id;
  const data = JSON.parse(localStorage.getItem('allProcesses'));

  const filteredData = data.filter(el => el.id !== id);
  localStorage.setItem('allProcesses', JSON.stringify(filteredData));

  setTimeout(() => {
    checkProcess();
  }, 200);
}

async function onSend() {
  refs.sendBackdrop.classList.remove('visually-hidden');
  const data = JSON.parse(localStorage.getItem('allProcesses'));

  const arr = [];

  for (let item of data) {
    item.items.forEach(el => arr.push(el));
  }

  const returnData = {
    type: 'process-stop-watch',
    items: arr,
  };

  document.querySelector('.send-btn-wrap').classList.add('visually-hidden');

  try {
    const res = await fetch(
      'https://script.google.com/macros/s/AKfycbwQfPNpDsZK7s3qT5Jt8PBS7B2YnK_ILFqPV65fPhuc7J9jd8vJYz4g8oSnoR0GqPSE/exec',
      {
        method: 'POST',
        body: JSON.stringify(returnData),
      }
    );
  } catch (error) {
    onErrorToast('Oops. Something went wrong.', '#');
  } finally {
    document
      .querySelector('.send-btn-wrap')
      .classList.remove('visually-hidden');
    refs.sendBackdrop.classList.add('visually-hidden');
  }
}
