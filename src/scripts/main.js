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

document.body.id = 'tree';

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  for (const key in data) {
    const listElement = document.createElement('li');

    listElement.textContent = key;
    list.appendChild(listElement);

    if (Object.keys(data[key]).length > 0) {
      createTree(listElement, data[key]);
    }
  }

  element.appendChild(list);
}

createTree(tree, food);
