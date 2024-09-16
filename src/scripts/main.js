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
  const newList = document.createElement('ul');

  for (const key in data) {
    const partOflist = document.createElement('li');

    partOflist.textContent = key;

    if (Object.keys(data[key]).length) {
      createTree(partOflist, data[key]);
    }

    newList.append(partOflist);
  }

  element.append(newList);
}

createTree(tree, food);
