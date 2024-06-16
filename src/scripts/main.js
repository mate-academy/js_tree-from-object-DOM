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
  const rootList = document.createElement('ul');

  for (const product in data) {
    const item = document.createElement('li');

    item.textContent = product;
    rootList.appendChild(item);

    if (Object.keys(data[product]).length) {
      createTree(item, data[product]);
    }
  }

  element.appendChild(rootList);
}

createTree(tree, food);
