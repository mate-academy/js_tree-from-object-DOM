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
    if (!data.hasOwnProperty(key)) continue;

    const li = document.createElement('li');
    li.textContent = key;

    // Перевіряємо, що значення об’єкт і не null, і має ключі
    if (typeof data[key] === 'object' && data[key] !== null && Object.keys(data[key]).length > 0) {
      createTree(li, data[key]); // рекурсивно додаємо підсписок
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}


createTree(tree, food);
