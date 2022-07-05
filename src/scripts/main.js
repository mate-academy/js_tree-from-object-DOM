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
  const result = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const item = document.createElement('li');

    item.innerText = key;

    if (Object.keys(value).length) {
      createTree(item, value);
    }

    result.append(item);
  }

  element.append(result);
}

createTree(tree, food);
