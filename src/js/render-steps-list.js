import { refs } from './refs';
import { convertMs } from './utilites';

export const renderStepsList = data => {
  if (data.length > 0) {
    refs.listBtns.classList.add('btns-list-visible');
  } else {
    refs.listBtns.classList.remove('btns-list-visible');
  }

  const render = data
    .map(
      el => `
    <li class="step-item">
    <div class="step-time-item">
        <div>
          <p class="step">Step ${el.step}</p>
          <p class="time">${convertMs(el.time).minutes}:${
        convertMs(el.time).secunds
      },${convertMs(el.time).milisecunds}</p>
        </div>
        <button id="${el.id}" type="button" class="delete-btn">Delete</button>
    </div>
    <div class="step-description">
      <p class="step-user">${el.user}</p>
      <p class="step-task">Task: ${el.task}</p>
    </div>
    </li>
  `
    )
    .join('');

  refs.stepsList.innerHTML = render;
};
