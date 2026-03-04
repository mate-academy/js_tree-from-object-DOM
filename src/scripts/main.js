'use strict';

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

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    if (!data.hasOwnProperty(key)) {
      continue;
    }

    const li = document.createElement('li');

    li.textContent = key;

    const value = data[key];

    if (
      typeof value === 'object' &&
      value !== null &&
      Object.keys(value).length > 0
    ) {
      createTree(li, value);
    }

    ul.appendChild(li);
  }

  // 5️⃣ Додаємо готовий список в element
  element.appendChild(ul);
}

createTree(tree, food);
