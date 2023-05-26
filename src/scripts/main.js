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

  if (Object.keys(data).length !== 0) {
    element.append(ul);

    for (const key in data) {
      const li = document.createElement('li');

      li.textContent = [key];
      ul.append(li);

      createTree(li, data[key]);
    }
  }
};

createTree(tree, food);
