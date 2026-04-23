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
  const ul = element.appendChild(document.createElement('ul'));

  for (const [key, val] of Object.entries(data)) {
    const li = ul.appendChild(document.createElement('li'));

    li.textContent = key;

    if (Object.keys(val).length) {
      createTree(li, val);
    }
  }
}

createTree(tree, food);
