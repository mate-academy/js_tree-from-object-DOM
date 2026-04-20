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

// hi
const tree = document.querySelector('#tree');

function createTree(element, data) {
  for (const oneList in data) {
    const listName = document.createElement('li');

    listName.textContent = oneList;
    element.appendChild(listName);

    if (Object.keys(data[oneList]).length > 0) {
      const listNode = document.createElement('ul');

      createTree(listNode, data[oneList]);
      listName.appendChild(listNode);
    }
  }
}

createTree(tree, food);
