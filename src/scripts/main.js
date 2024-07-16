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
  const mainUl = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const liElement = document.createElement('li');

    liElement.textContent = key;
    mainUl.appendChild(liElement);

    if (typeof value === 'object' && Object.keys(value).length > 0) {
      createTree(liElement, value);
    }
  }

  element.appendChild(mainUl);
}

createTree(tree, food);
