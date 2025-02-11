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
  if (Object.entries(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  Object.entries(data).map(([key, value]) => {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    ul.append(listItem);

    createTree(listItem, value);
  });

  element.append(ul);
}

createTree(tree, food);
