export function renderProcessesList(data) {
  return data
    .map(
      el =>
        `<li class="process-item">
                <p class="process-item-name">
                  ${el.name}
                </p>
              </li>`
    )
    .join('');
}
