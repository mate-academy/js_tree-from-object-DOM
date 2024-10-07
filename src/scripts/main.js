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
  const branch = document.createElement('ul');

  Object.keys(data).forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;

    if (Object.keys(data[key]).length > 0) {
      createTree(item, data[key]);
    }

    branch.append(item);
  });

  element.append(branch);
}

createTree(tree, food);
