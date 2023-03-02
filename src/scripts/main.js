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
  Object.keys(data).forEach(key => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    element.append(ul);
    li.textContent = key;
    ul.append(li);

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  });
}

createTree(tree, food);
