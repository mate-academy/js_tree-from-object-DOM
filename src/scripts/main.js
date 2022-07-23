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

  for (const prop in data) {
    const item = document.createElement('li');

    item.innerText = prop;
    list.append(item);

    if (typeof data[prop] === 'object') {
      createTree(item, data[prop]);
    }

    element.append(list);
  };

  return element;
}

createTree(tree, food);
