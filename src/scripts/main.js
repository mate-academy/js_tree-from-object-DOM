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
    const li = document.createElement('li');

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length > 0
    ) {
      li.textContent = key;
      createTree(li, data[key]);
    } else {
      li.textContent = `${key}: ${data[key]}`;
    }

    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
