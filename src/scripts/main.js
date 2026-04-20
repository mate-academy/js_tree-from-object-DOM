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
  if (Object.keys(data).length > 0) {
    for (const [key, value] of Object.entries(data)) {
      const keyElem = document.createElement('li');

      keyElem.textContent = key;
      element.appendChild(keyElem);

      if (Object.keys(value).length > 0) {
        const listElem = document.createElement('ul');

        keyElem.appendChild(listElem);

        createTree(listElem, value);
      }
    }
  }
}

createTree(tree, food);
