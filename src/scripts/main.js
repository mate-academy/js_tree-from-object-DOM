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
  const ul = buildTree(data);

  element.appendChild(ul);
}

function buildTree(data) {
  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    // якщо є вкладені об'єкти — викликаємо рекурсію
    if (Object.keys(data[key]).length > 0) {
      li.appendChild(buildTree(data[key]));
    }

    ul.appendChild(li);
  }

  return ul;
}

createTree(tree, food);
