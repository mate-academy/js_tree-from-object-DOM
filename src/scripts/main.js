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
  for (const key in data) {
    const ul = document.createElement('ul');

    element.insertAdjacentElement('beforeend', ul);

    const li = document.createElement('li');

    ul.insertAdjacentElement('beforeend', li);
    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
