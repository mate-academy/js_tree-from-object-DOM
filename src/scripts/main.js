'use strict';

const food = {
  'Drink': {
    'Wine': {},
    'Schnaps': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.append(list);

  for (const val of Object.entries(data)) {
    const item = document.createElement('li');

    item.innerText = val[0];
    list.append(item);
    createTree(item, val[1]);

    // if (val.length > 0) {
    //   item.innerText = val[0];
    //   list.append(item);
    //   createTree(item, val[1]);
    // }
  }
}

createTree(tree, food);
