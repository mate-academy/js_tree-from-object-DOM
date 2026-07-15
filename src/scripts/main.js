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
  const mainList = document.createElement('ul');

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    const value = data[key];

    if (Object.keys(value).length > 0) {
      createTree(listItem, value);
    }

    mainList.append(listItem);
  }

  element.append(mainList);
}

createTree(tree, food);
