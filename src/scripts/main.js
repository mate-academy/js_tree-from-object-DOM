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
  if (!Object.keys(data).length) {
    return;
  }

  const list = document.createElement('ul');

  element.append(list);

  const dataList = Object.keys(data);

  for (const key of dataList) {
    const item = document.createElement('li');

    item.innerHTML = key;
    list.append(item);

    createTree(item, data[key]);
  }
}

createTree(tree, food);
