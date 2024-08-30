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

const treeDiv = document.createElement('div');

treeDiv.id = 'tree';
document.body.insertBefore(treeDiv, document.body.firstChild);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    list.appendChild(item);
    item.textContent = key;

    if (typeof data[key] === 'object') {
      element.append(list);
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
