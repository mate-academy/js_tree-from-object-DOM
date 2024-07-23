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

document.addEventListener('DOMContentLoaded', () => {
  //  const tree = document.querySelector('#tree');

  const tree = document.createElement('div');

  tree.id = 'tree';
  document.body.appendChild(tree);

  function createTree(element, data) {
    if (
      typeof data === 'object' &&
      data !== null &&
      Object.keys(data).length > 0
    ) {
      const ul = document.createElement('ul');

      for (const key in data) {
        const li = document.createElement('li');

        li.textContent = key;
        ul.appendChild(li);

        createTree(li, data[key]);
      }

      element.appendChild(ul);
    }
  }

  createTree(tree, food);
});
