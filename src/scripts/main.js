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
  const keys = Object.keys(data);

  if (keys.length === 0) {
    return;
  }

  const list = document.createElement('ul');

  keys.forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;
    createTree(item, data[key]);
    list.append(item);
  });

  element.append(list);
}

createTree(tree, food);
