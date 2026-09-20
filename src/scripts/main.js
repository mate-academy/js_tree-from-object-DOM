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

  Object.keys(data).forEach((i) => {
    const item = document.createElement('li');

    item.textContent = i;

    if (Object.keys(data[i]).length > 0) {
      createTree(item, data[i]);
    }

    list.append(item);
  });

  element.append(list);
}

createTree(tree, food);
