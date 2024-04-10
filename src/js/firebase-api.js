import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set } from 'firebase/database';
import {
  doc,
  onSnapshot,
  getFirestore,
  setDoc,
  getDoc,
} from 'firebase/firestore';
import firebaseConfig from './firebase-config';
import { db } from './database';
import { manageBtns, manageBtnsDefault, checkLine } from './manage-btns';
import { manageWatchInterval } from './watch';
import { showUsers } from './manage-users';
import { renderStepsList } from './render-steps-list';
import { removeIndicatorBusy, setIndicatorBusy } from './utilites';

export async function getFirebaseData() {
  const dbRef = ref(getDatabase());
  const data = await get(child(dbRef, `timer/`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
  return data;
}

export function writeData(data) {
  const db = getDatabase();
  set(ref(db, 'timer/'), data);
}

export async function checkList() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  onSnapshot(doc(db, 'list', 'Oi4nFSVsaGY2GQtak5IO'), doc => {
    const data = doc.data().items.reverse();
    renderStepsList(data);
  });
}

export async function checkCurrentLine() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  onSnapshot(doc(db, 'realtimeLines', 'current'), doc => {
    const data = doc.data().currentLine;
    checkLine(data);
  });
}

export function checkData() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  onSnapshot(doc(db, 'data', 'GKpJfJAhEovC4aEqzc9C'), doc => {
    const data = doc.data();
    manageBtns(data);
    showUsers(data);
    manageWatchInterval(data);
  });
}

export async function getData() {
  const docRef = doc(db, 'data', 'GKpJfJAhEovC4aEqzc9C');
  const data = await getDoc(docRef);
  return data.data();
}

export async function getCurrentLine() {
  const docRef = doc(db, 'realtimeLines', 'current');
  const data = await getDoc(docRef);
  return data.data().currentLine;
}

export async function setData(data) {
  const docRef = await setDoc(doc(db, 'data', 'GKpJfJAhEovC4aEqzc9C'), {
    ...data,
  });
}

export async function setCurrentLine(line) {
  const docRef = await setDoc(doc(db, 'realtimeLines', 'current'), {
    currentLine: line,
  });
}

export async function getStepsList() {
  const docRef = doc(db, 'list', 'Oi4nFSVsaGY2GQtak5IO');
  const data = await getDoc(docRef);
  return data.data();
}

export async function addStepToList(data) {
  const prevList = await getStepsList();
  setDoc(doc(db, 'list', 'Oi4nFSVsaGY2GQtak5IO'), {
    items: [...prevList.items, data],
  });
}

export async function resetStepList() {
  const prevList = await getStepsList();
  setDoc(doc(db, 'list', 'Oi4nFSVsaGY2GQtak5IO'), {
    items: [],
  });
}

export async function deleteStepById(id) {
  const prevList = await getStepsList();
  const newList = prevList.items.filter(el => el.id !== id);

  for (let i = 0; i < newList.length; i++) {
    if (i === 0) {
      newList.step === 1;
    }

    newList[i].step = i + 1;
  }

  setDoc(doc(db, 'list', 'Oi4nFSVsaGY2GQtak5IO'), {
    items: newList,
  });
}

export function checkDefaultData() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  onSnapshot(doc(db, 'data', 'Default'), doc => {
    const data = doc.data();
    manageBtnsDefault(data);
    manageWatchInterval(data);
  });
}

export async function checkDefaultList() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  onSnapshot(doc(db, 'list', 'Default'), doc => {
    const data = doc.data().items.reverse();
    renderStepsList(data);
  });
}

export async function getDefaultData() {
  const docRef = doc(db, 'data', 'Default');
  const data = await getDoc(docRef);
  return data.data();
}

export async function setDefaultData(data) {
  const docRef = await setDoc(doc(db, 'data', 'Default'), {
    ...data,
  });
}

export async function getDefaultStepsList() {
  const docRef = doc(db, 'list', 'Default');
  const data = await getDoc(docRef);
  return data.data();
}

export async function addDefaultStepToList(data) {
  const prevList = await getDefaultStepsList();
  setDoc(doc(db, 'list', 'Default'), {
    items: [...prevList.items, data],
  });
}

export async function deleteDefaultStepById(id) {
  const prevList = await getDefaultStepsList();
  const newList = prevList.items.filter(el => el.id !== id);

  for (let i = 0; i < newList.length; i++) {
    if (i === 0) {
      newList.step === 1;
    }

    newList[i].step = i + 1;
  }

  setDoc(doc(db, 'list', 'Default'), {
    items: newList,
  });
}

export async function resetDefaultStepList(data) {
  const prevList = await getDefaultStepsList();
  setDoc(doc(db, 'list', 'Default'), {
    items: [],
  });
}

export async function getUsers() {
  const docRef = doc(db, 'users', 'tokens');
  const data = await getDoc(docRef);
  return data.data().data;
}

export async function setIsBusy(docName, object) {
  const docRef = await setDoc(doc(db, 'online', docName), {
    item: object,
  });
}

export async function getIsBusy(docName) {
  const docRef = doc(db, 'online', docName);
  const data = await getDoc(docRef);
  return data.data().item;
}

export async function checkIsBusy(docName) {
  const data = await getIsBusy(docName);
  const timeNow = Date.now();

  if (timeNow - data.lastTime < 30000) {
    setIndicatorBusy(docName, data.user);
    return;
  } else {
    const object = {
      ...data,
      user: '',
      isBusy: false,
    };
    setIsBusy(docName, object);
    removeIndicatorBusy(docName);
  }
}

export async function checkUser(docName) {
  const data = await getIsBusy(docName);

  const localUser = JSON.parse(localStorage.getItem('log')).user;
  const dataUser = data.user;

  if (data.isBusy && localUser !== dataUser) {
    const arr = location.pathname.split('/');
    location.pathname = `/${arr[1]}`;
  }

  return;
}

export async function getProcesses() {
  const docRef = doc(db, 'processes', 'processes-m13');
  const data = await getDoc(docRef);
  return data.data().items;
}
