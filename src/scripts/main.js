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
  const list = document.createElement('ul');

  for (const product in data) {
    const item = document.createElement('li');

    item.textContent = product;
    list.append(item);

    element.append(list);

    const productInfo = data[product];

    if (Object.keys(productInfo).length > 0) {
      createTree(item, productInfo);
    }
  }
}

createTree(tree, food);
