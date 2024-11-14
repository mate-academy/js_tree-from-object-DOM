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
  const topUL = document.createElement('ul');

  for (const topKey in data) {
    const topLI = document.createElement('li');

    topLI.textContent = topKey;

    if (Object.keys(data[topKey]).length > 0) {
      createTree(topLI, data[topKey]);
    }

    topUL.append(topLI);
  }

  element.append(topUL);
}

createTree(tree, food);
