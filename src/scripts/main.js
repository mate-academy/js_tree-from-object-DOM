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

function createTree(element, data) {
  const tree = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const branch = document.createElement('li');

    branch.textContent = key;
    tree.append(branch);

    if (Object.keys(value).length !== 0) {
      createTree(branch, value);
    }
  }

  element.append(tree);
}

createTree(document.querySelector('#tree'), food);
