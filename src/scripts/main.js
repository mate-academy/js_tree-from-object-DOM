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
    return;
  }

  for (const [key, x] of Object.entries(data)) {
    const newElement = document.createElement('li');

    newElement.innerText = `${key}`;

    element.appendChild(newElement);

    if (Object.keys(x).length > 0) {
      const newUl = document.createElement('ul');

      newElement.appendChild(newUl);
      createTree(newUl, x);
    }
  }
}

createTree(tree, food);
