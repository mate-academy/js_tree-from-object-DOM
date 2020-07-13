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

  Object.entries(data).forEach(([key, value]) => {
    const item = document.createElement('li');

    item.innerText = key;
    list.append(item);
    createTree(list, value);
  });

  element.append(list);
}

createTree(tree, food);
