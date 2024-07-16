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

    li.textContent = key;

    ul.appendChild(li);

    const keysArray = Object.keys(data[key]);

    if (keysArray.length > 0) {
      createTree(li, data[key]);
    }
  }

  element.appendChild(ul);
}

createTree(tree, food);
