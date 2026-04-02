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
  function branch(list, nestedList = element) {
    for (const key in list) {
      const root = document.createElement('li');

      root.textContent = key;
      nestedList.appendChild(root);

      if (list[key] && typeof list[key] === 'object') {
        const splitRoot = document.createElement('ul');

        if (Object.keys(list[key]).length > 0) {
          root.appendChild(splitRoot);
        }
        branch(list[key], splitRoot);
      }
    }
  }

  branch(data);
}

createTree(tree, food);
