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
  const nodeList = document.createElement('ul');

  for (const key of Object.keys(data)) {
    const nodeItemOfList = document.createElement('li');

    nodeItemOfList.textContent = key;

    if (Object.keys(data[key]).length !== 0) {
      createTree(nodeItemOfList, data[key]);
    }

    nodeList.append(nodeItemOfList);
  }

  element.append(nodeList);
}

createTree(tree, food);
