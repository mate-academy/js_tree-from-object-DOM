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

  for (const i in data) {
    const li = document.createElement('li');

    li.innerText = i;
    ul.append(li);

    if (typeof data[i] === 'object') {
      createTree(li, data[i]);
    };

    element.append(ul);
  }
}

createTree(tree, food);
