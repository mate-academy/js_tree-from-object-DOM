'use strict';

const food = {
  Meat: {
    Pork: {},
    Beef: {},
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

  for (const key in data) {
    const item = document.createElement('li');

    item.innerHTML = key;
    list.append(item);
    element.append(list);
    createTree(list, data[key]);
  }
}

createTree(tree, food);
