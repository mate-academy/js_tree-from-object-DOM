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

const treeElement = document.createElement('div');

treeElement.setAttribute('id', 'tree');

document.body.prepend(treeElement);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const keys = Object.keys(data);

  const listElement = document.createElement('ul');

  keys.forEach((key) => {
    const itemElement = document.createElement('li');

    itemElement.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(itemElement, data[key]);
    }

    listElement.append(itemElement);
  });

  element.append(listElement);
}

createTree(tree, food);
