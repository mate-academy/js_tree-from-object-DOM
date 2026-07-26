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
    const item = document.createElement('li');

    item.textContent = key;
    ul.appendChild(item);

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }
  }

  element.appendChild(ul);
}
createTree(tree, food);
