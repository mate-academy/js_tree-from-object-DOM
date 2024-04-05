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

  if (element) {
    element.append(list);
  } else {
    list.id = 'tree';
    document.body.prepend(list);
  }

  for (const key in data) {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    if (Object.keys(data[key]).length) {
      createTree(item, data[key]);
    }
  }
}

createTree(tree, food);
