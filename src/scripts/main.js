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
  if (Object.keys(data).length === 0) {
    return 0;
  }

  const ulElement = document.createElement('ul');

  for (const key in data) {
    const liElement = document.createElement('li');

    liElement.textContent = key;

    if (typeof data[key] === 'object' && Object.keys(data[key]).length !== 0) {
      createTree(liElement, data[key]);
    }

    ulElement.append(liElement);
  }

  element.append(ulElement);
}

createTree(tree, food);
