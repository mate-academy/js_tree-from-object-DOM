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
    const item = document.createElement('li');

    item.textContent = key;

    if (data[key] instanceof Object && Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }

    mainList.append(item);
  }

  element.append(mainList);

  return mainList;
}

createTree(tree, food);
