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

    element.appendChild(ul);

    const li = document.createElement('li');
    const text = document.createTextNode(key);

    li.appendChild(text);
    ul.appendChild(li);

    if (typeof data[key] === 'object') {
      createTree(li, data[key]);
    }
  });
}

createTree(tree, food);
