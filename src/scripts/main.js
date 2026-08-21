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
  if (!data || Object.keys(data).length === 0) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  const ulItem = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const liItem = document.createElement('li');

    liItem.textContent = key;

    createTree(liItem, value);

    ulItem.append(liItem);
  }
  element.append(ulItem);
}

createTree(tree, food);
