import { convertMs } from './utilites';

export function renderTotalList(data) {
  return data
    .map(
      el =>
        `
    <li class="total-list-item">
          <p class="total-list-title">${el.process}</p>
          <ul class="total-list-tasks">
            ${el.items
              .map(
                e => `
                <li class="total-list-tasks-item">
              <div class="total-task">
                <p class="total-list-tasks-step">${e.step}.</p>
                <p class="total-list-tasks-task">${e.task}</p>
              </div>
              <p class="total-list-tasks-time">
                ${convertMs(e.time).minutes}:${convertMs(e.time).secunds},${
                  convertMs(e.time).milisecunds
                }
              </p>
            </li>
            `
              )
              .join('')}
          </ul>
          <button id="${
            el.id
          }" type="button" class="total-list-item-delete">Delete</button>
        </li>
    `
    )
    .join('');
}
