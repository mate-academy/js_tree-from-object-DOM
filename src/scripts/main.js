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

  for (const entry of Object.entries(data)) {
    const li = ul.appendChild(document.createElement('li'));

    li.textContent = entry[0];

    if (Object.keys(entry[1]).length > 0) {
      createTree(li, entry[1]);
    }
  }
}

createTree(tree, food);
