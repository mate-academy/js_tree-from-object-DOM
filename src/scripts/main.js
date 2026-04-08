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
  const unorderedList = document.createElement('ul');

  for (const item in data) {
    const listItem = document.createElement('li');

    listItem.textContent = item;

    if (Object.keys(data[item]).length !== 0) {
      createTree(listItem, data[item]);
    }
    unorderedList.append(listItem);
  }
  element.append(unorderedList);
}

createTree(tree, food);
