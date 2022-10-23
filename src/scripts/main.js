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

  Object.keys(data).forEach(key => {
    const listItems = document.createElement('li');

    listItems.textContent = key;

    list.append(listItems);

    if (typeof data[key] === 'object') {
      createTree(listItems, data[key]);
    };
    element.append(list);
  });
}

createTree(tree, food);
