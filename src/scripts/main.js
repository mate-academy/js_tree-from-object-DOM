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
  if (!data) {
    return;
  }

  const listElement = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.innerHTML = key;

    listElement.append(listItem);

    createTree(listItem, data[key]);
  }

  element.append(listElement);
}

createTree(tree, food);
