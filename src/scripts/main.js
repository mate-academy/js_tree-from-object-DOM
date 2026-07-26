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

const divTree = document.createElement('div');

divTree.id = 'tree';
document.body.prepend(divTree);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!data || typeof data !== 'object') {
    return;
  }

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length > 0) {
      const ul = document.createElement('ul');

      createTree(ul, data[key]);
      li.appendChild(ul);
    }

    element.appendChild(li);
  }
}

createTree(tree, food);
