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
  if (typeof data !== 'object' || data === null) {
    return;
  }

  const mainUlElement = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const liElement = document.createElement('li');

      liElement.textContent = key;

      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        Object.keys(data[key]).length > 0
      ) {
        createTree(liElement, data[key]);
      }

      mainUlElement.append(liElement);
    }
  }

  if (mainUlElement.children.length > 0) {
    element.append(mainUlElement);
  }
}

createTree(tree, food);
