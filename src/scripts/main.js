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

  const list = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.insertAdjacentHTML('beforeend', `${key}`);

    createTree(listItem, data[key]);
    list.append(listItem);
  }

  element.append(list);
}

createTree(tree, food);
