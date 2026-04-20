'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tree = document.getElementById('tree');

  const food = {
    Drink: {
      Wine: {},
      Schnaps: {},
    },
    Fruit: {
      Red: {
        Cherry: {},
        Strawberry: {},
      },
      Yellow: {
        Banana: {},
        Pineapple: {},
      },
    },
  };

  function createTree(element, data) {
    if (!data || typeof data !== 'object') return;

    const ul = document.createElement('ul');
    element.appendChild(ul);

    for (const key in data) {
      const li = document.createElement('li');
      li.textContent = key;
      ul.appendChild(li);

      // Якщо є вкладені об'єкти — рекурсивно додаємо ul всередину li
      if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
        createTree(li, data[key]);
      }
    }
  }

  createTree(tree, food);
});
