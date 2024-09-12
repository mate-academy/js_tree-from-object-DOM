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

  Object.entries(data).forEach(([key, value]) => {
    const item = document.createElement('li');

    item.append(key);
    list.append(item);

    if (Object.keys(value).length) {
      createTree(item, value);
    }
  });

  element.append(list);
}

createTree(tree, food);
