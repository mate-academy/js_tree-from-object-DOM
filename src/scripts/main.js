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
    const li = document.createElement('li');

    if (typeof data[key] === 'object' && data[key] !== null) {
      element.appendChild(ul);
      li.textContent = key;
      ul.appendChild(li);

      createTree(ul, data[key]);
    }
  }
}
createTree(tree, food);
