import { refs } from './refs';
import { convertMs } from './utilites';

export const renderProcessesStepsList = data => {
  const render = data
    .map(
      el => `
    <li class="process-list-item">
    <div>
    <div class="step-time-item">
        <div>
          <p class="step">Step ${el.step}</p>
          <p class="time">${convertMs(el.time).minutes}:${
        convertMs(el.time).secunds
      },${convertMs(el.time).milisecunds}</p>
        </div>
    </div>
    <div class="step-description">
      <div class="step-task">
        <p>${el.task}</p>
      </div>
    </div>
    </div>
    </li>
  `
    )
    .join('');

  refs.stepsList.innerHTML = render;
};
