'use strict';

const food = {
  // data
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

let tree = document.querySelector('#tree'); // element

if (!tree) {
  tree = document.createElement('div');
  tree.id = 'tree';
  document.body.appendChild(tree);
}

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  Object.keys(data).forEach((key) => {
    const item = document.createElement('li');

    item.textContent = key;
    list.append(item);

    const subdata = data[key];

    if (typeof subdata === 'object' && Object.keys(subdata).length > 0) {
      createTree(item, subdata);
    }
  });
}

createTree(tree, food);
