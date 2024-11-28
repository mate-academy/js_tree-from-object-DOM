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

  const currentGoods = Object.entries(data);

  for (const [key, value] of currentGoods) {
    const listItem = document.createElement('li');

    listItem.textContent = key;

    list.append(listItem);

    if (Object.keys(value).length > 0) {
      createTree(listItem, value);
    }
  }

  element.append(list);
}

createTree(tree, food);
