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
  const newList = document.createElement('ul');

  for (const node in data) {
    const newItem = document.createElement('li');
    let subList;

    newItem.textContent = node;

    if (typeof data[node] === 'object') {
      subList = createTree(tree, data[node]);
      newItem.appendChild(subList);
    }
    newList.appendChild(newItem);
  }

  return newList;
}

tree.appendChild(createTree(tree, food));
