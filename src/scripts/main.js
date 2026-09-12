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
  // WRITE YOUR CODE HERE
  const entries = Object.entries(data);

  if (entries.length !== 0) {
    const list = document.createElement('ul');

    for (const [k, v] of entries) {
      const listItem = document.createElement('li');

      listItem.textContent = k;
      createTree(listItem, v);

      list.append(listItem);
    }

    element.append(list);
  }
}

createTree(tree, food);
