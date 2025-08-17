/* eslint-disable no-unused-vars */
'use strict';

function createTree(element, data) {
  if (!data || Object.keys(data).length === 0) {
    return; // 🟢 Якщо об'єкт пустий — нічого не робимо
  }

  function buildList(obj) {
    const ul = document.createElement('ul');

    for (const key in obj) {
      const li = document.createElement('li');
      // eslint-disable-next-line padding-line-between-statements
      li.textContent = key;

      if (Object.keys(obj[key]).length > 0) {
        li.appendChild(buildList(obj[key]));
      }

      ul.appendChild(li);
    }

    return ul;
  }

  element.innerHTML = '';
  element.appendChild(buildList(data));
}
