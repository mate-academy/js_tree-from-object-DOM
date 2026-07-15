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

  const mainList = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    const value = data[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      listItem.textContent = key;

      createTree(listItem, value);
    } else {
      listItem.textContent = value;
    }

    mainList.append(listItem);
  }

  element.append(mainList);
}

createTree(tree, food);
