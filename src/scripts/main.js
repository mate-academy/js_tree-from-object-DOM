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
  if (Object.keys(data).length === 0) {
    return;
  }

  const list = document.createElement('ul');

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    list.insertAdjacentElement('beforeend', item);

    if (typeof data[key] === 'object') {
      createTree(item, data[key]);
    }
  }

  element.insertAdjacentElement('beforeend', list);
}

createTree(tree, food);
