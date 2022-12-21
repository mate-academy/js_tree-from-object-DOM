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
  const ul = document.createElement('ul');

  for (const keys in data) {
    const li = document.createElement('li');

    li.textContent = keys;
    ul.append(li);

    if (data[keys]) {
      createTree(li, data[keys]);
    }
  }

  element.append(ul);
}

createTree(tree, food);
