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
// const list = document.createElement('ul');

// tree.appendChild(list).textContent = 'fdhhdf';

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const listNested = document.createElement('li');

    listNested.textContent = key;
    list.appendChild(listNested);

    if (typeof data[key] === 'object') {
      createTree(listNested, data[key]);
    }

    element.appendChild(list);
  }
}

createTree(tree, food);
