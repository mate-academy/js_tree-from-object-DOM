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
  let treeElement = element;

  if (!treeElement) {
    treeElement = document.createElement('div');
    treeElement.id = 'tree';
    document.body.appendChild(treeElement);
  }

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      const ul = document.createElement('ul');

      createTree(ul, data[key]);
      li.appendChild(ul);
    }

    treeElement.appendChild(li);
  }

  return treeElement;
}

createTree(tree, food);
