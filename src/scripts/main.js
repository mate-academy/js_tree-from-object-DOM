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
  const ulElem = document.createElement('ul');

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const liElem = document.createElement('li');

      liElem.textContent = key;

      ulElem.appendChild(liElem);

      if (
        typeof data[key] === 'object' &&
        data[key] !== null &&
        !!Object.keys(data[key]).length
      ) {
        createTree(liElem, data[key]);
      }
    }
  }

  element.appendChild(ulElem);
}

createTree(tree, food);
