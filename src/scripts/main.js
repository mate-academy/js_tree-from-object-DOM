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

  for (const key in data) {
    const listItem = document.createElement('li');

    listItem.textContent = key;
    unorderedList.append(listItem);

    if (Object.values(data[key]).length > 0) {
      createTree(listItem, data[key]);
    }
  }

  element.append(unorderedList);
}

createTree(tree, food);
