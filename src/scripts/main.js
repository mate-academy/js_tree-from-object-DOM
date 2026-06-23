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
  if (!element) {
    return;
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.appendChild(li);

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length > 0
    ) {
      createTree(li, data[key]);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
