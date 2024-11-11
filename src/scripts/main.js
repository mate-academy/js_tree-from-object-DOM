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

  for (const i in data) {
    const li = document.createElement('li');

    li.textContent = i;

    if (typeof data[i] === 'object' && data[i] !== null) {
      createTree(li, data[i]);
    }

    ul.appendChild(li);
  }

  if (ul.childNodes.length > 0) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
