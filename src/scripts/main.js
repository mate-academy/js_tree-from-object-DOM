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

  if (!keys.length) {
    return;
  }

  const list = document.createElement('ul');

  keys.forEach((key) => {
    const item = document.createElement('li');

    item.append(key);

    if (Object.keys(data[key]).length) {
      createTree(item, data[key]);
    }

    list.append(item);
  });

  element.append(list);
}

createTree(tree, food);
