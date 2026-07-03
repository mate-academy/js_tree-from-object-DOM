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
  if (!element || !data || typeof data !== 'object') {
    return;
  }

  for (const key in data) {
    const mainListElement = document.createElement('li');

    mainListElement.textContent = key;

    element.append(mainListElement);

    if (
      typeof data[key] === 'object' &&
      data[key] !== null &&
      Object.keys(data[key]).length > 0
    ) {
      const nextListElement = document.createElement('ul');

      mainListElement.append(nextListElement);

      createTree(nextListElement, data[key]);
    }
  }
}

createTree(tree, food);
