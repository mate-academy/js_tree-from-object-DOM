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

  for (const value in data) {
    element.append(ul);

    const li = document.createElement('li');

    li.textContent = value;
    ul.append(li);

    const node = data[value];

    if (Object.keys(node).length !== 0) {
      createTree(li, node);
    }
  }
}

createTree(tree, food);
