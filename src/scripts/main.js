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
  if (Object.keys(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (let i = 0; i < Object.keys(data).length; i++) {
    const li = document.createElement('li');

    li.textContent = Object.keys(data)[i];
    ul.append(li);

    createTree(li, data[Object.keys(data)[i]]);
  }

  element.append(ul);
}

createTree(tree, food);
