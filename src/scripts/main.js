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

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.innerHTML = key;

    ul.insertAdjacentElement('beforeend', li);

    createTree(li, value);
  }

  if (Object.values(data).length !== 0) {
    element.insertAdjacentElement('beforeend', ul);
  }
}

createTree(tree, food);
