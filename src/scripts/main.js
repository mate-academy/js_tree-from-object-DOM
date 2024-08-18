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
  const list = document.createElement('ul');

  element.append(list);

  for (const key in data) {
    const listElement = document.createElement('li');

    listElement.textContent = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(listElement, data[key]);
    }

    list.append(listElement);
  }
}

createTree(tree, food);
