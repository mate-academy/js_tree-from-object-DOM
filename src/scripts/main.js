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

  for (const key of keys) {
    const item = document.createElement('li');

    item.insertAdjacentText('beforeend', key);

    createTree(item, data[key]);

    list.insertAdjacentElement('beforeend', item);
  }

  element.insertAdjacentElement('beforeend', list);
}

createTree(tree, food);
