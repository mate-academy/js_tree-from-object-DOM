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
  const list = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    list.appendChild(li);

    const keysArray = Object.keys(data[key]);

    if (keysArray.length > 0) {
      createTree(li, data[key]);
    }
  }

  if (Object.keys(data).length > 0) {
    element.appendChild(list);
  }
}

createTree(tree, food);
